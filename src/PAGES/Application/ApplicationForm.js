import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './ApplicationForm.css';

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
  const [addressError, setAddressError] = useState("");
  const [nicNumberError, setNicNumberError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [divisionalSecretariatError, setDivisionalSecretariatError] = useState("");
  const [gramaSevakaDivisionError, setGramaSevakaDivisionError] = useState("");

  // Define the request object
  const [request, setRequest] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate address field
    if (!address.trim()) {
      setAddressError("Address is required.");
      return;
    } else {
      setAddressError("");
    }

    // Validate NIC number field
    if (!nicNumber.trim()) {
      setNicNumberError("NIC Number is required.");
      return;
    } else {
      setNicNumberError("");
    }

    // Validate telephone number field
    if (!telephone.trim()) {
      setTelephoneError("Telephone Number is required.");
      return;
    } else {
      setTelephoneError("");
    }

    // Validate age field
    if (!age.trim()) {
      setAgeError("Age is required.");
      return;
    } else {
      setAgeError("");
    }

    // Validate divisional secretariat field
    if (!divisionalSecretariat.trim()) {
      setDivisionalSecretariatError("Divisional Secretariat is required.");
      return;
    } else {
      setDivisionalSecretariatError("");
    }

    // Validate grama sevaka division field
    if (!gramaSevakaDivision.trim()) {
      setGramaSevakaDivisionError("Grama Sevaka Division is required.");
      return;
    } else {
      setGramaSevakaDivisionError("");
    }

    // If all validations pass, proceed with form submission logic
    const requestData = {
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

    setRequest(requestData);

    // Add your submission logic here, such as sending the request to the server
    console.log("Form submitted successfully with data:", requestData);

    // After successful submission, you can redirect to the next page or perform any other action
  };

  return (
    <div className="Form1">
      <Navbar reloadnavbar={false} />
      <div className="application-form">
        <h1>Application Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="purple-box">Name of Householder:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z.]/g, ''))} />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Address:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              {addressError && <p className="error">{addressError}</p>}
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">NIC Number:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter NIC Number" value={nicNumber} onChange={(e) => setNicNumber(e.target.value)} />
              {nicNumberError && <p className="error">{nicNumberError}</p>}
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Telephone Number:</div>
            <div className="input-field">
              <input type="tel" placeholder="Enter Telephone Number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
              {telephoneError && <p className="error">{telephoneError}</p>}
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Age:</div>
            <div className="input-field">
              <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
              {ageError && <p className="error">{ageError}</p>}
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Names of Family Members:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter Names" value={familyMembers} onChange={(e) => setFamilyMembers(e.target.value)} />
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Divisional Secretariat:</div>
            <div className="input-field">
              <input type="text" placeholder="Enter" value={divisionalSecretariat} onChange={(e) => setDivisionalSecretariat(e.target.value)} />
              {divisionalSecretariatError && <p className="error">{divisionalSecretariatError}</p>}
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Grama Sevaka Division:</div>
            <div className="input-field">
              <input type="text" placeholder="Information" value={gramaSevakaDivision} onChange={(e) => setGramaSevakaDivision(e.target.value)} />
              {gramaSevakaDivisionError && <p className="error">{gramaSevakaDivisionError}</p>}
            </div>
          </div>

          <div className="next-button-container">
            <Link to="/ApplicationForm2"state={{request}} >
              <button className="next-button" >Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
