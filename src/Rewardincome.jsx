import React from "react";
import "./dashboard.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const Rewardincome = () => {
  return (
    <>
      <div style={{height:"84vh"}} className="main-div">
        <div className="second-container-second">
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
              $ 0 earned of $ 6000
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rewardincome;
