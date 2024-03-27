import React, { useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
import './DonationForm.css';
import apiService from '../../utill/httpUtil';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../../PAGES/Auth/firebaseConfig';
import { getStorage } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

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
  const storage = getStorage(app);
  const { t } = useTranslation();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setFormData({ slip: downloadURL });

      console.log('File uploaded and metadata saved to Firestore:', downloadURL);
    } catch (error) {
      console.error("Error uploading file and saving metadata:", error);
    }
  };
  
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
    handleFileUpload(e)
  };

  const sendSMS = async (request) => {
    try {
      const response = apiService.post(`https://aidexpress-updatedui-13.onrender.com/send-sms`, request);
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

  const saveApplication = async (request) => {
    try {
      const requestd={
        donorName:formData.name,
        amount:formData.amount,
        message:'donation payment request',
        user:formData.name,
       }
        saveDonation(requestd);
    } catch (error) {
      showToastError(error);
      console.error('Error submitting service name:', error);
      throw error;
    }
  };

  const saveDonation = async (request) => {
    try {
      const response = apiService.post(`https://aidexpress-updatedui-13.onrender.com/donations`, request);
      console.log(response.subscribe(response => console.log(response)));
      response.subscribe(response => {
        if (response) {
          showToastSuccess("Successfully donation received ");
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

  const payment = async (request) => {
    try {
      const response = apiService.post(`https://aidexpress-updatedui-13.onrender.com/payments/make-payment`, request);
      console.log(response.subscribe(response => console.log(response)));
      response.subscribe(response => {
        if (response) {
          const request2={
            to:formData.phoneNumber,
            message:"Thank you for your donation"
          }
          sendSMS(request2);
          return response;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      userId: formData.name,
      amount: formData.amount,
    }
   
    request.user = formData.name;
    request.email = formData.email;
    request.phoneNumber = formData.phoneNumber;
    request.address = formData.address;
    request.paymentMethod = formData.paymentMethod
    if (formData.paymentMethod === "creditCard") {

      request.cardNumber = formData.cardNumber
      request.expiration = formData.expiration
      request.cvc = formData.cvc

    }

    request.slip = formData.slip
    const obj = payment(request);
    console.log("Form submitted:", obj);

    console.log("Form submitted:", obj);
    saveApplication(request);

  };

  const handleModal = () => {
    setShowModal(!showModal); // Toggle modal visibility
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
    <div className="Donate">
      <Navbar reloadnavbar={false} />
      <div className="donation-form">
        <h1>{t("DonationForm")}</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>{t("FullName")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("DonateName")}
              name="name"
              value={formData.name}
              onChange={handleChange}
              pattern="[^\d]+"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>{t("DonateEmail")}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t("DonateMail")}
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern=".+@gmail\.com"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>{t("DonatePhoneNum")}</Form.Label>
            <Form.Control
              type="tel"
              placeholder={t("DonatePhoneNumber")}
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="\+94\d{9}"
              required
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>{t("DonateAddress")}</Form.Label>
            <Form.Control
              placeholder={t("DoanteAddress")}
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAmount">
            <Form.Label>{t("Amount")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("DonateAmount")}
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              pattern="[0-9]+"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPaymentMethod">
            <Form.Label>{t("PaymentMethod")}</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label={t("CreditCard")}
                name="paymentMethod"
                value="creditCard"
                onChange={handlePaymentMethodChange}
                required
              />
              <Form.Check
                type="radio"
                label={t("BankTransfer")}
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
                <Form.Label>{t("CardNumber")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("CardNumber")}
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  pattern="\d{16}"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formExpiration">
                <Form.Label>{t("ExpireDate")}</Form.Label>
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
                  pattern="\d{3}"
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
                  <strong>{t("BankNameDonation")}</strong> {t("people's Bank")}
                </p>
                <p>
                  <strong>{t("Branch")}</strong> {t("Colombo")}
                </p>
                <p>
                  <strong>{t("AccountNum")}</strong> 1234567890
                </p>
                <p>
                  <strong>{t("AccName")}</strong> {t("S W Fernando")}
                </p>
              </div>

              {/* Slip Upload Field */}
              <Form.Group controlId="formSlip">
                <Form.Label>{t("UploadSlip")}</Form.Label>
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
              <Button variant="outline-primary" onClick={handleModal}>{t("agrre")}</Button>
              <Form.Check type="checkbox" label={t("Line")} required />

            </Form.Group>
          </div>

          <Button variant="primary" type="submit" className="submit-button">
          {t("Submit")}
          </Button>
          <ToastContainer />
        </Form>

        <Modal show={showModal} onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{t("Aggrement")}</Modal.Title>

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



