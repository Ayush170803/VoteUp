const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  party: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Form', formSchema);
