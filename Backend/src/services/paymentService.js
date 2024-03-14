// src/services/paymentService.js
const { processPayment } = require('../utils/demoPaymentLib');
const Transaction = require('../models/transactionModel');

async function makePayment(userId, amount) {
  try {
    const paymentResult = await processPayment(userId, amount);
    const transaction = new Transaction({ ...paymentResult, transactionDate: new Date() });
    await transaction.save();
    return transaction;
  } catch (error) {
   
    const transaction = new Transaction({ userId, amount, status: 'failed', transactionDate: new Date() });
    await transaction.save();
    throw error; 
  }
}

async function createPayment(data) {
  const transaction = new Transaction(data);
  await transaction.save();
  return transaction;
}

async function getAllPayments() {
  return await Transaction.find();
}

async function getPaymentById(id) {
  return await Transaction.findById(id);
}

async function updatePayment(id, data) {
  return await Transaction.findByIdAndUpdate(id, data, { new: true });
}

async function deletePayment(id) {
  return await Transaction.findByIdAndDelete(id);
}


module.exports = {
   makePayment,
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment, };
