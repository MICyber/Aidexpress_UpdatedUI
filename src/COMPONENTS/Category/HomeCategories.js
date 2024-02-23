import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Images/image_sms.png";
import img2 from "../../ASSETS/Images/image_bank.png";
import img3 from "../../ASSETS/Images/image_language.png";
import img4 from "../../ASSETS/Images/image_donate.png";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img1} alt="img1" />
        <div className="content">
          <h1>SMS Services</h1>
          <p>Connect anytime, anywhere, no smartphone needed!</p>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1>Track Your Donations</h1>
          <p>Receive, track, collect at a bank or Samurdhi officer. Easy & secure.</p>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>Multilingual Support</h1> 
          <p>Sinhala, Tamil, and English.</p>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>Support the Cause</h1>
          <p>Donate to help those in need</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
