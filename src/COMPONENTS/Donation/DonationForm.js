/*import React, { useState } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
import './DonationForm.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="Donate">
      <Navbar reloadnavbar={false} />
    <div className="donation-form">
      <h1>Donation Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="$ USD"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default DonationForm;*/

import React, { useState } from "react";
import { Form, Button,Modal } from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
import './DonationForm.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    amount: "",
    paymentMethod: "",  // New state for payment method
    cardNumber: "",
    expiration: "",
    cvc: "",
    slip: null,  // New state for slip file
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: value,
    }));
  };

  const handleSlipChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      slip: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can handle file upload using FormData and send it to the server
  };

  const handleModal = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  return (
    <div className="Donate">
      <Navbar reloadnavbar={false} />
      <div className="donation-form">
        <h1>Donation Form</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="RS"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </Form.Group>

          <Form.Group controlId="formPaymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Credit Card"
                name="paymentMethod"
                value="creditCard"
                onChange={handlePaymentMethodChange}
                required
              />
              <Form.Check
                type="radio"
                label="Bank Transfer"
                name="paymentMethod"
                value="bankTransfer"
                onChange={handlePaymentMethodChange}
                required
              />
            </div>
          </Form.Group>

          {/* Credit Card Fields */}
          {formData.paymentMethod === "creditCard" && (
            <>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formExpiration">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                type="text"
                placeholder="CVC"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </>
          )}

          {/* Slip Upload Field */}
          {formData.paymentMethod === "bankTransfer" && (
            <>
            {/* Additional Information for Bank Transfer */}
            <div>
              <p>
                <strong>Bank name:</strong> People's Bank
              </p>
              <p>
                <strong>Branch:</strong> Colombo
              </p>
              <p>
                <strong>Account Number:</strong> 1234567890
              </p>
              <p>
                <strong>Account Name:</strong> S W Fernando
              </p>
            </div>
        
            {/* Slip Upload Field */}
            <Form.Group controlId="formSlip">
              <Form.Label>Upload Slip</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf, .jpg, .png"
                name="slip"
                onChange={handleSlipChange}
                required
              />
            </Form.Group>
          </>
          )}
          <div>
          <Form.Group id="formGridCheckbox">
          <Button variant="outline-primary" onClick={handleModal}>View Agreement</Button>
          <Form.Check type="checkbox" label="I read the Disclosure and Agreed to the Terms" />

          </Form.Group>
          </div>

          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>

        <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
        <Modal.Title>Donation Agreement</Modal.Title>

        </Modal.Header>
        <Modal.Body style={{ fontSize: "9px" }}>
          <p>
          This Gift/ Donation Agreement (“Agreement”) is made this ____ day of _______ between [Donor’s Names] and their assignee (hereinafter referred to as “the Donor”), and [Your Organization] an [arts nonprofit organization located in Indianapolis, Indiana]. The Donor and [Your Organization] agree as follows:
          </p>

          <p>
          Donor Commitment. The Donor hereby pledges to [Your Organization] the sum of [insert amount] or more, which as provided for herein is designated for the benefit of [Fund Name] Endowment.
                            Donor Purpose.
                            Purpose. It is understood and agreed that the gift will be used for the following purpose or purposes: To establish an endowment from which the annual interest earnings will be used to [state purpose].
                            Payment. It is further understood and agreed that the gift will be paid in full on or before [insert date].
          </p>
          <p>
          It is also understood and agreed that the gift funds as received may be invested by a third-party that shall best determine investment options for this endowment fund (see item #4 below). The spending policy for the endowment will be the policy set forth and approved by [Your Organization] Board of Directors which will likely include the use of annual interest earnings only and not invade the principal of the fund to protect and perpetuate growth.
          </p>
        </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default DonationForm;



