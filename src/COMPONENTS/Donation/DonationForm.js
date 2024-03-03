import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Button } from 'react-bootstrap'; // Import Form, Col, and Button from react-bootstrap
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './DonationForm.css';

const DonationForm = () => {
 

  return (
    <div className="Form1">
      <Navbar reloadnavbar={false}/>
    <div className="Donation-form">
    
      <h1>Donation Form</h1>
      <Form>
        {/* <Form.Row>
            <Form.Group as={Col} controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Name"/>

            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St"/>
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity" >
                <Form.Label>City</Form.Label>
                <Form.Control/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity" >
                <Form.Label>Province</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control placeholder="RS." />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
            <Button variant="outline-primary" onClick={() =>{this.handleModal()}}>View Agreement</Button>
            <Form.Check type="checkbox" label="I read the Disclosure and Agreed to the Terms"/>
        </Form.Group>

        <Button variant="outline-dark" type="submit">
            <Link to = "/Donation" > 
            Submit
            </Link>
        </Button> */}
                        
      </Form>

    </div>
    </div>
  );
};

export default DonationForm;
