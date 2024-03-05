import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";

const ApplicationForm2 = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Store bank details in Firebase
      const response = await fetch('https://aidexpress-1fe47-default-rtdb.firebaseio.com/bankDetails.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bankDetails)
      });
      
      if (!response.ok) {
        throw new Error('Failed to store bank details');
      }

      // Navigate to the next page
      navigate('/ApplicationForm3');
    } catch (error) {
      console.error("Error storing bank details:", error);
      // Handle error appropriately (e.g., show error message to the user)
    }
  };

  return (
    <div className="Form2">
      <Navbar reloadnavbar={false}/>
      <div className="application-form">
        <h1>Application Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="purple-box">Bank Name:</div>
            <div className="input-field">
              <input
                type="text"
                name="bankName"
                placeholder="Enter Bank Name"
                value={bankDetails.bankName}
                onChange={handleBankDetailsChange}
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Account Holder Name:</div>
            <div className="input-field">
              <input
                type="text"
                name="accountHolderName"
                placeholder="Enter Account Holder Name"
                value={bankDetails.accountHolderName}
                onChange={handleBankDetailsChange}
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Account Number:</div>
            <div className="input-field">
              <input
                type="text"
                name="accountNumber"
                placeholder="Enter Account Number"
                value={bankDetails.accountNumber}
                onChange={handleBankDetailsChange}
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Branch Name:</div>
            <div className="input-field">
              <input
                type="text"
                name="branchName"
                placeholder="Enter Branch Name"
                value={bankDetails.branchName}
                onChange={handleBankDetailsChange}
              />
            </div>
          </div>
          <div className="next-button-container">
            <Link to="/ApplicationForm">
              <button className="back-button">Back</button>
            </Link>
            <button type="submit" className="next-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm2;
