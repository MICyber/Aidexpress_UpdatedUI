import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "../Application/ApplicationForm.css";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ApplicationForm3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  
  const location = useLocation();
  const { request } = location.state || {};
  
  useEffect(() => {

    console.log("data=>", request);

  }, [request]);


  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [livelihoodAssets, setLivelihoodAssets] = useState("");
  const [cultivableLand, setCultivableLand] = useState("");
  const [residentialHouses, setResidentialHouses] = useState("");
  const [otherBuildings, setOtherBuildings] = useState("");
  const [transportAssets, setTransportAssets] = useState("");
  const [totalFloorArea, setTotalFloorArea] = useState("");
  const [drinkingWater, setDrinkingWater] = useState("");
  const [sanitaryFacilities, setSanitaryFacilities] = useState("");

  request.monthlyPerCapitaIncome = monthlyIncome;
  request.numberOfLivelihoodAssets=  livelihoodAssets;
  request.numberOfAcresOfCultivablePaddyLand= cultivableLand;
  request.numberOfResidentialHousesAndLandOwned= residentialHouses;
  request.numberOfOtherHousesOrBuildingsOwned= otherBuildings;
  request.numberOfTransportAssets= transportAssets;
  request.totalFloorArea= totalFloorArea
  request.nonAvailabilityOfDrinkingWater= drinkingWater;
  request.absenceOfNecessarySanitaryFacilities= sanitaryFacilities;
  
  return (
    <div className="Form3">
      <Navbar reloadnavbar={false}/>
    <div className="application-form">
      <h1>{t("Application Form")}</h1>
      <form>
      <div className="form-section">
        <div className="purple-box">{t("Monthly Per Capital Income:")}</div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t("Enter Monthly Per Capital Income")}
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Number of Livelihood Assets:")}</div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t("Enter Number of Livelihood Assets")}
            value={livelihoodAssets}
            onChange={(e) => setLivelihoodAssets(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">
          {t("Number of Acres of Cultivable Paddy Land:")}
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t("Enter Number of Acres of Cultivable Paddy Land")}
            value={cultivableLand}
            onChange={(e) => setCultivableLand(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">
          {t("Number of Residential Houses and Land Owned:")}
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t("Enter Number of Residential Houses and Land Owned")}
            value={residentialHouses}
            onChange={(e) => setResidentialHouses(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">
          {t("Number of Other Houses or Buildings Owned:")}
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t("Enter Number of Other Houses or Buildings Owned")}
            value={otherBuildings}
            onChange={(e) => setOtherBuildings(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Number of Transport Assets:")}</div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t("Enter Number of Transport Assets")}
            value={transportAssets}
            onChange={(e) => setTransportAssets(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Total Floor Area:")}</div>
        <div className="input-field">
          <input
            type="text"
            placeholder={t("Enter Less Than 5000 Sq Ft Total Floor Area")}
            value={totalFloorArea}
            onChange={(e) => setTotalFloorArea(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Non-Availability of Drinking Water:")}</div>
        <div className="input-field">
          <select value={drinkingWater} onChange={(e) => setDrinkingWater(e.target.value)}>
            <option value="yes">{t("Yes")}</option>
            <option value="no">{t("No")}</option>
          </select>
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">{t("Absence of Necessary Sanitary Facilities:")}</div>
        <div className="input-field">
          <select value={sanitaryFacilities} onChange={(e) => setSanitaryFacilities(e.target.value)}>
            <option value="yes">{t("Yes")}</option>
            <option value="no">{t("No")}</option>
          </select>
        </div>
      </div>
      {/* Connect to the next button */}
      <div className="next-button-container">
      <Link to="/ApplicationForm" >
            <button className="back-button">{t("Back")}</button>
        </Link>
        <Link to="/DocumentUploadPage" state={{ request }}>
          <button className="next-button">{t("Next")}</button>
        </Link>
      </div>
      </form>
    </div>
    </div>
  );
};

export default ApplicationForm3;

