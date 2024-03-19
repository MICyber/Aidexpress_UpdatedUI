import React, { useEffect, useState } from 'react'
import './YourOrders.css'
import OrderSuccessful from '../Order/OrderSuccessful'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider'
import apiService from '../../utill/httpUtil';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../../PAGES/Auth/firebaseConfig';
import { getStorage } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const YourOrders = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = apiService.get("/payments");
            console.log(response.subscribe(response => console.log(response)));
            response.subscribe(response => {
                if (response) {
                    console.log(response);
                    setData(response);

                    //  showToastSuccess("Successfully saved ");
                } else {
                    showToastError("Failed to send SMS ");
                }
            });


        } catch (error) {
            showToastError(error);
            console.error('Error submitting service name:', error);
            throw error;
        }
    };


    useEffect(() => {
        getData();
    }, []);

    const [selectedorderid, setselectedorderid] = useState(0)
    const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
    const [bank, setbank] = useState();
    const [branch, setbranch] = useState();
    const [accountNumber, setaccountNumber] = useState();
    const [accountName, setaccountName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-based.
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const payment = async (request) => {
        try {
            const response = apiService.post(`/payments/make-payment`, request);
            console.log(response.subscribe(response => console.log(response)));
            response.subscribe(response => {
                if (response) {
                    const request2 = {
                        to: phoneNumber,
                        message: " your payment of Rs.1000.00 to the account. Your payment has been successfully received. Thank you for your support."
                    }
                    sendSMS(request2);
                    return response;
                    // showToastSuccess("Successfully  payment");
                } else {
                    showToastError("Failed to payment");
                }
            });


        } catch (error) {
            showToastError(error);
            console.error('Error submitting service name:', error);
            throw error;
        }
    };

    const saveApplication = async (request) => {
        try {
            const response = apiService.post("/payments", request);
            console.log(response.subscribe(response => console.log(response)));
            response.subscribe(response => {
                if (response) {
                    showToastSuccess("Successfully saved ");
                } else {
                    showToastError("Failed to save ");
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
            const response = apiService.post("/send-sms", request);
            console.log(response.subscribe(response => console.log(response)));
            response.subscribe(response => {
                if (response) {
                    //  showToastSuccess("Successfully saved ");
                } else {
                    showToastError("Failed to send SMS ");
                }
            });


        } catch (error) {
            showToastError(error);
            console.error('Error submitting service name:', error);
            throw error;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = {
            userId: accountName,
            amount: 1000,
        }
        
        // console.log("Form submitted:", obj);

        // console.log("Form submitted:", obj);
        request.phoneNumber = phoneNumber;
        request.paymentMethod = 'bank'
        request.bank = bank;
        request.branch = branch;
        request.accountNumber = accountNumber;
        request.user = accountName;
         payment(request);
        // if (formData.paymentMethod === "creditCard") {

        //   request.cardNumber = formData.cardNumber
        //   request.expiration = formData.expiration
        //   request.cvc = formData.cvc

        // }
        // request.paymentMethod  = formData.paymentMethod
        // request.cardNumber = formData.cardNumber
        // request.expiration = formData.expiration
        // request.cvc = formData.cvc
        // request.slip = formData.slip
     //   saveApplication(request);


        // saveApplication(formData);

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
        <div className='yourorders'>
            <h1 className='mainhead1'>Account Statement</h1>
            {
                ordersuccesscont && <OrderSuccessful orderid={selectedorderid} message={`Order ID: ${selectedorderid}`} />
            }
            <table className='yourorderstable'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Total</th>
                        {/* <th scope='col'>Bank Statemnet</th> */}
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td data-label='ID'>{item.id}</td>
                                <td data-label='Date'>{formatDate(item.transactionDate)}</td>
                                <td data-label='Received Status'>
                                    <div>
                                        {item.status == 'success' && <span className='greendot'></span>}
                                        {item.status == 'failed' && <span className='reddot'></span>}

                                    </div>
                                </td>
                                <td data-label='Total'>RS.{item.amount}</td>
                                {/* <td data-label='Invoice'>
                                    <button className='mainbutton1'
                                        onClick={() => {
                                            setselectedorderid(item.id)
                                            setordersuccesscont(true)
                                        }}
                                    >View</button>
                                </td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>

                <div>
                    <h1 className='mainhead1'>Get Monthly allowance</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="bank">Bank:</label>
                            <input type="text" id="bank" name="bank" placeholder="Enter your bank name" onChange={(e) => setbank(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="branch">Branch:</label>
                            <input type="text" id="branch" name="branch" placeholder="Enter your branch name" onChange={(e) => setbranch(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountNumber">Account Number:</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder="Enter your account number" onChange={(e) => setaccountNumber(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountName">Account Name:</label>
                            <input type="text" id="accountName" name="accountName" placeholder="Enter your account name" onChange={(e) => setaccountName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNo">Contact No:</label>
                            <input type="text" id="contactNo" name="contactNo" placeholder="Enter your contact number" onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <button type="submit" className="mainbutton1">Submit</button>
                        <ToastContainer />
                    </form>
                </div>

            </div>
        </div>


    )
}

export default YourOrders