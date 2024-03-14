// src/models/transactionModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const transactionSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  amount: Number,
  transactionDate: { type: Date, default: Date.now },
  status: String, // e.g., 'success', 'failed'
  user: { type: String, required: false},
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;