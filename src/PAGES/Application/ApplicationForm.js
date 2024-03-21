import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './ApplicationForm.css';                                   /////////git code ekaaaa

const ApplicationForm = () => {
  // State hooks for each form input
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [telephone, setTelephone] = useState("");
  const [age, setAge] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isSingleParent, setIsSingleParent] = useState(false);
  const [divisionalSecretariat, setDivisionalSecretariat] = useState("");
  const [gramaSevakaDivision, setGramaSevakaDivision] = useState("");

  // Create the request object with form data
  const request = {
    nameOfHousehold: name,
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

  console.log(request);
  return (
    <div className="Form1">
      <Navbar reloadnavbar={false} />
      <div className="application-form">
        <h1>Application Form</h1>
        <form>
          <div className="form-section">
            <div className="purple-box">Name of Householder:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter Name"  onChange={(e) => {setName(e.target.value)}} />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Address:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter Address"  onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">NIC Number:</div>
            <div className="input-field">
              <input type="number" placeholder="Enter NIC Number"  onChange={(e) => setNicNumber(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">Telephone Number:</div>
            <div className="input-field">
              <input type="tel" placeholder="+94|"  onChange={(e) => setTelephone(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">Age:</div>
            <div className="input-field">
              <input type="number" placeholder="Enter Age"  onChange={(e) => setAge(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">Names of Family Members:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter Names"  onChange={(e) => setFamilyMembers(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">Divisional Secretariat:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter" onChange={(e) => setDivisionalSecretariat(e.target.value)} />
            </div>
          </div>
  
          <div className="form-section">
            <div className="purple-box">Grama Sevaka Division:</div>
            <div className="input-field">
              <input type="text" placeholder="Information"  onChange={(e) => setGramaSevakaDivision(e.target.value)} />
            </div>
          </div>
  
          <div className="next-button-container">
            <Link to="/ApplicationForm2" state={{request }} >
              <button className="next-button" disabled={!name || !address || !nicNumber || !telephone || !age || !familyMembers || !divisionalSecretariat || !gramaSevakaDivision}>Next</button>
            </Link>
            {(!name || !address || !nicNumber || !telephone || !age || !familyMembers || !divisionalSecretariat || !gramaSevakaDivision) && <p className="error-message">Please fill in all fields.</p>}
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default ApplicationForm;



