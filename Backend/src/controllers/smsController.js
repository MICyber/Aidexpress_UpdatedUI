// src/controllers/smsController.js
const smsService = require('../services/smsService');

async function sendNotification(req, res) {
  const { to, message } = req.body;
  try {
    const messageSid = await smsService.sendSMS(to, message);
    res.send({ success: true, sid: messageSid, message: 'SMS sent successfully.' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
}

module.exports = { sendNotification };
