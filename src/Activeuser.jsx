import React from "react";
import "./Alldeposite.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Activeuser = () => {
  return (
    <div className="AllDeposite">
      <h2 className="heading">Active Users</h2>
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
          <button className="Search">Search Now</button>
          <button className="Reset">
            Reset <RotateLeftIcon />
          </button>
          {/* <div className="searchnow"></div> */}
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
              <td></td>
              <td></td>
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

export default Activeuser;
