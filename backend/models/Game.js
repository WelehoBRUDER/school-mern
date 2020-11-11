const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('series', GameSchema);