const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
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

module.exports = mongoose.model('Documents',DocumentSchema);