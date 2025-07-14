const mongoose = require('mongoose');

const HeadingSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Heading', HeadingSchema);
