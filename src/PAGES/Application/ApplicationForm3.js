import React, { useState } from "react";
import { Link } from "react-router-dom";

const ApplicationForm3 = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [livelihoodAssets, setLivelihoodAssets] = useState("");
  const [cultivableLand, setCultivableLand] = useState("");
  const [residentialHouses, setResidentialHouses] = useState("");
  const [otherBuildings, setOtherBuildings] = useState("");
  const [transportAssets, setTransportAssets] = useState("");
  const [totalFloorArea, setTotalFloorArea] = useState("");
  const [drinkingWater, setDrinkingWater] = useState("");
  const [sanitaryFacilities, setSanitaryFacilities] = useState("");

  return (
    <div className="application-form">
      <h1>Application Form</h1>
      <div className="form-section">
        <div className="purple-box">Monthly Per Capita Income:</div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Monthly Per Capita Income"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Number of Livelihood Assets:</div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Number of Livelihood Assets"
            value={livelihoodAssets}
            onChange={(e) => setLivelihoodAssets(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">
          Number of Acres of Cultivable Paddy Land:
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Number of Acres of Cultivable Paddy Land"
            value={cultivableLand}
            onChange={(e) => setCultivableLand(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">
          Number of Residential Houses and Land Owned:
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Number of Residential Houses and Land Owned"
            value={residentialHouses}
            onChange={(e) => setResidentialHouses(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">
          Number of Other Houses or Buildings Owned:
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Number of Other Houses or Buildings Owned"
            value={otherBuildings}
            onChange={(e) => setOtherBuildings(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Number of Transport Assets:</div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Number of Transport Assets"
            value={transportAssets}
            onChange={(e) => setTransportAssets(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Total Floor Area:</div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Less Than 5000 Sq Ft Total Floor Area"
            value={totalFloorArea}
            onChange={(e) => setTotalFloorArea(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">Non-Availability of Drinking Water:</div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Non-Availability of Drinking Water"
            value={drinkingWater}
            onChange={(e) => setDrinkingWater(e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="purple-box">
          Absence of Necessary Sanitary Facilities:
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Absence of Necessary Sanitary Facilities"
            value={sanitaryFacilities}
            onChange={(e) => setSanitaryFacilities(e.target.value)}
          />
        </div>
      </div>
      {/* Connect to the next button */}
      <div className="next-button-container">
        <Link to="/DocumentUploadPage">
          <button className="next-button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationForm3;
