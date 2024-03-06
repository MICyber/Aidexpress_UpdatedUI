import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Application/ApplicationForm.css";
import Navbar from "../../COMPONENTS/Navbar/Navbar";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      monthlyIncome,
      livelihoodAssets,
      cultivableLand,
      residentialHouses,
      otherBuildings,
      transportAssets,
      totalFloorArea,
      drinkingWater,
      sanitaryFacilities,
    };

    try {
      const response = await fetch(
        "https://aidexpress-1fe47-default-rtdb.firebaseio.com/ApplicationForm3.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store form data");
      }

      // Redirect to the next page
      window.location.href = "/DocumentUploadPage";
    } catch (error) {
      console.error(error);
      // Handle error appropriately (e.g., show error message to the user)
    }
  };

  return (
    <div className="Form3">
      <Navbar reloadnavbar={false} />
      <div className="application-form">
        <h1>Application Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Form sections */}
          {/* Monthly Per Capita Income */}
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

          {/* Number of Livelihood Assets */}
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

          {/* Number of Acres of Cultivable Paddy Land */}
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

          {/* Number of Residential Houses and Land Owned */}
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

          {/* Number of Other Houses or Buildings Owned */}
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

          {/* Number of Transport Assets */}
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

          {/* Total Floor Area */}
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

          {/* Non-Availability of Drinking Water */}
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

          {/* Absence of Necessary Sanitary Facilities */}
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
            <Link to="/ApplicationForm">
              <button className="back-button">Back</button>
            </Link>
            <button type="submit" className="next-button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm3;
