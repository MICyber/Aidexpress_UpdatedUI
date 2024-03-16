import React, { useState } from "react";
import "./OrderSuccessful.css";

const OrderSuccessful = ({ orderid, message, redirecto }) => {
  const [orderdata, setorderdata] = useState({
    nameOfHouseholder: "",
    address: "",
    nicNumber: "",
    telephoneNumber: "",
    age: "",
    familyMembers: "",
    maritalStatus: "",
    singleParent: "",
    divisionalSecretariat: "",
    gramaSevakaDivision: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    branchName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setorderdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="OrdersSuccessful">
      <div className="confirmationcont">
        <div className="c3">
          <center>
            <h2>Personal Details</h2>
          </center>
          <table>
            <tbody>
              <tr>
                <td>Name of householder:</td>
                <td>
                  <input
                    type="text"
                    name="nameOfHouseholder"
                    value={orderdata.nameOfHouseholder}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  <input
                    type="text"
                    name="address"
                    value={orderdata.address}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>NIC Number:</td>
                <td>
                  <input
                    type="text"
                    name="nicNumber"
                    value={orderdata.nicNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Telephone Number:</td>
                <td>
                  <input
                    type="text"
                    name="telephoneNumber"
                    value={orderdata.telephoneNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>
                  <input
                    type="text"
                    name="age"
                    value={orderdata.age}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Names of Family Members:</td>
                <td>
                  <input
                    type="text"
                    name="familyMembers"
                    value={orderdata.familyMembers}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Marital Status:</td>
                <td>
                  <input
                    type="text"
                    name="maritalStatus"
                    value={orderdata.maritalStatus}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Single Parent:</td>
                <td>
                  <input
                    type="text"
                    name="singleParent"
                    value={orderdata.singleParent}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Divisional Secretariat:</td>
                <td>
                  <input
                    type="text"
                    name="divisionalSecretariat"
                    value={orderdata.divisionalSecretariat}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Grama Sevaka Division:</td>
                <td>
                  <input
                    type="text"
                    name="gramaSevakaDivision"
                    value={orderdata.gramaSevakaDivision}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <center>
                    <h2>Bank Details</h2>
                  </center>
                </td>
              </tr>
              <tr>
                <td>Bank Name:</td>
                <td>
                  <input
                    type="text"
                    name="bankName"
                    value={orderdata.bankName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Account Holder Name:</td>
                <td>
                  <input
                    type="text"
                    name="accountHolderName"
                    value={orderdata.accountHolderName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Account Number:</td>
                <td>
                  <input
                    type="text"
                    name="accountNumber"
                    value={orderdata.accountNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Branch Name:</td>
                <td>
                  <input
                    type="text"
                    name="branchName"
                    value={orderdata.branchName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <center>
            <h2>Additional Details</h2>
          </center>
          <table>
            <tbody>
              <tr>
                <td>Monthly Per Capita Income:</td>
                <td>
                  <input
                    type="text"
                    name="monthlyPerCapitaIncome"
                    value={orderdata.monthlyPerCapitaIncome}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Number of Livelihood Assets:</td>
                <td>
                  <input
                    type="text"
                    name="numOfLivelihoodAssets"
                    value={orderdata.numOfLivelihoodAssets}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Number of Acres of Cultivable Paddy Land:</td>
                <td>
                  <input
                    type="text"
                    name="numOfAcresOfCultivablePaddyLand"
                    value={orderdata.numOfAcresOfCultivablePaddyLand}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Number of Residential Houses and Land Owned:</td>
                <td>
                  <input
                    type="text"
                    name="numOfResidentialHousesAndLandOwned"
                    value={orderdata.numOfResidentialHousesAndLandOwned}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Number of Other Houses or Buildings Owned:</td>
                <td>
                  <input
                    type="text"
                    name="numOfOtherHousesOrBuildingsOwned"
                    value={orderdata.numOfOtherHousesOrBuildingsOwned}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Number of Transport Assets:</td>
                <td>
                  <input
                    type="text"
                    name="numOfTransportAssets"
                    value={orderdata.numOfTransportAssets}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Total Floor Area:</td>
                <td>
                  <input
                    type="text"
                    name="totalFloorArea"
                    value={orderdata.totalFloorArea}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Non-Availability of Drinking Water:</td>
                <td>
                  <input
                    type="text"
                    name="nonAvailabilityOfDrinkingWater"
                    value={orderdata.nonAvailabilityOfDrinkingWater}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Absence of Necessary Sanitary Facilities:</td>
                <td>
                  <input
                    type="text"
                    name="absenceOfNecessarySanitaryFacilities"
                    value={orderdata.absenceOfNecessarySanitaryFacilities}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessful;
