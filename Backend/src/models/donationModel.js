// src/models/donationModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const donationSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  donorName: { type: String, required: true },
  amount: { type: Number, required: true },
  donationDate: { type: Date, default: Date.now },
  message: String, 
  user: { type: String, required: false},
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
