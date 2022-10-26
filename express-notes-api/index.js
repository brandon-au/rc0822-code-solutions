const express = require('express');
const app = express();
const fs = require('fs');
const json = require('./data.json');

app.use(express.json());

app.get('/api/notes/', (req, res) => {
  const notes = [];
  for (const id in json.notes) {
    notes.push(json.notes[id]);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = json.notes[id];
  if (id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!note) {
    res.status(404).json({
      error: `cannot find note with id: ${id}`
    });
  } else {
    res.json(note);
  }
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body.content;
  // can also do: const { newNote } = req.body
  if (typeof newNote === 'undefined') {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  const note = {
    id: json.nextId,
    content: newNote
  };
  json.notes[note.id] = note;
  json.nextId++;
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', jsonString, 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error has occured'
      });
    } else {
      res.status(201).json(note);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = json.notes[id];
  if (id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!note) {
    res.status(404).json({
      error: `cannot find note with id: ${id}`
    });
  }
  delete json.notes[id];
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', jsonString, 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error has occured'
      });
    } else {
      res.sendStatus(204);
    }
  });
});

// or app.patch; patch actually updates
// put creates new object and replaces existing one
app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const newNote = req.body.content;
  if (id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  if (typeof newNote === 'undefined') {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  if (typeof json.notes[id] === 'undefined') {
    res.status(404).json({
      error: `cannot find note with id: ${id}`
    });
    return;
  }
  const note = {
    id,
    content: newNote
  };
  json.notes[note.id] = note;
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', jsonString, 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error has occured'
      });
    } else {
      res.json(note);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
