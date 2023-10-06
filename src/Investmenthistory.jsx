import React from "react";
import "./Alldeposite.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Investmenthistory = () => {
  return (
    <div className="AllDeposite">
      <h2 className="heading">Investment History</h2>
      <div className="Table-div">
        <div className="input-first-row">
          <div className="input-first">
            <h1>Pick a start date:</h1>
            <input type="date" />
          </div>
          <div className="input-first">
            <h1>Pick a end date:</h1>
            <input type="date" />
          </div>
        </div>

        <div className="Second-input">
          <h1>Search By status</h1>
          <select>
            <option value="Select">---Select---</option>
            <option>Pending</option>
            <option>Reject</option>
            <option>Apporve</option>
          </select>
        </div>
        <div className="center-button">
          <button className="Search">Search </button>
          <button className="Reset">
            Reset <RotateLeftIcon />{" "}
          </button>
          {/* <div className="searchnow"></div> */}
        </div>

        <div className="Four-button">
          <button className="Radius-button1">PDF</button>
          <button className="">Excel</button>
          <button className="">CSV</button>
          <button className="Radius-button2">Print</button>
        </div>
        <div
          style={{
            height: "30vh",
            background: "#C3A177",
            padding: "20px 10px ",
          }}
          className="table"
        >
          <div
            className="table-button"
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button className="Transfer" style={{ color: "white" }}>
              Transfer History
            </button>
            <button className="Recieve" style={{ color: "white" }}>
              Recieve History
            </button>
          </div>
          <table style={{ marginTop: "40px" }}>
            <tr>
              <th>SR. No.</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Status</th>
              <th>Message</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Investmenthistory;
