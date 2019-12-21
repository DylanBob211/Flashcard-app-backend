const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  words: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = WordList = mongoose.model('wordList', WordListSchema);
