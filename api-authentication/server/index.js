require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }

  /* your code starts here */
  const sql = `
  select "userId", "hashedPassword"
  from "users"
  where "username" = $1
  `;
  const params = [username];
  return db.query(sql, params) // query database to find the necessary data
    .then(result => {
      const [user] = result.rows;
      if (!user) {
        throw new ClientError(401, 'invalid login');
      } // all invalid login messages are the same for security reasons
      // purposefully vague so it doesnt specify whats wrong with login information
      const { userId, hashedPassword } = user;
      return argon2
      // call argon2
        .verify(hashedPassword, password)
        // pass it hashedPassword and inputted password and see if hashes match
        .then(isMatching => {
          if (!isMatching) { // passes a boolean
            throw new ClientError(401, 'invalid login');
            // if not a match, false boolean and throws an error
          } // finished validating username and password
          const payload = { userId, username };
          // creates object with user's username and userId, NOT password
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          // jwt from jsonwebtoken library sign() method to --
          // -- pass payload and random string from env file
          // token string can be anything - data gets locked with token_secret
          res.json({ token, user: payload });
          // send back to client the token, user object and payload object
        });
    })
    .catch(err => next(err));
  /**
   * Query the database to find the "userId" and "hashedPassword" for the "username".
   * Then, 😉
   *    If no user is found,
   *      throw a 401: 'invalid login' error.
   *    If a user is found,
   *      confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
   *      Then, 😉
   *        If the password does not match,
   *          throw a 401: 'invalid login' error.
   *        If the password does match,
   *          Create a payload object containing the user's "userId" and "username".
   *          Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
   *          Send the client a 200 response containing the payload and the token.
   *      Catch any error.
   * Catch any error.
   */

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
