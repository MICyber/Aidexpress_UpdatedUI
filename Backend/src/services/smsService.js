// src/services/smsService.js
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Set your environment variable
const authToken = process.env.TWILIO_AUTH_TOKEN; // Set your environment variable
const client = new twilio("AC5e6d3b7896dbabf3a1f613a2276248b1", "338e1a6533ab4ef2df77576a9525684b");
const fromNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio phone number

async function sendSMS(to, messageText) {
  client.messages
      .create({
          from: '+14242518930',
          to: to,
          body: messageText // Add the body parameter with the message content
      })
      .then(message => console.log(message.sid))
      .catch(error => console.error(error));
}

module.exports = { sendSMS };



