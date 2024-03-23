import React, { useEffect, useState } from 'react';
import './YourOrders.css';
import OrderSuccessful from '../Order/OrderSuccessful';
import { useRecoilState } from 'recoil';
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider';
import apiService from '../../utill/httpUtil';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const YourOrders = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { t } = useTranslation();

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await apiService.get(`/payments`);
            console.log(response);
            if (response) {
                setData(response);
            } else {
                showToastError("Failed to send SMS ");
            }
        } catch (error) {
            showToastError(error);
            console.error('Error submitting service name:', error);
            throw error;
        }
    };

    useEffect(() => {
        getData();
    });

    const [selectedorderid] = useState(0)
    const [ordersuccesscont] = useRecoilState(orderSuccessfulProvider)
    const [bank, setbank] = useState();
    const [branch, setbranch] = useState();
    const [accountNumber, setaccountNumber] = useState();
    const [accountName, setaccountName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const payment = async (request) => {
        try {
            const response = await apiService.post(`/payments/make-payment`, request);
            if (response) {
                const request2 = {
                    to: phoneNumber,
                    message: " your payment of Rs.1000.00 to the account. Your payment has been successfully received. Thank you for your support."
                }
                sendSMS(request2);
                return response;
            } else {
                showToastError("Failed to payment");
            }
        } catch (error) {
            showToastError(error);
            console.error('Error submitting service name:', error);
            throw error;
        }
    };

    const sendSMS = async (request) => {
        try {
            const response = await apiService.post(`/send-sms`, request);
            if (response) {
                showToastSuccess("Successfully saved ");
            } else {
                showToastError("Failed to send SMS ");
            }
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
            phoneNumber: phoneNumber,
            paymentMethod: 'bank',
            bank: bank,
            branch: branch,
            accountNumber: accountNumber,
            user: accountName
        }
        payment(request);
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
                                        {item.status === 'success' && <span className='greendot'></span>}
                                        {item.status === 'failed' && <span className='reddot'></span>}
                                    </div>
                                </td>
                                <td data-label='Total'>RS.{item.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <div>
                    <h1 className='mainhead1'>{t("Get Monthly allowance")}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="bank">{t("Bank:")}</label>
                            <input type="text" id="bank" name="bank" placeholder={t("Enter your bank name")} onChange={(e) => setbank(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="branch">{t("Branch:")}</label>
                            <input type="text" id="branch" name="branch" placeholder={t("Enter your branch name")} onChange={(e) => setbranch(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountNumber">{t("Account Number:")}</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder={t("Enter your account number")} onChange={(e) => setaccountNumber(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountName">{t("Account Name:")}</label>
                            <input type="text" id="accountName" name="accountName" placeholder={t("Enter your account name")} onChange={(e) => setaccountName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNo">{t("Contact No:")}</label>
                            <input type="text" id="contactNo" name="contactNo" placeholder={t("Enter your contact number")} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <button type="submit" className="mainbutton1">{t("Submit")}</button>
                        <ToastContainer />
                    </form>
                </div>

            </div>
        </div>


    )
}

export default YourOrders