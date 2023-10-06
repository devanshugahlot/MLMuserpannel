import React from "react";
import "./investment.css";
import FormDialog from "./Dialogbox";
const Investments = () => {
  return (
    <div className="all-section">
      <div className="investment">
        <h1 style={{ color: "white" }}>Investment</h1>
      </div>
      <div className="input-divs">
        <div className="divs">
          <h3 style={{ color: "white" }}>Available Balance</h3>
          <input className="inputs" type="" />
        </div>
        <div className="divs2">
          <h3 style={{ color: "white" }}>Wallet Address/Username</h3>
          <input
            className="inputs"
            type="text"
            placeholder="enter your wallet address and user name"
          />
        </div>
        <div className="divs3">
          <h3 style={{ color: "white" }}>Amount $</h3>
          <input className="inputs" type="number" />
        </div>
        <div className="Process-Request-button">
           
            <FormDialog />
          
        </div>
      </div>
    </div>
  );
};

export default Investments;
