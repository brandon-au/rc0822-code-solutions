const takeAChance = require('./take-a-chance');

const bran = takeAChance('Bran')
  .then(value => {
    console.log(value);
  })

  .catch(error => {
    console.log(error.message);
  });
