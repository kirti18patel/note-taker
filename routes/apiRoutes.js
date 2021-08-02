const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/db.json'))
  );
  res.json(notes);
});

router.post('/notes', (req, res) => {
    const notes = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../db/db.json'))
    );
    const newNote = req.body;
  
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notes)
    );
    res.send('note added');
  });

module.exports = router;