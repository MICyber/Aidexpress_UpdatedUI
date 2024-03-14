/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./src/controllers/userController');
const smsController = require('./src/controllers/smsController');
const paymentController = require('./src/controllers/paymentController');
const donationController = require('./src/controllers/donationController');
const applicationController = require('./src/controllers/applicationController');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
// MongoDB Connection
mongoose.connect('mongodb+srv://adithya:adithya@cluster0.jfwyk0z.mongodb.net/app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error('Could not connect to MongoDB...', err));

// User Registration Route                  
app.post('/api/users', userController.registerUser);
app.get('/api/users/:id', userController.getUser);
app.put('/api/users/:id', userController.updateUserEligibility);
app.delete('/api/users/:id', userController.removeUser);

app.post('/api/send-sms', smsController.sendNotification);

app.post('/api/payments/make-payment', paymentController.processPaymentReq);
app.post('/api/payments', paymentController.create);
app.get('/api/payments', paymentController.getAll);
app.get('/api/payments/:id', paymentController.getById);
app.put('/api/payments/:id', paymentController.update);
app.delete('/api/payments/:id', paymentController.remove);

app.post('/api/donations', donationController.createDonation);
app.get('/api/donations', donationController.getAll);
app.get('/api/donations/:id', donationController.getById);
app.put('/api/donations/:id', donationController.update);
app.delete('/api/donations/:id', donationController.remove);

app.post('/api/applications/:applicationId/track', applicationController.trackApplication);
app.post('/api/applications', applicationController.createApplication);
app.delete('/api/applications/:applicationId', applicationController.removeApplication);
app.get('/api/applications', applicationController.listAllApplications);
app.get('/api/applications/:applicationId', applicationController.getApplicationById);


app.listen(3000, () => console.log('Server running on port 3000'));*/


