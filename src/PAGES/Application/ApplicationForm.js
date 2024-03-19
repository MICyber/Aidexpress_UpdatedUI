import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './ApplicationForm.css';
import { useTranslation } from 'react-i18next';


const ApplicationForm = () => {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isSingleParent, setIsSingleParent] = useState(false);
 const { t } = useTranslation();
  return (
    <div className="Form1">
      <Navbar reloadnavbar={false}/>
    <div className="application-form">
    
      <h1>Application Form</h1>
      <form>
      <div className="form-section">
        <div className="purple-box">{t("Applica_Name")}</div>
        <div className="input-field">
          <input type="text" placeholder={t("Enter Name" )}/>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Addre")}</div>
        <div className="input-field">
          <input type="text" placeholder={t("Enter Address" )}/>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("NIC Number:")}</div>
        <div className="input-field">
          <input type="text" placeholder={t("Enter NIC Number")} />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Telephone Number:")}</div>
        <div className="input-field">
          <input type="tel" placeholder={t("Enter Telephone Number")} />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Appli_age")}</div>
        <div className="input-field">
          <input type="number" placeholder={t("Enter Age")}/>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Names of Family Members:")}</div>
        <div className="input-field">
          <input type="text" placeholder={t("Enter Names" )}/>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Marital Status:")}</div>
        <div className="input-field">
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="">{t("Select Marital Status")}</option>
            <option value="single">{t("Single")}</option>
            <option value="married">{t("Married")}</option>
            <option value="divorced">{t("Divorced")}</option>
            <option value="widowed">{t("Widowed")}</option>
          </select>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Single Parent:")}</div>
        <div className="input-field">
          <input
            type="checkbox"
            id="singleParent"
            checked={isSingleParent}
            onChange={() => setIsSingleParent(!isSingleParent)}
          />
          <label htmlFor="singleParent">{t("Is a Single Parent")}</label>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Divisional_Secretariat")}</div>
        <div className="input-field">
          <input type="text" placeholder={t("Enter")} />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Grama Sevaka Division")}</div>
        <div className="input-field">
          <input type="text" placeholder={t("Informationn")} />
        </div>
      </div>
      <div className="next-button-container">
        <Link to="/ApplicationForm2">
          <button className="next-button">{t("Next")}</button>
        </Link>
      </div>
      </form>
    </div>
    </div>
  );
};

export default ApplicationForm;
