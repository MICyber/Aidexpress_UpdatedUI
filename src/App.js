import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/Product/ProductPage';
import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';
import AccessLevel from  './PAGES/Extra/AccessLevel';


import OfficerLogin from "./PAGES/AuthOfficer/OfficerLogin"; 
import Officersignup from "./PAGES/AuthOfficer/OfficerSignup"; 
import OfficerForgotPassword from "./PAGES/AuthOfficer/OfficerForgotPassword"; 



import LoginUser from "./PAGES/Auth/Login"; 
import Login from './PAGES/Auth/Login';
import Signup from './PAGES/Auth/Signup';
import ForgotPassword from './PAGES/Auth/ForgotPassword';
import Cart from './PAGES/Cart/Cart';
import UserProfile from './PAGES/User/UserProfile';
import FAQ from './PAGES/Extra/FAQ';
import Termsandconditions from './PAGES/Extra/Termsandconditions';
import PrivacyPolicy from './PAGES/Extra/PrivacyPolicy';
import Donation from './COMPONENTS/Donation/Donation';


const App = () => {
  return (
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
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/user/:activepage' element={<UserProfile/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/termsandconditions" element={<Termsandconditions/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/Donation" element={<Donation/>} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App