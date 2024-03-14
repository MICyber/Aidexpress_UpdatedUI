// src/services/userService.js
const User = require('../models/userModel');

async function createUser(userData) {
  const user = new User(userData);
  await user.save();
  return user;
}

async function getUserById(userId) {
  const user = await User.findById(userId);
  return user;
}

 async function updateUserEligibility(isEligible,id) {
      const user = await User.findByIdAndUpdate(
        id,
        { isEligible },
        { new: true } 
      );
      return user;
    }
  
    async function deleteUser(userId) {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }
    
module.exports = {
  createUser,
  getUserById,
  updateUserEligibility,
  deleteUser
};
