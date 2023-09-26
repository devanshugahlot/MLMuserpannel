import React from "react";
import "./dashboard.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function Dashboard() {
  return (
    <>
      <div className="main-div">
        <div className="frist-container">
          <div className="heading-div">
            <h1 style={{ color: "white" }}>Welcome to</h1>
            <h1 style={{ color: "#C3A177" }}>T D Trading</h1>
          </div>
          <div className="button-div">
            <button className="Deposite-button">Deposit USTD</button>
          </div>
        </div>
        <div className="second-container">
          <div className="frist-box">
            <p
              style={{ color: "#B89561", fontSize: "25px", lineHeight: "50px" }}
            >
              Earning Capping
            </p>
            <div className="fristbox-data">
              <p>Your Investment</p>
              <p>$100</p>
            </div>
            <p
              style={{ color: "#B89561", fontSize: "30px", lineHeight: "80px" }}
            >
              $ 0 earned of $ 200
            </p>
            <div className="line"></div>
          </div>
          <div className="frist-box">
            <p
              style={{ color: "#B89561", fontSize: "25px", lineHeight: "50px" }}
            >
              Earning Capping
            </p>
            <div className="fristbox-data">
              <p>Your Investment</p>
              <p>$100</p>
            </div>
            <p
              style={{ color: "#B89561", fontSize: "30px", lineHeight: "80px" }}
            >
              $ 0 earned of $ 200
            </p>
            <div className="line"></div>
          </div>
        </div>

        <div className="container-3">
          <div>
            <div className="frist-div">
              <div className="General-Detail">
                <p className="box-header">General Detail</p>
                <p>User ID :</p>
                <p>Name:</p>
                <p>Sponsor ID:</p>
                <p>
                  Sponsor Name:
                  <span style={{ marginLeft: "110px", color: "white" }}>
                    Unlimited
                  </span>
                </p>
              </div>
            </div>
            <div className="second-div">
              <div className="Referal-Link">
                <p className="second-box-header">General Detail</p>
                <img
                  src="https://650a60c5de9fe87c0350db76--lovely-maamoul-ab5114.netlify.app/QRCode.png"
                  alt=""
                />
                <div className="Referal-Link2">
                  <p style={{ color: "white" }}>Referral Link</p>

                  <div className="copy-code">
                    <p style={{ color: "white", fontSize: "10px" }}>
                      https://deep.com/register?id=63be505e76bb22053eff15d7
                    </p>
                    <ContentCopyIcon sx={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hello">
            <div className="third-div">
              <div className="General-Detail">
                <p className="box-header">General Detail</p>
                <p>
                  User ID :{" "}
                  <span style={{ marginLeft: "110px", color: "white" }}>
                    NAN
                  </span>
                </p>
                <p>
                  Name:{" "}
                  <span style={{ marginLeft: "125px", color: "white" }}>
                    NAN
                  </span>
                </p>
                <p>
                  Sponsor ID:{" "}
                  <span style={{ marginLeft: "93px", color: "white" }}>
                    NAN
                  </span>
                </p>
              </div>
            </div>
            <div className="forth-div">
              <div className="General-Detail">
                <p className="box-header">General Detail</p>
                <p>User ID : </p>
              </div>
            </div>
          </div>
          <div>
            <div className="five-div">
              <div className="General-Detail">
                <p className="box-header">General Detail</p>
                <p>User ID :</p>
                <p>Name:</p>
                <p>Sponsor ID:</p>
                <p>Sponsor Name:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
