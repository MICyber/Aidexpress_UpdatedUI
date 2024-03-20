// import React, { useEffect,useState } from "react";
// import { Link } from "react-router-dom";
// import "../Application/ApplicationForm.css";
// import Navbar from "../../COMPONENTS/Navbar/Navbar";
// import { useLocation } from 'react-router-dom';

// const ApplicationForm3 = () => {
  
//   const location = useLocation();
//   const { request } = location.state || {};
  
//   useEffect(() => {

//     console.log("data=>", request);

//   }, []);


//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [livelihoodAssets, setLivelihoodAssets] = useState("");
//   const [cultivableLand, setCultivableLand] = useState("");
//   const [residentialHouses, setResidentialHouses] = useState("");
//   const [otherBuildings, setOtherBuildings] = useState("");
//   const [transportAssets, setTransportAssets] = useState("");
//   const [totalFloorArea, setTotalFloorArea] = useState("");
//   const [drinkingWater, setDrinkingWater] = useState("");
//   const [sanitaryFacilities, setSanitaryFacilities] = useState("");

//   request.monthlyPerCapitaIncome = monthlyIncome;
//   request.numberOfLivelihoodAssets=  livelihoodAssets;
//   request.numberOfAcresOfCultivablePaddyLand= cultivableLand;
//   request.numberOfResidentialHousesAndLandOwned= residentialHouses;
//   request.numberOfOtherHousesOrBuildingsOwned= otherBuildings;
//   request.numberOfTransportAssets= transportAssets;
//   request.totalFloorArea= totalFloorArea
//   request.nonAvailabilityOfDrinkingWater= drinkingWater;
//   request.absenceOfNecessarySanitaryFacilities= sanitaryFacilities;
  
//   return (
//     <div className="Form3">
//       <Navbar reloadnavbar={false}/>
//     <div className="application-form">
//       <h1>Application Form</h1>
//       <form>
//       <div className="form-section">
//         <div className="purple-box">Monthly Per Capita Income:</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Monthly Per Capita Income"
//             value={monthlyIncome}
//             onChange={(e) => setMonthlyIncome(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">Number of Livelihood Assets:</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Number of Livelihood Assets"
//             value={livelihoodAssets}
//             onChange={(e) => setLivelihoodAssets(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">
//           Number of Acres of Cultivable Paddy Land:
//         </div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Number of Acres of Cultivable Paddy Land"
//             value={cultivableLand}
//             onChange={(e) => setCultivableLand(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">
//           Number of Residential Houses and Land Owned:
//         </div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Number of Residential Houses and Land Owned"
//             value={residentialHouses}
//             onChange={(e) => setResidentialHouses(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">
//           Number of Other Houses or Buildings Owned:
//         </div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Number of Other Houses or Buildings Owned"
//             value={otherBuildings}
//             onChange={(e) => setOtherBuildings(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">Number of Transport Assets:</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Number of Transport Assets"
//             value={transportAssets}
//             onChange={(e) => setTransportAssets(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">Total Floor Area:</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Less Than 5000 Sq Ft Total Floor Area"
//             value={totalFloorArea}
//             onChange={(e) => setTotalFloorArea(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">Non-Availability of Drinking Water:</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Non-Availability of Drinking Water"
//             value={drinkingWater}
//             onChange={(e) => setDrinkingWater(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">
//           Absence of Necessary Sanitary Facilities:
//         </div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder="Enter Absence of Necessary Sanitary Facilities"
//             value={sanitaryFacilities}
//             onChange={(e) => setSanitaryFacilities(e.target.value)}
//           />
//         </div>
//       </div>
//       {/* Connect to the next button */}
//       <div className="next-button-container">
//       <Link to="/ApplicationForm" >
//             <button className="back-button">Back</button>
//         </Link>
//         <Link to="/DocumentUploadPage" state={{ request }}>
//           <button className="next-button">Next</button>
//         </Link>
//       </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ApplicationForm3;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Application/ApplicationForm.css";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import { useLocation } from 'react-router-dom';

const ApplicationForm3 = () => {
  
  const location = useLocation();
  const { request } = location.state || {};
  
  useEffect(() => {
    console.log("data=>", request);
  }, []);

  // State variables for form inputs
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [livelihoodAssets, setLivelihoodAssets] = useState("");
  const [cultivableLand, setCultivableLand] = useState("");
  const [residentialHouses, setResidentialHouses] = useState("");
  const [otherBuildings, setOtherBuildings] = useState("");
  const [transportAssets, setTransportAssets] = useState("");
  const [totalFloorArea, setTotalFloorArea] = useState("");
  const [drinkingWater, setDrinkingWater] = useState("");
  const [sanitaryFacilities, setSanitaryFacilities] = useState("");

  // State variable for form validation
  const [formValid, setFormValid] = useState(false);

  // Function to validate the form
  const validateForm = () => {
    if (
      monthlyIncome.trim() !== "" &&
      livelihoodAssets.trim() !== "" &&
      cultivableLand.trim() !== "" &&
      residentialHouses.trim() !== "" &&
      otherBuildings.trim() !== "" &&
      transportAssets.trim() !== "" &&
      totalFloorArea.trim() !== "" &&
      drinkingWater.trim() !== "" &&
      sanitaryFacilities.trim() !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "monthlyIncome":
        setMonthlyIncome(value);
        break;
      case "livelihoodAssets":
        setLivelihoodAssets(value);
        break;
      case "cultivableLand":
        setCultivableLand(value);
        break;
      case "residentialHouses":
        setResidentialHouses(value);
        break;
      case "otherBuildings":
        setOtherBuildings(value);
        break;
      case "transportAssets":
        setTransportAssets(value);
        break;
      case "totalFloorArea":
        setTotalFloorArea(value);
        break;
      case "drinkingWater":
        setDrinkingWater(value);
        break;
      case "sanitaryFacilities":
        setSanitaryFacilities(value);
        break;
      default:
        break;
    }
    validateForm();
  };

  return (
    <div className="Form3">
      <Navbar reloadnavbar={false}/>
      <div className="application-form">
        <h1>Application Form</h1>
        <form>
          <div className="form-section">
            <div className="purple-box">Monthly Per Capita Income:</div>
            <div className="input-field">
              <input
                type="text"
                name="monthlyIncome"
                placeholder="Enter Monthly Per Capita Income"
                value={monthlyIncome}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Number of Livelihood Assets:</div>
            <div className="input-field">
              <input
                type="text"
                name="livelihoodAssets"
                placeholder="Enter Number of Livelihood Assets"
                value={livelihoodAssets}
                onChange={handleInputChange}
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
                name="cultivableLand"
                placeholder="Enter Number of Acres of Cultivable Paddy Land"
                value={cultivableLand}
                onChange={handleInputChange}
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
                name="residentialHouses"
                placeholder="Enter Number of Residential Houses and Land Owned"
                value={residentialHouses}
                onChange={handleInputChange}
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
                name="otherBuildings"
                placeholder="Enter Number of Other Houses or Buildings Owned"
                value={otherBuildings}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">Number of Transport Assets:</div>
            <div className="input-field">
              <input
                type="text"
                name="transportAssets"
                placeholder="Enter Number of Transport Assets"
                value={transportAssets}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Total Floor Area:</div>
            <div className="input-field">
              <input
                type="text"
                name="totalFloorArea"
                placeholder="Enter Less Than 5000 Sq Ft Total Floor Area"
                value={totalFloorArea}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="purple-box">Non-Availability of Drinking Water:</div>
            <div className="input-field">
              <input
                type="text"
                name="drinkingWater"
                placeholder="Enter Non-Availability of Drinking Water"
                value={drinkingWater}
                onChange={handleInputChange}
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
                name="sanitaryFacilities"
                placeholder="Enter Absence of Necessary Sanitary Facilities"
                value={sanitaryFacilities}
                onChange={handleInputChange}
              />
            </div>
          </div>



          {/* Add similar sections for other fields */}

          {/* Connect to the next button */}
          <div className="next-button-container">
            <Link to="/ApplicationForm" >
              <button className="back-button">Back</button>
            </Link>
            <Link to="/DocumentUploadPage" state={{ request }}>
              <button className="next-button" disabled={!formValid}>Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm3;

