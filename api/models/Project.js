const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  isFocus: {
    type: Boolean,
    default: false
  },
  createdDate: {
    type: String,
    default: Date.now
  },
  updatedDate: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('Projects',ProjectSchema);