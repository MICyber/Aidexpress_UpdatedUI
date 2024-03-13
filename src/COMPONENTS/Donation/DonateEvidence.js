import React, { useState } from 'react'
import './Evidence.css'
import OrderSuccessful from '../Order/OrderSuccessful'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider';
import Navbar from '../Navbar/Navbar';

const DonateEvidence = () => {

    const data = [
        {
            name: 'John Doe',
            date: '12/12/2021',
            status: 'Received',
            amount: 1000
        },
        {
            name: 'Jane Doe',
            date: '12/12/2021',
            status: 'On the way',
            amount: 1600
        },
        {
            name: 'Alice Smith',
            date: '12/12/2021',
            status: 'Received',
            amount: 2000
        },
        {
            name: 'Bob Johnson',
            date: '12/12/2021',
            status: 'Cancelled',
            amount: 100
        },
        {
            name: 'John Doe',
            date: '12/12/2021',
            status: 'Received',
            amount: 1000
        },
        {
            name: 'Jane Doe',
            date: '12/12/2021',
            status: 'On the way',
            amount: 1600
        },
        {
            name: 'Alice Smith',
            date: '12/12/2021',
            status: 'Received',
            amount: 2000
        },
        {
            name: 'Bob Johnson',
            date: '12/12/2021',
            status: 'Cancelled',
            amount: 100
        },
        {
            name: 'Bob Johnson',
            date: '12/12/2021',
            status: 'Cancelled',
            amount: 100
        }
    ]
    const [selectedorderid, setselectedorderid] = useState(0)
    const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
    
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
                            <th scope='col'>Status</th>
                            <th scope='col'>Amount</th>
                            {/* Remove the "Bank Statement" column */}
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td data-label='Name'>{item.name}</td>
                                    <td data-label='Date'>{item.date}</td>
                                    <td data-label='Received Status'>
                                        <div>
                                            {item.status === 'Received' && <span className='greendot'></span>}
                                            {item.status === 'On the way' && <span className='yellowdot'></span>}
                                            {item.status === 'Cancelled' && <span className='reddot'></span>}
                                            {item.status}
                                        </div>
                                    </td>
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
