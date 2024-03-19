const express = require('express');
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
mongoose.connect('mongodb+srv://user:abcd123@cluster0.wlsh9wk.mongodb.net/Aidexpress', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error('Could not connect to MongoDB...', err));

// User Registration Route


app.post('/api/applications/:applicationId/track', applicationController.trackApplication);
app.post('/api/applications', applicationController.createApplication);
app.delete('/api/applications/:applicationId', applicationController.removeApplication);
app.get('/api/applications', applicationController.listAllApplications);
app.get('/api//applications/:_id', applicationController.getApplicationById);





app.listen(5000, () => console.log('Server running on port 5000'));