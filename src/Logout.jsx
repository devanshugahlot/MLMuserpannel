import React from "react";
import "./logout.css";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-data">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="all-data">
          <div className="heading-container">
            <div className="frist-heading">
              <h1>
                Join the <br /> T A Trading
              </h1>
            </div>
            <div className="list-div">
              <ul>
                <li>1. Signup</li>
                <li>2. Email verification</li>
                <li>3. Login</li>
                <li>4. Get purchase details via email</li>
                <li>5. See transaction history via dashboard</li>
              </ul>
            </div>
          </div>
          <div className="sign-up-div">
            <div style={{ textAlign: "center" }}>
              <h2>Sign Up</h2>
            </div>
            <div className="frist-div-input">
              <input type="text" placeholder="sponsor id" />
              <input type="text" placeholder="sponsor name" />
            </div>
            <div className="input-button-div">
              <input type="text" placeholder="Email" />
              <button>veryify</button>
            </div>
            <div className="second-div-input">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="User name" />
            </div>
            <div className="third-div-input">
              <input type="text" placeholder="phone number" />
            </div>
            <label htmlFor="100">
              <div className="chek-box">
                <input id="100" type="checkbox" /> I agree all statements in
                <a href="">Terms of service</a>
              </div>
            </label>
            <div className="sign-up-button">
              <button>sign up</button>
            </div>
            <div className="last-div">
              <p>
                Already have an account?{" "}
                <a onClick={() => navigate("/Login")} href="">
                  Login Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
