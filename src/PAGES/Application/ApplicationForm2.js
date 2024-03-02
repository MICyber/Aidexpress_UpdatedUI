import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";


const ApplicationForm2 = () => {
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    branchName: "",
  });

  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="Form2">
    <Navbar reloadnavbar={false}/>
    <div className="application-form">
      <h1>Application Form</h1>
      <div className="form-section">
        <div className="purple-box">Bank Name:</div>
        <div className="input-field">
          <label htmlFor="bankName" className="label-style">
            <input
              type="text"
              id="bankName"
              name="bankName"
              placeholder="Enter Bank Name"
              value={bankDetails.bankName}
              onChange={handleBankDetailsChange}
            />
          </label>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Account Holder Name:</div>
        <div className="input-field">
          <label htmlFor="accountHolderName" className="label-style">
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              placeholder="Enter Account Holder Name"
              value={bankDetails.accountHolderName}
              onChange={handleBankDetailsChange}
            />
          </label>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Account Number:</div>
        <div className="input-field">
          <label htmlFor="accountNumber" className="label-style">
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter Account Number"
              value={bankDetails.accountNumber}
              onChange={handleBankDetailsChange}
            />
          </label>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Branch Name:</div>
        <div className="input-field">
          <label htmlFor="branchName" className="label-style">
            <input
              type="text"
              id="branchName"
              name="branchName"
              placeholder="Enter Branch Name"
              value={bankDetails.branchName}
              onChange={handleBankDetailsChange}
            />
          </label>
        </div>
      </div>
      <div className="next-button-container">
        <Link to="/ApplicationForm">
            <button className="back-button">Back</button>
        </Link>
        <Link to="/ApplicationForm3">
          <button className="next-button">Next</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ApplicationForm2;
