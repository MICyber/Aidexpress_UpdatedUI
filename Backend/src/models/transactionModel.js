// src/models/transactionModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const transactionSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  amount: String,
  transactionDate: { type: Date, default: Date.now },
  status: String, // e.g., 'success', 'failed'
  email: { type: String, required: false},
  phoneNumber: { type: String, required: false},
  address: { type: String, required: false},
  paymentMethod: { type: String, required: false},
  cardNumber: { type: String, required: false},
  slip:{ type: String, required: false},
  bank: { type: String, required: false},
  branch: { type: String, required: false},
  user: { type: String, required: false},
  
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
