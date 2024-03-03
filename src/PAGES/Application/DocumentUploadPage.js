import React from "react";
import "./DocumentUploadPage.css";
import { Link } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";

const DocumentUploadPage = () => {
  return (
    <div className="DocumentUpload">
      <Navbar reloadnavbar={false}/>
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
        <input type="file" />
      </div>
      <div className="document-box">
        <h2>Tax Returns</h2>
        <p>
          Copies of your recent tax returns or tax transcripts can show your
          income and any deductions or credits you qualify for.
        </p>
        <input type="file" />
      </div>
      <div className="document-box">
        <h2>Bank Statements</h2>
        <p>
          Providing statements for your checking and savings accounts can help
          demonstrate your financial situation.
        </p>
        <input type="file" />
      </div>
      <div className="document-box">
        <h2>Proof of Assets</h2>
        <p>
          If you own any property or other valuable assets, you may need to
          provide documentation of their value, such as property deeds or
          vehicle registrations.
        </p>
        <input type="file" />
      </div>
      <div className="document-box">
        <h2>Proof of Expenses</h2>
        <p>
          Documents showing your monthly expenses, such as rent or mortgage
          payments, utilities, and medical bills, can help support your case.
        </p>
        <input type="file" />
      </div>
      <div className="document-box">
        <h2>Identification</h2>
        <p>
          You'll likely need to provide some form of identification, such as a
          driver's license or passport, to verify your identity.
        </p>
        <input type="file" />
      </div>
      <div className="document-box">
        <h2>Proof of Household Size</h2>
        <p>
          Documents showing the number of people in your household, such as
          birth certificates or marriage certificates, may be required.
        </p>
        <input type="file" />
      </div>
      <div className="document-box">
        <h2>Other Documents to Support</h2>
        <p>Additional documents to support your case.</p>
        <input type="file" />
      </div>
      <button className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default DocumentUploadPage;
