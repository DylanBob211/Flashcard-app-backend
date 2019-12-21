const express = require('express');
const router = express.Router();

// WordList Model
const WordList = require('../models/WordList');

router.get('/', (req, res) => {
  WordList
    .find()
    .sort({ date: -1 })
    .then(wordLists => res.json(wordLists));
});

router.post('/', (req, res) => {
  const newWordList = new WordList({
    name: req.body.name,
    words: req.body.words
  })

  newWordList
    .save()
    .then(wordList => res.json(wordList))
});

router.delete('/:id', (req, res) => {
  WordList
    .findById(req.params.id)
    .then(wordList => 
      wordList
        .remove()
        .then(res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;
