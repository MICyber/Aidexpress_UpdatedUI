// src/utils/demoPaymentLib.js
function processPayment(userId, amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) { 
          resolve({ userId, amount, status: 'success' });
        } else {
          reject(new Error('Payment processing failed'));
        }
      }, 1000);
    });
  }
  
  module.exports = { processPayment };
  