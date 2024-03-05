import React, { useState } from "react";
import {Link, useNavigate  } from "react-router-dom";
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    nicNumber: '',
    telephoneNumber: '',
    age: '',
    familyMembers: '',
    maritalStatus: '',
    isSingleParent: false,
    divisionalSecretariat: '',
    gramaSevakaDivision: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Store form data in database
      const response = await fetch('https://aidexpress-1fe47-default-rtdb.firebaseio.com/ApplicationForms.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to store form data');
      }
  
      // Navigate to the next page
      navigate('/ApplicationForm2');
    } catch (error) {
      console.error(error);
      // Handle error appropriately (e.g., show error message to the user)
    }
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
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Address:</div>
            <div className="input-field">
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">NIC Number:</div>
            <div className="input-field">
              <input type="text" name="nicNumber" value={formData.nicNumber} onChange={handleChange} placeholder="Enter NIC Number" />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Telephone Number:</div>
            <div className="input-field">
              <input type="tel" name="telephoneNumber" value={formData.telephoneNumber} onChange={handleChange} placeholder="Enter Telephone Number" />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Age:</div>
            <div className="input-field">
              <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Names of Family Members:</div>
            <div className="input-field">
              <input type="text" name="familyMembers" value={formData.familyMembers} onChange={handleChange} placeholder="Enter Names" />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Marital Status:</div>
            <div className="input-field">
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Single Parent:</div>
            <div className="input-field">
              <input
                type="checkbox"
                name="isSingleParent"
                checked={formData.isSingleParent}
                onChange={handleChange}
              />
              <label htmlFor="singleParent">Is a Single Parent</label>
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Divisional_Secretariat</div>
            <div className="input-field">
              <input type="text" name="divisionalSecretariat" value={formData.divisionalSecretariat} onChange={handleChange} placeholder="Enter" />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Grama Sevaka Division</div>
            <div className="input-field">
              <input type="text" name="gramaSevakaDivision" value={formData.gramaSevakaDivision} onChange={handleChange} placeholder="Information" />
            </div>
          </div>
          <div className="next-button-container">
            <button type="submit" className="next-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
