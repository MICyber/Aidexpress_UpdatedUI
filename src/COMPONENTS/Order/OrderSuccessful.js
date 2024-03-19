// import React, { useState } from "react";
// import "./OrderSuccessful.css";

// const OrderSuccessful = ({ orderid, message, redirecto }) => {
//   const [orderdata, setorderdata] = useState({
//     nameOfHouseholder: "",
//     address: "",
//     nicNumber: "",
//     telephoneNumber: "",
//     age: "",
//     familyMembers: "",
//     maritalStatus: "",
//     singleParent: "",
//     divisionalSecretariat: "",
//     gramaSevakaDivision: "",
//     bankName: "",
//     accountHolderName: "",
//     accountNumber: "",
//     branchName: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setorderdata((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
//   // Define the handleFileChange function to handle file input changes
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     // Assuming you want to store the file in the state, you can do something like this
//     // Note: You may need to handle file uploads appropriately based on your requirements
//     setorderdata(prevState => ({
//         ...prevState,
//         [name]: files[0] // Assuming you only allow single file uploads
//     }));
// };
//   return (
//     <div className="OrdersSuccessful">

// {/*<button
//     className='popup__close-btn'
//     onClick={() => {
//         window.location.reload(); // Redirect to the current order successful page
//     }}
// >
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//     </svg>
//   </button>*/}

//       <div className="confirmationcont">
//         <div className="c3">
//           <center>
//             <h2>Personal Details</h2>
//           </center>
//           <table>
//             <tbody>
//               <tr>
//                 <td>Name of householder:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="nameOfHouseholder"
//                     value={orderdata.nameOfHouseholder}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Address:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderdata.address}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>NIC Number:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="nicNumber"
//                     value={orderdata.nicNumber}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Telephone Number:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="telephoneNumber"
//                     value={orderdata.telephoneNumber}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Age:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="age"
//                     value={orderdata.age}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Names of Family Members:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="familyMembers"
//                     value={orderdata.familyMembers}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Marital Status:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="maritalStatus"
//                     value={orderdata.maritalStatus}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Single Parent:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="singleParent"
//                     value={orderdata.singleParent}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Divisional Secretariat:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="divisionalSecretariat"
//                     value={orderdata.divisionalSecretariat}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Grama Sevaka Division:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="gramaSevakaDivision"
//                     value={orderdata.gramaSevakaDivision}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td colSpan="2">
//                   <center>
//                     <h2>Bank Details</h2>
//                   </center>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Bank Name:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="bankName"
//                     value={orderdata.bankName}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Account Holder Name:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="accountHolderName"
//                     value={orderdata.accountHolderName}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Account Number:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="accountNumber"
//                     value={orderdata.accountNumber}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Branch Name:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="branchName"
//                     value={orderdata.branchName}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <center>
//             <h2>Additional Details</h2>
//           </center>
//           <table>
//             <tbody>
//               <tr>
//                 <td>Monthly Per Capita Income:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="monthlyPerCapitaIncome"
//                     value={orderdata.monthlyPerCapitaIncome}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Number of Livelihood Assets:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="numOfLivelihoodAssets"
//                     value={orderdata.numOfLivelihoodAssets}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Number of Acres of Cultivable Paddy Land:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="numOfAcresOfCultivablePaddyLand"
//                     value={orderdata.numOfAcresOfCultivablePaddyLand}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Number of Residential Houses and Land Owned:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="numOfResidentialHousesAndLandOwned"
//                     value={orderdata.numOfResidentialHousesAndLandOwned}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Number of Other Houses or Buildings Owned:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="numOfOtherHousesOrBuildingsOwned"
//                     value={orderdata.numOfOtherHousesOrBuildingsOwned}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Number of Transport Assets:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="numOfTransportAssets"
//                     value={orderdata.numOfTransportAssets}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Total Floor Area:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="totalFloorArea"
//                     value={orderdata.totalFloorArea}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Non-Availability of Drinking Water:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="nonAvailabilityOfDrinkingWater"
//                     value={orderdata.nonAvailabilityOfDrinkingWater}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Absence of Necessary Sanitary Facilities:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="absenceOfNecessarySanitaryFacilities"
//                     value={orderdata.absenceOfNecessarySanitaryFacilities}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <center><h2>Proof of Documents</h2></center>
// <table>
//     <tbody>
//         <tr>
//             <td>Proof of Income:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="proofOfIncome" onChange={handleFileChange} /></td>
//         </tr>
//         <tr>
//             <td>Tax Returns:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="taxReturns" onChange={handleFileChange} /></td>
//         </tr>
//         <tr>
//             <td>Bank Statements:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="bankStatements" onChange={handleFileChange} /></td>
//         </tr>
//         <tr>
//             <td>Proof of Assets:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="proofOfAssets" onChange={handleFileChange} /></td>
//         </tr>
//         <tr>
//             <td>Proof of Expenses:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="proofOfExpenses" onChange={handleFileChange} /></td>
//         </tr>
//         <tr>
//             <td>Identification:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="identification" onChange={handleFileChange} /></td>
//         </tr>
//         <tr>
//             <td>Proof of Household Size:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="proofOfHouseholdSize" onChange={handleFileChange} /></td>
//         </tr>
//         <tr>
//             <td>Other Documents to Support:</td>
//             <td><input type="file" accept=".pdf,.jpg" name="otherDocuments" onChange={handleFileChange} /></td>
//         </tr>
//     </tbody>
// </table>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccessful;

//--------------------------------------------------------------------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import "./OrderSuccessful.css";
import apiService from '../../utill/httpUtil';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../../PAGES/Auth/firebaseConfig';
const OrderSuccessful = ({ order, setordersuccesscont }) => {
    const [orderdata, setorderdata] = useState({});



    const track = async (request) => {
        try {
          const response = apiService.post(`/applications/${orderdata._id}/track`, request);
            console.log(response.subscribe(response => console.log(response)));
            response.subscribe(response => {
                if (response) {

                    showToastSuccess("Successfully changed status");
                } else {
                    showToastError("Failed to changed status ");
                }
            });


        } catch (error) {
            showToastError(error);
            console.error('Error submitting service name:', error);
            throw error;
        }
    };
    const sendSMS = async (request) => {
        try {
            const response = apiService.post(`/applications/${orderdata._id}/track`, request);
            console.log(response.subscribe(response => console.log(response)));
            response.subscribe(response => {
                if (response) {
                    //   showToastSuccess("Successfully send message ");
                } else {
                    showToastError("Failed to send SMS ");
                }
            })


        } catch (error) {
            showToastError(error);
            console.error('Error submitting service name:', error);
            throw error;
        }
    };
    useEffect(() => {
        setorderdata(order);
        console.log("order->", order);
    }, [order]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setorderdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    // Define the handleFileChange function to handle file input changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        // Assuming you want to store the file in the state, you can do something like this
        // Note: You may need to handle file uploads appropriately based on your requirements
        setorderdata(prevState => ({
            ...prevState,
            [name]: files[0] // Assuming you only allow single file uploads
        }));
    };

    const handleEligible = () => {
        const request = {

            "_id": orderdata._id,
            "status": "completed",
            "notes": `login details usernames: ${orderdata.accountHolderName}@gmail.com    paasword: ${orderdata.nicNumber}`,

        }
        track(request)
        usercreate();
        const request2 = {
            to: orderdata.telephoneNumber,
            message: `login details usernames: ${orderdata.accountHolderName}@gmail.com    paasword: ${orderdata.nicNumber}`
        }
        sendSMS(request2);

    };

    const handleRejected = () => {
        const request = {

            "_id": orderdata._id,
            "status": "rejected",
            "notes": 'rejected',

        }
        track(request)
        const request2 = {
            to: orderdata.telephoneNumber,
            message: "Thank you for your Applications Rejected"
        }
        sendSMS(request2);
    };
    // const handleCancel = () => {
    //     // Handle cancellation logic
    //     setordersuccesscont(request);
    // };
    const handleCancel = () => {
      // Handle cancellation logic
      setordersuccesscont(request); // This is where the error occurs
    };
  

    const email = `${orderdata.accountHolderName}@gmail.com`;
    const usercreate = async () => {

        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, '12345678', orderdata.accountHolderName, orderdata.accountHolderName, '12345678');
            if (user) {
                alert("Account Created Successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    };




    function showToastSuccess(msg) {
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    function showToastError(msg) {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className="OrdersSuccessful">
            <div className="cancel-icon" onClick={handleCancel}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x-circle"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm3.354 10.146a.5.5 0 0 1-.708 0L8 8.707 5.354 11.354a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 .708-.708L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1 0 .708z"
                    />
                </svg>
            </div>
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
                                        value={orderdata.accountHolderName}
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
                                        value={orderdata.namesOfFamilyMembers}
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
                                        value={orderdata.numberOfLivelihoodAssets}
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
                                        value={orderdata.numberOfAcresOfCultivablePaddyLand}
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
                                        value={orderdata.numberOfResidentialHousesAndLandOwned}
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
                                        value={orderdata.numberOfOtherHousesOrBuildingsOwned}
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
                                        value={orderdata.numberOfTransportAssets}
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
                    <center><h2>Proof of Documents</h2></center>
                    <table>
                        <tbody>
                            <tr>
                                <td>Proof of Income:</td>
                                <td><img src={orderdata.proofOfIncome} /></td>
                            </tr>
                            <tr>
                                <td>Tax Returns:</td>
                                <td><img name="taxReturns" src={orderdata.taxReturns} /></td>
                            </tr>
                            <tr>
                                <td>Bank Statements:</td>
                                <td><img name="bankStatements" src={orderdata.bankStatements} /></td>
                            </tr>
                            <tr>
                                <td>Proof of Assets:</td>
                                <td><img name="proofOfAssets" src={orderdata.proofOfAssets} /></td>
                            </tr>
                            <tr>
                                <td>Proof of Expenses:</td>
                                <td><img name="proofOfExpenses" src={orderdata.proofOfExpenses} /></td>
                            </tr>
                            <tr>
                                <td>Identification:</td>
                                <td><img name="identification" src={orderdata.identification} /></td>
                            </tr>
                            <tr>
                                <td>Proof of Household Size:</td>
                                <td><img name="proofOfHouseholdSize" src={orderdata.proofOfHouseholdSize} /></td>
                            </tr>
                            <tr>
                                <td>Other Documents to Support:</td>
                                <td><img name="otherDocuments" src={orderdata.otherDocumentsToSupport} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-success mr-3" onClick={handleEligible}>
                        Eligible
                    </button>
                    <button className="btn btn-danger" onClick={handleRejected}>
                        Rejected
                    </button>
                    < ToastContainer />
                    {/* <button className="btn btn-danger" onClick={setordersuccesscont(false)}>
            cancel
          </button> */}
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessful;

//---------------------------------------------------------------------------------------------------------------------------------------------

/*
import React, { useState } from 'react'
import './OrderSuccessful.css'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider'

const OrderSuccessful = ({ orderid, message, redirecto }) => {

    const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
    const [orderdata, setorderdata] = useState({
        OrderNo: orderid,
        OrderDate: '12/12/2021',
        OrderStatus: 'Delivered',
        CustomerName: 'Harshal Jain',
        CustomerShipToAddress: 'B-101, Shreeji Apartment, Near Shreeji Hospital, Kalyan West, Thane, Maharashtra 421301',
        CustomerEmail: 'virajj014@gmail.com',
        OrderItems: [
            {
                ProductName: 'Product 1',
                Price: 100,
                Quantity: 2,
            },
            {
                ProductName: 'Product 2',
                Price: 5000,
                Quantity: 5,
            }
        ],
        SubTotal: 25200,
        Tax: 100,
        ShippingCharges: 80,
        Total: 25380,
        PaymentType: 'Cash on Delivery'
    })
    return (
        <div
            className='OrdersSuccessful'
        >
            <button className='popup__close-btn'
                onClick={() => {

                    if(redirecto == 'userorders'){
                        window.location.href = '/user/yourorders'
                    }
                    setordersuccesscont(false)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className='confirmationcont'>
                <div className='c1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <h2>{message}</h2>
                </div>

                <div className='c2'>
                    <h2>Order Summary</h2>
                    <div>
                        <p>Order Number</p>
                        <p>{orderdata?.OrderNo}</p>
                    </div>
                    <div>
                        <p>Order Date</p>
                        <p>{
                            orderdata.OrderDate
                        }</p>
                    </div>

                    <div>
                        <p>Name</p>
                        <p>{
                            orderdata.CustomerName
                        }</p>
                    </div>

                    <div>
                        <p>Email</p>
                        <p>
                            {
                                orderdata.CustomerEmail
                            }
                        </p>
                    </div>

                    <div>
                        <p>Order Subtotal</p>
                        <p>$ {orderdata.SubTotal}</p>
                    </div>

                    <div>
                        <p>Payment Method</p>
                        <p>{orderdata.PaymentType}</p>
                    </div>

                    <div>
                        <p>Shipping Address</p>
                        <p>{orderdata.CustomerShipToAddress
                        }</p>
                    </div>

                    <div>
                        <p>Shipping Charges</p>
                        <p>$ {orderdata.ShippingCharges}</p>
                    </div>

                    <div>
                        <p>Tax</p>
                        <p>$ {orderdata.Tax}</p>
                    </div>

                    <div>
                        <p>Total</p>
                        <p>$ {orderdata.Total}</p>
                    </div>

                </div>

                <div className='c3'>
                    <table>
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                orderdata?.OrderItems && orderdata.OrderItems.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <p>{index + 1}</p>
                                            </td>
                                            <td><p>{item.ProductName}</p></td>
                                            <td><p>${item.Price}</p></td>
                                            <td><p>{item.Quantity}</p></td>
                                            <td><p>${item.Price * item.Quantity}</p></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='totalcont'>
                    <div>
                        <p>Subtotal</p>
                        <p>$ {orderdata.SubTotal}</p>
                    </div>

                    <div>
                        <p>Shipping</p>
                        <p>$ {orderdata.ShippingCharges}</p>
                    </div>

                    <div>
                        <p>Tax</p>
                        <p>$ {orderdata.Tax}</p>
                    </div>

                    <div>
                        <p>Total</p>
                        <p>$ {orderdata.Total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccessful
*/