// src/controllers/applicationController.js
const applicationService = require('../services/applicationService');

async function trackApplication(req, res) {
  const { applicationId } = req.params;
  try {
    const application = await applicationService.updateApplicationStatus(
      req.body._id,
      req.body.status,
      req.body.note,
    );
    res.json(application);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
async function createApplication(req, res) {
    try {
      const application = await applicationService.saveApplication(req.body);
      res.status(201).json(application);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
  
  async function removeApplication(req, res) {
    const { applicationId } = req.params;
    try {
      await applicationService.deleteApplication(applicationId);
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async function listAllApplications(req, res) {
    try {
      const applications = await applicationService.getAllApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
  
  async function getApplicationById(req, res) {
    const { _id } = req.params;
    try {
      const application = await applicationService.getByIdApplication(_id);
      res.json(application);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }
  
  
  module.exports = {
    trackApplication,
    createApplication,
    removeApplication,
    listAllApplications,
  getApplicationById,
  };


