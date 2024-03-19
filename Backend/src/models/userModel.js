const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const userSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    isEligible: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
