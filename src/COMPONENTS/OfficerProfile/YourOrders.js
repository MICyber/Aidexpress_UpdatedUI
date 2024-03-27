import React, {useEffect, useState } from 'react';
import './YourOrders.css';
import OrderSuccessful from '../Order/OrderSuccessful';
import { useRecoilState } from 'recoil';
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider';
import apiService from '../../utill/httpUtil';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const YourOrders = () => {
    const [data, setData] = useState([]);

    const getApplication = async () => {
        try {
            const response = apiService.get(`/applications`);
            console.log(response.subscribe(response => console.log(response)));
            response.subscribe(response => {
                if (response) {
                    console.log("data-->"+response);
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
        getApplication();
    }, []);

   
    const sendSMS = async (request) => {
        try {
          const response = apiService.post(`/send-sms`, request);
          console.log(response.subscribe(response => console.log(response)));
          response.subscribe(response => {
            if (response) {
             showToastSuccess("Successfully send message ");
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
    

    const [selectedorder, setselectedorder] = useState({});
    const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider);

    return (
        <div className='yourorders'>
            <h1 className='mainhead1'>Applications</h1>
            {ordersuccesscont && <OrderSuccessful order={selectedorder} setordersuccesscont={setordersuccesscont} />}
            <table className='yourorderstable'>
                <thead>
                    <tr>
                        <th scope='col'>Application ID</th>
                        <th scope='col'>User</th>
                        <th scope='col'>Action</th>
                        <th scope='col'>Application Form</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td data-label='Application ID'>{item._id}</td>
                                <td data-label='user'>{item.nameOfHouseholder}</td>
                                <td data-label='Received Status'>
                                    <div className='status-buttons'>
                                     
                                            <button
                                              
                                                className='status-button'
                                                onClick={() => {
                                                    const request2={
                                                        to:item.telephoneNumber,
                                                        message:"Thank you for your application"
                                                      }
                                                    sendSMS(request2);
                                                }}
                                            >
                                                Received
                                            </button>
                                            <button
                                              
                                                className='status-button'
                                                onClick={() => {
                                                    const request2={
                                                        to:item.telephoneNumber,
                                                        message:"Checking you application"
                                                      }
                                                    sendSMS(request2);
                                                }}
                                            >Checking
                                                
                                            </button>
                                            <button
                                               
                                                className='status-button'
                                                onClick={() => {
                                                    const request2={
                                                        to:item.telephoneNumber,
                                                        message:"Error Found - Resend your request"
                                                      }
                                                    sendSMS(request2);
                                                }}
                                            >Error Found - Resend
                                                
                                            </button>
                                        
                                    </div>
                                </td>
                                <td data-label='Application Form'>
                                    <button
                                        className='mainbutton1'
                                        onClick={() => {
                                            setselectedorder(item);
                                            setordersuccesscont(true);
                                        }}
                                    >
                                        View
                                    </button>
                                     <ToastContainer />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default YourOrders;
