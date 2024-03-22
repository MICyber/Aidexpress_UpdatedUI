import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ApplicationForm2 = () => {

  const location = useLocation();
  const { request } = location.state || {};
  const { t } = useTranslation();

  useEffect(() => {

    console.log("data=>", request);

  }, []);

  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    branchName: "",
  });

  request.bankName = bankDetails.bankName;
  request.accountHolderName = bankDetails.accountHolderName;
  request.accountNumber = bankDetails.accountNumber;
  request.branchName = bankDetails.branchName;

  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="Form2">
      <Navbar reloadnavbar={false} />
      <div className="application-form">
        <h1>Application Form</h1>
        <form>
          <div className="form-section">
            <div className="purple-box">{t("BankName")}</div>
            <div className="input-field">
              <label htmlFor="bankName" className="label-style">
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  placeholder={t("EnterBankName")}
                  value={bankDetails.bankName}
                  onChange={handleBankDetailsChange}
                />
              </label>
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("AccountName")}</div>
            <div className="input-field">
              <label htmlFor="accountHolderName" className="label-style">
                <input
                  type="text"
                  id="accountHolderName"
                  name="accountHolderName"
                  placeholder={t("EnterAccountName")}
                  value={bankDetails.accountHolderName}
                  onChange={handleBankDetailsChange}
                />
              </label>
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("AccNumber")}</div>
            <div className="input-field">
              <label htmlFor="accountNumber" className="label-style">
                <input
                  type="number"
                  id="accountNumber"
                  name="accountNumber"
                  placeholder={t("EnterAccNumber")}
                  value={bankDetails.accountNumber}
                  onChange={handleBankDetailsChange}
                />
              </label>
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("BranchName")}</div>
            <div className="input-field">
              <label htmlFor="branchName" className="label-style">
                <input
                  type="text"
                  id="branchName"
                  name="branchName"
                  placeholder={t("EnterBranchName")}
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
            <Link to="/ApplicationForm3" state={{ request }}>
              <button className="next-button" disabled={!bankDetails.bankName || !bankDetails.accountHolderName || !bankDetails.accountNumber || !bankDetails.branchName}>Next</button>
            </Link>
            {(!bankDetails.bankName || !bankDetails.accountHolderName || !bankDetails.accountNumber || !bankDetails.branchName) && <p className="error-message">Please fill in all fields.</p>}
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default ApplicationForm2;
