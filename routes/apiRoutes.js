const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/notes', (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/db.json'))
  );
  res.json(notes);
});

module.exports = router;