import React, { useState } from "react";
import { Link } from "react-router-dom";

const ApplicationForm = () => {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isSingleParent, setIsSingleParent] = useState(false);

  return (
    <div className="application-form">
      <h1>Application Form</h1>
      <div className="form-section">
        <div className="purple-box">Name of Householder:</div>
        <div className="input-field">
          <input type="text" placeholder="Enter Name" />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Address:</div>
        <div className="input-field">
          <input type="text" placeholder="Enter Address" />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">NIC Number:</div>
        <div className="input-field">
          <input type="text" placeholder="Enter NIC Number" />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Telephone Number:</div>
        <div className="input-field">
          <input type="tel" placeholder="Enter Telephone Number" />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Age:</div>
        <div className="input-field">
          <input type="number" placeholder="Enter Age" />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Names of Family Members:</div>
        <div className="input-field">
          <input type="text" placeholder="Enter Names" />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Marital Status:</div>
        <div className="input-field">
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
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
            id="singleParent"
            checked={isSingleParent}
            onChange={() => setIsSingleParent(!isSingleParent)}
          />
          <label htmlFor="singleParent">Is a Single Parent</label>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Divisional_Secretariat</div>
        <div className="input-field">
          <input type="text" placeholder="Enter" />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Grama Sevaka Division</div>
        <div className="input-field">
          <input type="text" placeholder="Information" />
        </div>
      </div>
      <div className="next-button-container">
        <Link to="/ApplicationForm2">
          <button className="next-button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationForm;