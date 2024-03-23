import React, { useEffect,useState } from 'react'
import './Evidence.css'
import OrderSuccessful from '../Order/OrderSuccessful'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider';
import Navbar from '../Navbar/Navbar';
import apiService from '../../utill/httpUtil';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonateEvidence = () => {
    const   [data,setData] = useState([]);
    
    const showToastError = (message) => {
        toast.error(message);
    };
      
    const getDonation = async () => {
        try {
          const response = apiService.get(`/donations`);
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
        getDonation();
        }, []);
   
    const [selectedorderid, setselectedorderid] = useState(0)
    const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-based.
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };
    return (
        <div className='Evidence'>
            <Navbar reloadnavbar={false} />
            <div className='yourorders'>
                <h1 className='mainhead1'>Donation Evidences</h1>
                {
                    ordersuccesscont && <OrderSuccessful orderid={selectedorderid} message={`Order ID: ${selectedorderid}`} />
                }
                <table className='yourorderstable'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Date</th>
                            {/* <th scope='col'>Status</th> */}
                            <th scope='col'>Amount</th>
                            {/* Remove the "Bank Statement" column */}
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td data-label='Name'>{item.donorName}</td>
                                    <td data-label='Date'>{formatDate(item.donationDate)}</td>
                                    {/* <td data-label='Received Status'>
                                        <div>
                                            {item.status === 'Received' && <span className='greendot'></span>}
                                            {item.status === 'On the way' && <span className='yellowdot'></span>}
                                            {item.status === 'Cancelled' && <span className='reddot'></span>}
                                            {item.status}
                                        </div>
                                    </td> */}
                                    <td data-label='Amount'>RS.{item.amount}</td>
                                    {/* Remove the "Bank Statement" column */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DonateEvidence;
