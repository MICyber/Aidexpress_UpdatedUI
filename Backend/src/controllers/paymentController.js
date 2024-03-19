// src/controllers/paymentController.js
const paymentService = require('../services/paymentService');

async function processPaymentReq(req, res) {
  const { userId, amount } = req.body;
  try {
    const transaction = await paymentService.makePayment(userId, amount);
    res.json({ message: 'Payment processed successfully', transaction });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


async function create(req, res) {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAll(req, res) {
  const payments = await paymentService.getAllPayments();
  res.json(payments);
}

async function getById(req, res) {
  const payment = await paymentService.getPaymentById(req.params.id);
  if (!payment) {
    return res.status(404).json({ message: 'Payment not found' });
  }
  res.json(payment);
}

async function update(req, res) {
  try {
    const payment = await paymentService.updatePayment(req.params.id, req.body);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function remove(req, res) {
  try {
    await paymentService.deletePayment(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { 
  processPaymentReq,
  create,
  getAll,
  getById,
  update,
  remove, };
