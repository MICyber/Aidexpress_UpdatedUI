// src/controllers/userController.js
const userService = require('../services/userService');

async function registerUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getUser(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found.');
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateUserEligibility(req, res) {
    try {
        const { isEligible } = req.body;
        const user = await userService.updateUserEligibility(isEligible, req.params.id);
        if (!user) {
        return res.status(404).send('User not found.');
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
    
}

async function removeUser(req, res) {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  registerUser,
  getUser,
  updateUserEligibility,
  removeUser,
};
