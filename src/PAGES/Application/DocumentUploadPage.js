import React, { useEffect, useState } from "react";
import "./DocumentUploadPage.css";
import { Link } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import { useLocation } from 'react-router-dom';
import app from '../Auth/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiService from '../../utill/httpUtil';
const DocumentUploadPage = () => {

  const location = useLocation();
  const { request } = location.state || {};
  // const db = getFirestore(app);
  const storage = getStorage(app);
  const [doc1, setDoc1] = useState('');
  const [doc2, setDoc2] = useState('');
  const [doc3, setDoc3] = useState('');
  const [doc4, setDoc4] = useState('');
  const [doc5, setDoc5] = useState('');
  const [doc6, setDoc6] = useState('');
  const [doc7, setDoc7] = useState('');
  const [doc8, setDoc8] = useState('');

  request.proofOfIncome = doc1;
  request.taxReturns = doc2;
  request.bankStatements = doc3;
  request.proofOfAssets = doc4;
  request.proofOfExpenses = doc5;
  request.identification = doc6;
  request.proofOfHouseholdSize = doc7;
  request.otherDocumentsToSupport = doc8;
  request.status = "submitted";
    request.updates = [
      {
        "status": "submitted",
        "date": new Date(),
        "note": "Application submitted online",
        "user": "applicant"
      }
    ]
  const handleFileUpload = async (e, o) => {
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      if (o === '1') {
        //  request.doc1=downloadURL
        setDoc1(downloadURL)
      }
      if (o === '2') {
        // request.doc2=downloadURL
        setDoc2(downloadURL)
      }
      if (o === '3') {
        //request.doc3=downloadURL
        setDoc3(downloadURL)
      }
      if (o === '4') {
        //  request.doc4=downloadURL
        setDoc4(downloadURL)
      }
      if (o === '5') {
        //  request.doc5=downloadURL
        setDoc5(downloadURL)
      }

      if (o === '6') {
        //request.doc6=downloadURL
        setDoc6(downloadURL)
      }
      if (o === '7') {
        //  request.doc7=downloadURL
        setDoc7(downloadURL)
      }
      if (o === '8') {
        //   request.doc8=downloadURL
        setDoc8(downloadURL)
      }

      console.log('File uploaded and metadata saved to Firestore:', downloadURL);
    } catch (error) {
      console.error("Error uploading file and saving metadata:", error);
    }
  };


  const saveApplication = async (request) => {
    try {
      const response = apiService.post(`/applications`, request);
      console.log(response.subscribe(response => console.log(response)));
      response.subscribe(response => {
        if (response) {
          showToastSuccess("Successfully saved application");
        } else {
          showToastError("Failed to save application");
        }
      });


    } catch (error) {
      showToastError(error);
      console.error('Error submitting service name:', error);
      throw error;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    saveApplication(request);


    console.log('final obj=>', request)
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
    <div className="DocumentUpload">
      <Navbar reloadnavbar={false} />
      <div className="document-upload-container">
        <h1>Document Upload</h1>
        <form>
          <div className="document-box">
            <h2>Proof of Income</h2>
            <p>
              This could include recent pay stubs, a letter from your employer
              stating your income, or documentation of any government assistance you
              receive (such as unemployment benefits).
            </p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '1')
            }} />
          </div>
          <div className="document-box">
            <h2>Tax Returns</h2>
            <p>
              Copies of your recent tax returns or tax transcripts can show your
              income and any deductions or credits you qualify for.
            </p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '2')
            }} />
          </div>
          <div className="document-box">
            <h2>Bank Statements</h2>
            <p>
              Providing statements for your checking and savings accounts can help
              demonstrate your financial situation.
            </p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '3')
            }} />
          </div>
          <div className="document-box">
            <h2>Proof of Assets</h2>
            <p>
              If you own any property or other valuable assets, you may need to
              provide documentation of their value, such as property deeds or
              vehicle registrations.
            </p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '4')
            }} />
          </div>
          <div className="document-box">
            <h2>Proof of Expenses</h2>
            <p>
              Documents showing your monthly expenses, such as rent or mortgage
              payments, utilities, and medical bills, can help support your case.
            </p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '5')
            }} />
          </div>
          <div className="document-box">
            <h2>Identification</h2>
            <p>
              You'll likely need to provide some form of identification, such as a
              driver's license or passport, to verify your identity.
            </p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '6')
            }} />
          </div>
          <div className="document-box">
            <h2>Proof of Household Size</h2>
            <p>
              Documents showing the number of people in your household, such as
              birth certificates or marriage certificates, may be required.
            </p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '7')
            }} />
          </div>
          <div className="document-box">
            <h2>Other Documents to Support</h2>
            <p>Additional documents to support your case.</p>
            <input type="file" onChange={(e) => {
              handleFileUpload(e, '8')
            }} />
          </div>
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );

  




};

export default DocumentUploadPage;
