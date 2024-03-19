// src/services/smsService.js
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Set your environment variable
const authToken = process.env.TWILIO_AUTH_TOKEN; // Set your environment variable
const client = new twilio("ACdd8505b40d9163fc0e5d933ef197d406", "ce7317e5e5421268a58bba08c2c9e453");
const fromNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio phone number
const messagingServiceSId ="MG19e475956088e87388ee487adff89df7";
async function sendSMS(to, message) {
  try {
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
