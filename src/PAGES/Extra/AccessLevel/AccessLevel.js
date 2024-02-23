import React from "react";
import { Link } from "react-router-dom";
import "./AccessLevel.css";

const Login = () => {
  return (
    <div className="authpage">
      <div className="authcont">
        <img
          src="https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="AccessLevel"
        />

        <div className="authform">
          <h1>Are you a user or an authority?</h1>

          <Link to="/" className="stylenone">
            <button>User</button>
          </Link>

          <h2 className="or">OR</h2>

          <Link to="/" className="stylenone">
            <button>Authorty</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
