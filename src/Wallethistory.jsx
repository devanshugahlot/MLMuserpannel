import React, { useState } from "react";
import "./Alldeposite.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Wallethistory = () => {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [ displayData, setDisplayData ] = useState( "" );
  
  
  const showInputData = () => {
    setDisplayData(data);
    setDisplayData(data1);
  };
  return (
    <div className="AllDeposite">
      <h2 className="heading">Wallet History</h2>
      <div className="Table-div">
        <div className="input-first-row">
          <div className="input-first">
            <h1>Pick a start date:</h1>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="input-first">
            <h1>Pick a end date:</h1>
            <input
              value={data1}
              onChange={(e) => setData1(e.target.value)}
              type="date"
            />
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
          <button onClick={showInputData} className="Search">
            Search Now
          </button>
          <button className="Reset">
            Reset <RotateLeftIcon />
          </button>
        </div>

        <div
          style={{ height: "22vh", background: "#C3A177" }}
          className="table"
        >
          <table>
            <tr>
              <th>SR. No.</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Status</th>
              <th>Message</th>
              <th>Date</th>
              <th>Time</th>
            </tr>

            <tr>
              <td>No results found</td>
              <td>
                <p>{displayData}</p>
              </td>
              <td>{displayData}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallethistory;
