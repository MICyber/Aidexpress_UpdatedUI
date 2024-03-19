// src/services/applicationService.js
const Application = require('../models/applicationModel');

async function updateApplicationStatus(_id, newStatus, note) {
  const application = await Application.findById(_id);
  if (!application) throw new Error('Application not found');

  application.status = newStatus;
  application.updates.push({ status: newStatus, note });

  await application.save();
  return application;
}
async function saveApplication(applicationData) {
    const application = new Application(applicationData);
    await application.save();
    return application;
  }
  
  async function deleteApplication(applicationId) {
    const application = await Application.findByIdAndDelete(applicationId);
    if (!application) {
      throw new Error('Application not found');
    }
    return application;
  }

  async function getAllApplications() {
    const applications = await Application.find();
    return applications;
  }
  
  async function getByIdApplication(_id) {
    console.log("id->", _id);
    // Use _id instead of id
    const application = await Application.findById(_id);
    if (!application) {
      throw new Error('Application not found');
    }
    return application;
  }
  
  module.exports = {
    updateApplicationStatus,
    saveApplication,
    deleteApplication,
    getAllApplications,
    getByIdApplication
  };
