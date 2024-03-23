// src/services/smsService.js
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Set your environment variable
const authToken = process.env.TWILIO_AUTH_TOKEN; // Set your environment variable
const client = new twilio("AC5e6d3b7896dbabf3a1f613a2276248b1", "2e9f0121d0dcc53aea65f9fea09642ca");
const fromNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio phone number
const messagingServiceSId ="MGd3cee75bdab1955ef3f3fea516cb1949";
async function sendSMS(to, message) {
  try {
    console.log(`Sending message to: ${to}, Message: ${message}`);  // send a massage to phone number
    const messageResponse = await client.messages.create({ 
      body: message,
      to: to, 
      from: fromNumber,
      messagingServiceSid:messagingServiceSId 
    });
    console.log(`Message sent: ${messageResponse.sid}`);
    return messageResponse.sid;
  } catch (error) {
    console.error(`Failed to send message: ${error.message}`);
    throw error;
  }
}

module.exports = { sendSMS };
