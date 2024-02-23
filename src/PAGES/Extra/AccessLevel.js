import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar"; 
import "./AccessLevel.css";


const AccessLevel = () => {
  return (
    <div className="authpage">
      <Navbar reloadnavbar={false} />
      <div className="authcont">
        <img
          src="https://images.unsplash.com/photo-1548285788-6b5c92110fee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AccessLevel"
        />
        <div className="authform">
          <h1>Are you a user or an authority?</h1>
          <Link to="/LoginUser" className="stylenone">
            <button>User</button>
          </Link>
          <h2 className="or">OR</h2>
          <Link to="/OfficerLogin" className="stylenone">
            <button>Authority</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessLevel;
