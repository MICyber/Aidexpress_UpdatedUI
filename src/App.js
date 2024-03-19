import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/Product/ProductPage';
import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';

import AccessLevel from  './PAGES/Extra/AccessLevel';
import AccessLevelForSignIn from  './PAGES/Extra/AccessLevelForSignUp';
import OfficerLogin from "./PAGES/AuthOfficer/OfficerLogin"; 
import Officersignup from "./PAGES/AuthOfficer/OfficerSignup"; 
import OfficerForgotPassword from "./PAGES/AuthOfficer/OfficerForgotPassword"; 
import LoginUser from "./PAGES/Auth/Login"; 
import Login from './PAGES/Auth/Login';

import SignUpUser from './PAGES/Auth/Signup';
import OfficerSignUp from './PAGES/AuthOfficer/OfficerSignup';

import ForgotPassword from './PAGES/Auth/ForgotPassword';
import Cart from './PAGES/Cart/Cart';

import UserProfile from './PAGES/User/UserProfile';
import OfficerProfile from './PAGES/Officer/UserProfile';


import FAQ from './PAGES/Extra/FAQ';
import Termsandconditions from './PAGES/Extra/Termsandconditions';
import PrivacyPolicy from './PAGES/Extra/PrivacyPolicy';

import ApplicationForm from './PAGES/Application/ApplicationForm';
import ApplicationForm2 from './PAGES/Application/ApplicationForm2.js';
import ApplicationForm3 from './PAGES/Application/ApplicationForm3.js';
import DocumentUploadPage from './PAGES/Application/DocumentUploadPage.js';
import DonationForm from './COMPONENTS/Donation/DonationForm.js';

import './118n.js';
import DonateEvidence from './COMPONENTS/Donation/DonateEvidence.js';







function Loading() {
  return (
    <div className='load'>
    <>Loading...</>
    </div>
  )
}

const App = () => {';/'
  return (
    
<Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" element={ <ProductPage/> }/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/AccessLevel" element={<AccessLevel/>} />
        <Route path="/LoginUser" element={<LoginUser/>} />
        <Route path="/OfficerLogin" element={<OfficerLogin/>} />
        <Route path="/Officersignup" element={<Officersignup/>} />
        <Route path="/OfficerForgotPassword" element={<OfficerForgotPassword/>} />

        <Route path="/AccessLevelForSignUp" element={<AccessLevelForSignIn/>} />
        <Route path="/SignUpUser" element={<SignUpUser/>} />
        <Route path="/OfficerSignUp" element={<OfficerSignUp/>} />

        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/cart" element={<Cart/>} />

        <Route path='/UserProfile/:activepage' element={<UserProfile/>} />
        <Route path='/OfficerProfile/:activepage' element={<OfficerProfile/>} />
        
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/termsandconditions" element={<Termsandconditions/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />

        <Route path="/ApplicationForm" element={<ApplicationForm/>} />
        <Route path="/ApplicationForm2" element={<ApplicationForm2/>} />
        <Route path="/ApplicationForm3" element={<ApplicationForm3/>} />
        <Route path="/DocumentUploadPage" element={<DocumentUploadPage/>} />
        <Route path="/DonationForm" element={<DonationForm/>} />
        <Route path="/DonateEvidence" element={<DonateEvidence/>} />



        
      </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default App;

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


app.listen(3000, () => console.log('Server running on port 3000'));
 */