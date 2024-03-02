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
// import donateform from './COMPONENTS/pages/DonateForm';

import './118n.js';




function Loading() {
  return (
    <>Loading...</>
  )
}

const App = () => {';/'
  return (
    
<Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" 
          element={
            <ProductPage/>
          }
        />
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
        {/* <Route path="/donationform" element={<donationform/>}/> */}


        
      </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default App