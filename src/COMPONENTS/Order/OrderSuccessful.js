import React, { useState } from 'react';
import './OrderSuccessful.css';

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
        gramaSevakaDivision: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setorderdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='OrdersSuccessful'>
            <div className='confirmationcont'>
                <div className='c3'>
                    <center><h2>Personal Details</h2></center>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name of householder:</td>
                                <td><input type="text" name="nameOfHouseholder" value={orderdata.nameOfHouseholder} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td><input type="text" name="address" value={orderdata.address} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>NIC Number:</td>
                                <td><input type="text" name="nicNumber" value={orderdata.nicNumber} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Telephone Number:</td>
                                <td><input type="text" name="telephoneNumber" value={orderdata.telephoneNumber} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td><input type="text" name="age" value={orderdata.age} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Names of Family Members:</td>
                                <td><input type="text" name="familyMembers" value={orderdata.familyMembers} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Marital Status:</td>
                                <td><input type="text" name="maritalStatus" value={orderdata.maritalStatus} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Single Parent:</td>
                                <td><input type="text" name="singleParent" value={orderdata.singleParent} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Divisional Secretariat:</td>
                                <td><input type="text" name="divisionalSecretariat" value={orderdata.divisionalSecretariat} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Grama Sevaka Division:</td>
                                <td><input type="text" name="gramaSevakaDivision" value={orderdata.gramaSevakaDivision} onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessful;
