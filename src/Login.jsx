import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="all">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="main-all-data-box">
        <div className="user-pannel">
          <div className="user-pannel-heading">
            <h3>User Panel</h3>
          </div>
          <div className="userpannel-input-1">
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="gap"></div>
          <div className="userpannel-input-1">
            <input type="text" placeholder="Enter Password" />
          </div>

          <div className="pannel-p">
            <p>Forget Password</p>
          </div>
          <div className="pannel-button">
            <button>submit</button>
          </div>
          <div className="pannel-last-p">
            <p>
              Don't have an account?{" "}
              <a onClick={() => navigate("/Logout")} href="">
                SignUp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
