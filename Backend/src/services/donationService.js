// src/services/donationService.js
const Donation = require('../models/donationModel');

async function addDonation(donationData) {
  const donation = new Donation(donationData);
  await donation.save();
  return donation;
}
async function getAllDonations() {
  return await Donation.find();
}

async function getDonationById(id) {
  return await Donation.findById(id);
}

async function updateDonation(id, data) {
  return await Donation.findByIdAndUpdate(id, data, { new: true });
}

async function deleteDonation(id) {
  return await Donation.findByIdAndDelete(id);
}

module.exports = {
  addDonation,
  getAllDonations,
  getDonationById,
  updateDonation,
  deleteDonation,
};
