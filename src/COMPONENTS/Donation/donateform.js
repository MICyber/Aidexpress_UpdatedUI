import React from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import "./DonateForm.css";

const DonateForm = () => {
  return (
    <div className="donateform" id="donate_grid">
        <Navbar reloadnavbar={false}/>
      <h1>Meka hadapn yakooo</h1>
    </div>
  );
};
export default DonateForm;
