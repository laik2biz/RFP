import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { FcHome } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { useState } from "react";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const geEmail = "geemployee@ge.com";
  const gePassword = "ge123";

  const handleLogin = () => {
    if (email === "" && password === "") {
      return alert("Please enter a valid email and password");
    } else if (email === geEmail && password === gePassword) {
      return navigate("/About");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <div className="tabs">
        <br></br>
        <button
          onClick={() => {
            navigate("/Home");
          }}
        >
          <span>{<FcHome size={40} />}</span>
        </button>
        &nbsp;
        <button
          onClick={() => {
            navigate("/Login");
          }}
        >
          <span>{<FcViewDetails size={40} />}</span>
        </button>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <div className="form-header">Get Started.</div>
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={handleEmail}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={handlePassword}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                onClick={handleLogin}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
