// src/controllers/donationController.js
const donationService = require('../services/donationService');

async function createDonation(req, res) {
  try {
    const donation = await donationService.addDonation(req.body);
    res.status(201).send({ message: 'Thank you for your donation!', donation });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getAll(req, res) {
  const donations = await donationService.getAllDonations();
  res.json(donations);
}

async function getById(req, res) {
  const donation = await donationService.getDonationById(req.params.id);
  if (!donation) {
    return res.status(404).json({ message: 'Donation not found' });
  }
  res.json(donation);
}

async function update(req, res) {
  try {
    const donation = await donationService.updateDonation(req.params.id, req.body);
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    res.json(donation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function remove(req, res) {
  try {
    await donationService.deleteDonation(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createDonation,
  getAll,
  getById,
  update,
  remove,
};
