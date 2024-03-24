import React, { useEffect, useState } from "react";
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
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    // Basic validation for numeric fields
    if (isNaN(value.trim())) {
      errorMessage = "Please enter a valid number.";
    }

    // Update state with new input value and error message
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

    setErrorMessage(errorMessage);
  };

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
                type="number"
                placeholder={t("Enter Monthly Per Capital Income")}
                value={monthlyIncome}
                onChange={handleInputChange}
                name="monthlyIncome"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Number of Livelihood Assets:")}</div>
            <div className="input-field">
              <input
                type="number"
                placeholder={t("Enter Number of Livelihood Assets")}
                value={livelihoodAssets}
                onChange={handleInputChange}
                name="livelihoodAssets"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Number of Acres of Cultivable Paddy Land:")}</div>
            <div className="input-field">
              <input
                type="number"
                placeholder={t("Enter Number of Acres of Cultivable Paddy Land")}
                value={cultivableLand}
                onChange={handleInputChange}
                name="cultivableLand"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Number of Residential Houses and Land Owned:")}</div>
            <div className="input-field">
              <input
                type="number"
                placeholder={t("Enter Number of Residential Houses and Land Owned")}
                value={residentialHouses}
                onChange={handleInputChange}
                name="residentialHouses"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Number of Other Houses or Buildings Owned:")}</div>
            <div className="input-field">
              <input
                type="number"
                placeholder={t("Enter Number of Other Houses or Buildings Owned")}
                value={otherBuildings}
                onChange={handleInputChange}
                name="otherBuildings"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Number of Transport Assets:")}</div>
            <div className="input-field">
              <input
                type="number"
                placeholder={t("Enter Number of Transport Assets")}
                value={transportAssets}
                onChange={handleInputChange}
                name="transportAssets"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Total Floor Area:")}</div>
            <div className="input-field">
              <input
                type="number"
                placeholder={t("Enter Less Than 5000 Sq Ft Total Floor Area")}
                value={totalFloorArea}
                onChange={handleInputChange}
                name="totalFloorArea"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Non-Availability of Drinking Water:")}</div>
            <div className="input-field">
              <select value={drinkingWater} onChange={handleInputChange} name="drinkingWater">
                <option value="yes">{t("Yes")}</option>
                <option value="no">{t("No")}</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="purple-box">{t("Absence of Necessary Sanitary Facilities:")}</div>
            <div className="input-field">
              <select value={sanitaryFacilities} onChange={handleInputChange} name="sanitaryFacilities">
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
              <button className="next-button" disabled={errorMessage !== ""}>{t("Next")}</button>
            </Link>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm3;






// import React, { useEffect,useState } from "react";
// import { Link } from "react-router-dom";
// import "../Application/ApplicationForm.css";
// import Navbar from "../../COMPONENTS/Navbar/Navbar";
// import { useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const ApplicationForm3 = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const { t } = useTranslation();
  
//   const location = useLocation();
//   const { request } = location.state || {};
  
//   useEffect(() => {

//     console.log("data=>", request);

//   }, [request]);


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
//       <h1>{t("Application Form")}</h1>
//       <form>
//       <div className="form-section">
//         <div className="purple-box">{t("Monthly Per Capital Income:")}</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder={t("Enter Monthly Per Capital Income")}
//             value={monthlyIncome}
//             onChange={(e) => setMonthlyIncome(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">{t("Number of Livelihood Assets:")}</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder={t("Enter Number of Livelihood Assets")}
//             value={livelihoodAssets}
//             onChange={(e) => setLivelihoodAssets(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">
//           {t("Number of Acres of Cultivable Paddy Land:")}
//         </div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder={t("Enter Number of Acres of Cultivable Paddy Land")}
//             value={cultivableLand}
//             onChange={(e) => setCultivableLand(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">
//           {t("Number of Residential Houses and Land Owned:")}
//         </div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder={t("Enter Number of Residential Houses and Land Owned")}
//             value={residentialHouses}
//             onChange={(e) => setResidentialHouses(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">
//           {t("Number of Other Houses or Buildings Owned:")}
//         </div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder={t("Enter Number of Other Houses or Buildings Owned")}
//             value={otherBuildings}
//             onChange={(e) => setOtherBuildings(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">{t("Number of Transport Assets:")}</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder={t("Enter Number of Transport Assets")}
//             value={transportAssets}
//             onChange={(e) => setTransportAssets(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">{t("Total Floor Area:")}</div>
//         <div className="input-field">
//           <input
//             type="text"
//             placeholder={t("Enter Less Than 5000 Sq Ft Total Floor Area")}
//             value={totalFloorArea}
//             onChange={(e) => setTotalFloorArea(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">{t("Non-Availability of Drinking Water:")}</div>
//         <div className="input-field">
//           <select value={drinkingWater} onChange={(e) => setDrinkingWater(e.target.value)}>
//             <option value="yes">{t("Yes")}</option>
//             <option value="no">{t("No")}</option>
//           </select>
//         </div>
//       </div>
//       <div className="form-section">
//         <div className="purple-box">{t("Absence of Necessary Sanitary Facilities:")}</div>
//         <div className="input-field">
//           <select value={sanitaryFacilities} onChange={(e) => setSanitaryFacilities(e.target.value)}>
//             <option value="yes">{t("Yes")}</option>
//             <option value="no">{t("No")}</option>
//           </select>
//         </div>
//       </div>
//       {/* Connect to the next button */}
//       <div className="next-button-container">
//       <Link to="/ApplicationForm" >
//             <button className="back-button">{t("Back")}</button>
//         </Link>
//         <Link to="/DocumentUploadPage" state={{ request }}>
//           <button className="next-button">{t("Next")}</button>
//         </Link>
//       </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ApplicationForm3;

//---------------------------------------------------------

// import React, { useEffect, useState } from "react";
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

//   // State variables for form inputs
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [livelihoodAssets, setLivelihoodAssets] = useState("");
//   const [cultivableLand, setCultivableLand] = useState("");
//   const [residentialHouses, setResidentialHouses] = useState("");
//   const [otherBuildings, setOtherBuildings] = useState("");
//   const [transportAssets, setTransportAssets] = useState("");
//   const [totalFloorArea, setTotalFloorArea] = useState("");
//   const [drinkingWater, setDrinkingWater] = useState("");
//   const [sanitaryFacilities, setSanitaryFacilities] = useState("");

//   // State variable for form validation
//   const [formValid, setFormValid] = useState(false);

//   // Function to validate the form
//   const validateForm = () => {
//     if (
//       monthlyIncome.trim() !== "" &&
//       livelihoodAssets.trim() !== "" &&
//       cultivableLand.trim() !== "" &&
//       residentialHouses.trim() !== "" &&
//       otherBuildings.trim() !== "" &&
//       transportAssets.trim() !== "" &&
//       totalFloorArea.trim() !== "" &&
//       drinkingWater.trim() !== "" &&
//       sanitaryFacilities.trim() !== ""
//     ) {
//       setFormValid(true);
//     } else {
//       setFormValid(false);
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "monthlyIncome":
//         setMonthlyIncome(value);
//         break;
//       case "livelihoodAssets":
//         setLivelihoodAssets(value);
//         break;
//       case "cultivableLand":
//         setCultivableLand(value);
//         break;
//       case "residentialHouses":
//         setResidentialHouses(value);
//         break;
//       case "otherBuildings":
//         setOtherBuildings(value);
//         break;
//       case "transportAssets":
//         setTransportAssets(value);
//         break;
//       case "totalFloorArea":
//         setTotalFloorArea(value);
//         break;
//       case "drinkingWater":
//         setDrinkingWater(value);
//         break;
//       case "sanitaryFacilities":
//         setSanitaryFacilities(value);
//         break;
//       default:
//         break;
//     }
//     validateForm();
//   };

//   return (
//     <div className="Form3">
//       <Navbar reloadnavbar={false}/>
//       <div className="application-form">
//         <h1>Application Form</h1>
//         <form>
//           <div className="form-section">
//             <div className="purple-box">Monthly Per Capital Income:</div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="monthlyIncome"
//                 placeholder="Enter Monthly Per Capita Income"
//                 value={monthlyIncome}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="form-section">
//             <div className="purple-box">Number of Livelihood Assets:</div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="livelihoodAssets"
//                 placeholder="Enter Number of Livelihood Assets"
//                 value={livelihoodAssets}
//                 onChange={handleInputChange}
//               />
//             </div>
//          </div>

//           <div className="form-section">
//             <div className="purple-box">
//               Number of Acres of Cultivable Paddy Land:
//             </div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="cultivableLand"
//                 placeholder="Enter Number of Acres of Cultivable Paddy Land"
//                 value={cultivableLand}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="form-section">
//             <div className="purple-box">
//                 Number of Residential Houses and Land Owned:
//             </div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="residentialHouses"
//                 placeholder="Enter Number of Residential Houses and Land Owned"
//                 value={residentialHouses}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="form-section">
//             <div className="purple-box">
//                Number of Other Houses or Buildings Owned:
//             </div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="otherBuildings"
//                 placeholder="Enter Number of Other Houses or Buildings Owned"
//                 value={otherBuildings}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="form-section">
//             <div className="purple-box">Number of Transport Assets:</div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="transportAssets"
//                 placeholder="Enter Number of Transport Assets"
//                 value={transportAssets}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="form-section">
//             <div className="purple-box">Total Floor Area:</div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="totalFloorArea"
//                 placeholder="Enter Less Than 5000 Sq Ft Total Floor Area"
//                 value={totalFloorArea}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="form-section">
//             <div className="purple-box">Non-Availability of Drinking Water:</div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="drinkingWater"
//                 placeholder="Enter Non-Availability of Drinking Water"
//                 value={drinkingWater}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="form-section">
//             <div className="purple-box">
//                 Absence of Necessary Sanitary Facilities:
//             </div>
//             <div className="input-field">
//               <input
//                 type="number"
//                 name="sanitaryFacilities"
//                 placeholder="Enter Absence of Necessary Sanitary Facilities"
//                 value={sanitaryFacilities}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           {/* Connect to the next button */}
//           <div className="next-button-container">
//             <Link to="/ApplicationForm" >
//               <button className="back-button">Back</button>
//             </Link>
//             <Link to="/DocumentUploadPage" state={{ request }}>
//               <button className="next-button" disabled={!formValid}>Next</button>
//             </Link>
//             <p className="error-message"  >Please fill in all fields with Numbers.(Ex:01,001..) </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplicationForm3;

