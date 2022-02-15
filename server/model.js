const mongoose = require('mongoose')
const { Schema } = mongoose.Schema;

const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String, required: true
  }
});

const feedback = mongoose.model('feedback', feedbackSchema);

modules.exports = feedback
