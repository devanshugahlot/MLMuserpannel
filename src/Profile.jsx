import React, { useState } from "react";
import "./profile.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const Profile = () => {
  const [data, setData] = useState(true);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="main-container-div">
      {data && (
        <div className="container-all-data">
          <h2 style={{ paddingLeft: "45px", paddingTop: "20px" }}>
            My Profile
          </h2>
          <div style={{ marginTop: "70px" }} className="container-inner-frist">
            <div className="buttons-div">
              <button
                onClick={() => {
                  setData(true);
                  setStatus(false);
                  setShow(false);
                }}
              >
                personal data
              </button>
              <button
                onClick={() => {
                  setStatus(true);
                  setData(false);
                  setShow(false);
                }}
              >
                Referral Details
              </button>
              <button
                onClick={() => {
                  setShow(true);
                  setStatus(false);
                  setData(false);
                }}
              >
                Change Password
              </button>
            </div>
            <div className="inner-container-div">
              <div className="frist-data">
                <p>Personal Details</p>
                <div className="inputs">
                  <div className="input-div">
                    <h3>User ID</h3>
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <h3>Expiry Date</h3>
                    <input type="text" placeholder="Unlimited" />
                  </div>
                  <div className="input-div">
                    <h3>Full Name</h3>
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <h3>Email</h3>
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <h3>Mobile Number</h3>
                    <input type="text" />
                  </div>
                </div>
                <button>Edit Name</button>
                <div className="input-div"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {status && (
        <div className="container-all-data-1">
          <h2 style={{ paddingLeft: "45px", paddingTop: "20px" }}>
            My Profile
          </h2>
          <div style={{ marginTop: "70px" }} className="container-inner-frist">
            <div className="buttons-div">
              <button
                onClick={() => {
                  setData(true);
                  setStatus(false);
                  setShow(false);
                }}
              >
                personal data
              </button>
              <button
                onClick={() => {
                  setStatus(true);
                  setData(false);
                  setShow(false);
                }}
              >
                Referral Details
              </button>
              <button
                onClick={() => {
                  setShow(true);
                  setStatus(false);
                  setData(false);
                }}
              >
                Change Password
              </button>
            </div>
            <div className="inner-container-div-1">
              <div className="Referral-div-link">
                <p style={{ color: "white" }}>Referral Link</p>
              </div>
             
              <div className="copy-div-box">
                <p>https://deep.com/register?id=63be505e76bb22053eff15d7</p>
                <div className="icon-copy">
                  <ContentCopyIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {show && (
        <div className="container-all-data-2">
          <h2 style={{ paddingLeft: "45px", paddingTop: "20px" }}>
            My Profile
          </h2>
          <div style={{ marginTop: "70px" }} className="container-inner-frist">
            <div className="buttons-div">
              <button
                onClick={() => {
                  setData(true);
                  setStatus(false);
                  setShow(false);
                }}
              >
                personal data
              </button>
              <button
                onClick={() => {
                  setStatus(true);
                  setData(false);
                  setShow(false);
                }}
              >
                Referral Details
              </button>
              <button
                onClick={() => {
                  setShow(true);
                  setStatus(false);
                  setData(false);
                }}
              >
                Change Password
              </button>
            </div>
            <div className="inner-container-div-2">
              <div className="three-input-div">
                <div className="h-heading">
                  <h2>Change Password</h2>
                </div>
                <div className="input-div-one">
                  <h3>Old Password:</h3>
                  <input type="text" placeholder="Old Password" />
                </div>
                <div className="input-div-two">
                  <h3>New Password:</h3>
                  <input type="text" placeholder="New Password" />
                </div>
                <div className="input-div-three">
                  <h3>Confirm Password:</h3>
                  <input type="text" placeholder="Confirm Password" />
                </div>
                <div className="button-div-four">
                  <button>submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
