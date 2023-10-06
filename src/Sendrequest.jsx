import React, { useState } from "react";
import "./Alldeposite.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Sendrequest = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handlereset = (reset) => {
    reset.preventDefault();
    setInput1("");
    setInput2("");
  };

  return (
    <div style={{ height: "100vh" }} className="AllDeposite">
      <h2 className="heading">Withdraw Amount (Available Balance : 0)</h2>
      <div style={{ height: "50vh" }} className="Table-div">
        <div className="input-first-row">
          <div className="input-first">
            <h1>Pick a start date:</h1>
            <input
              style={{ width: "500px" }}
              type=""
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <div className="input-first">
            <h1>Pick a end date:</h1>
            <input
              className="second-date-input"
              style={{ width: "500px" }}
              type="text"
              placeholder="enter correct wallet address here"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
        </div>

        <div className="center-button">
          <button className="Search">Search Now</button>
          <button onClick={handlereset} className="Reset">
            Reset <RotateLeftIcon />
          </button>
          {/* <div className="searchnow"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Sendrequest;
