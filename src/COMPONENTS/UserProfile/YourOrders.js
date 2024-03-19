import React, { useState } from 'react'
import './YourOrders.css'
import OrderSuccessful from '../Order/OrderSuccessful'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider'

const YourOrders = () => {

    const data = [
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Received',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2021',
            status: 'On the way',
            total: 1600
        },
        {
            id: 112347,
            date: '12/12/2021',
            status: 'Received',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2021',
            status: 'Cancelled',
            total: 100
        },
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Received',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2021',
            status: 'On the way',
            total: 1600
        },
        {
            id: 112347,
            date: '12/12/2021',
            status: 'Received',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2021',
            status: 'Cancelled',
            total: 100
        }
    ]
    const [selectedorderid, setselectedorderid] = useState(0)
    const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
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
                        <th scope='col'>Bank Statemnet</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td data-label='ID'>{item.id}</td>
                                <td data-label='Date'>{item.date}</td>
                                <td data-label='Received Status'>
                                    <div>
                                        {item.status == 'Received' && <span className='greendot'></span>}
                                        {item.status == 'On the way' && <span className='yellowdot'></span>}
                                        {item.status == 'Cancelled' && <span className='reddot'></span>}
                                        {item.status}
                                    </div>
                                </td>
                                <td data-label='Total'>RS.{item.total}</td>
                                <td data-label='Invoice'>
                                    <button className='mainbutton1'
                                        onClick={() => {
                                            setselectedorderid(item.id)
                                            setordersuccesscont(true)
                                        }}
                                    >View</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                
                <form>
                <div>
                    <h1 className='mainhead1'>Get Monthly allowance</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="bank">Bank:</label>
                            <input type="text" id="bank" name="bank" placeholder="Enter your bank name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="branch">Branch:</label>
                            <input type="text" id="branch" name="branch" placeholder="Enter your branch name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountNumber">Account Number:</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder="Enter your account number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountName">Account Name:</label>
                            <input type="text" id="accountName" name="accountName" placeholder="Enter your account name" />
                        </div>
                        <button type="submit" className="mainbutton1">Submit</button>
                    </form>
                </div>  
                </form>

            </div>
        </div>

       
    )
}

export default YourOrders