import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './ApplicationForm.css';
import { useTranslation } from 'react-i18next';


const ApplicationForm = () => {
  
  // State hooks for each form input
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(""); // Define nameError state
  const [address, setAddress] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [telephone, setTelephone] = useState("");
  const [age, setAge] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isSingleParent, setIsSingleParent] = useState(false);
  const [divisionalSecretariat, setDivisionalSecretariat] = useState("");
  const [divisionalSecretariatError, setDivisionalSecretariatError] = useState(""); // Define divisionalSecretariatError state
  const [gramaSevakaDivision, setGramaSevakaDivision] = useState("");
  const [gramaSevakaDivisionError, setGramaSevakaDivisionError] = useState(""); // Define gramaSevakaDivisionError state

  // Create the request object with form data
  const request = {
    nameOfHouseholder: name,
    address: address,
    nicNumber: nicNumber,
    telephoneNumber: telephone,
    age: age,
    namesOfFamilyMembers: familyMembers,
    maritalStatus: maritalStatus,
    singleParent: isSingleParent,
    divisionalSecretariat: divisionalSecretariat,
    gramaSevakaDivision: gramaSevakaDivision
  };


  // Validation functions
  const isNameValid = (input) => /^[a-zA-Z\s]*$/.test(input);
  const isDivisionalSecretariatValid = (input) => /^[a-zA-Z\s]*$/.test(input);
  const isGramaSevakaDivisionValid = (input) => /^[a-zA-Z\s]*$/.test(input);


  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!isNameValid(value)) {
      setNameError("Name should contain only letters and spaces.");
    } else {
      setNameError("");
    }
  };


  const handleDivisionalSecretariatChange = (e) => {
    const value = e.target.value;
    setDivisionalSecretariat(value);
    if (!isDivisionalSecretariatValid(value)) {
      setDivisionalSecretariatError("Divisional Secretariat should contain only letters and spaces.");
    } else {
      setDivisionalSecretariatError("");
    }
  };

  const handleGramaSevakaDivisionChange = (e) => {
    const value = e.target.value;
    setGramaSevakaDivision(value);
    if (!isGramaSevakaDivisionValid(value)) {
      setGramaSevakaDivisionError("Grama Sevaka Division should contain only letters and spaces.");
    } else {
      setGramaSevakaDivisionError("");
    }
  };
  
    // Function to format phone number to international format
    const formatPhoneNumber = (phoneNumber) => {
      // Remove any non-digit characters
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      // Check if the number starts with "0"
      if (cleanedPhoneNumber.startsWith("0")) {
        // Replace "0" with "+94"
        return "+94" + cleanedPhoneNumber.substring(1);
      }
      // Return the original phone number if it's already in the international format
      return phoneNumber;
    };
  console.log(request);
  const { t } = useTranslation();
  return (
    <div className="Form1">
      <Navbar reloadnavbar={false} />
      <div className="application-form">
        <h1>{t("Application Form")}</h1>
        <form>
          <div className="form-section">
            <div className="purple-box">{t("Applica_Name")}</div>
            <div className="input-field">
            <input type="text" placeholder={t("Enter Name" )}  value={name} onChange={handleNameChange} />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Addre")}</div>
            <div className="input-field">
              <input type="text" placeholder={t("Enter Address" )}  onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">{t("NIC Number:")}</div>
            <div className="input-field">
              <input type="number" placeholder={t("Enter NIC Number")}  onChange={(e) => setNicNumber(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">{t("Telephone Number:")}</div>
            <div className="input-field">
              <input 
                type="tel" 
                placeholder={t("Enter Telephone Number")} 
                value={telephone} 
                onChange={(e) => setTelephone(formatPhoneNumber(e.target.value))} 
              />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">{t("Appli_age")}</div>
            <div className="input-field">
              <input type="number" placeholder={t("Enter Age")}  onChange={(e) => setAge(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">{t("Names of Family Members:")}</div>
            <div className="input-field">
              <input type="text" placeholder={t("Enter Names" )}  onChange={(e) => setFamilyMembers(e.target.value)} />
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">{t("Marital Status:")}</div>
            <div className="input-field">
              <select onChange={(e) => setMaritalStatus(e.target.value)}>
                <option value="single">{t("Single")}</option>
                <option value="married">{t("Married")}</option>
                <option value="divorced">{t("Divorced")}</option>
                <option value="divorced">{t("Widowed")}</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">{t("Is a Single Parent")}</div>
            <div className="input-field">
              <select value={isSingleParent} onChange={(e) => setIsSingleParent(e.target.value)}>
                <option value="yes">{t("Yes")}</option>
                <option value="no">{t("No")}</option>
              </select>
            </div>
          </div>
  

          <div className="form-section">
            <div className="purple-box">{t("Divisional_Secretariat")}</div>
            <div className="input-field">
            <input 
                type="text" 
                placeholder={t("Enter")} 
                onChange={handleDivisionalSecretariatChange} 
              />
              {divisionalSecretariatError && <p className="error-message">{divisionalSecretariatError}</p>}
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">{t("Grama Sevaka Division")}</div>
            <div className="input-field">
            <input 
              type="text" 
              placeholder={t("Informationn")} 
              onChange={handleGramaSevakaDivisionChange} 
            />
            {gramaSevakaDivisionError && <p className="error-message">{gramaSevakaDivisionError}</p>}
            </div>
          </div>
  
          <div className="next-button-container">
            <Link to="/ApplicationForm2" state={{request }} >
              <button className="next-button" disabled={!name || !address || !nicNumber || !telephone || !age || !familyMembers || !divisionalSecretariat || !gramaSevakaDivision}>{t("Next")}</button>
            </Link>
            {(!name || !address || !nicNumber || !telephone || !age || !familyMembers || !divisionalSecretariat || !gramaSevakaDivision) && <p className="error-message">{t("Please fill in all fields")}</p>}
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default ApplicationForm;



