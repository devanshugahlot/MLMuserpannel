import React from "react";
import "./Alldeposite.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Blockuser = () => {
  return (
    <div className="AllDeposite">
      <h2 className="heading">Block Users</h2>
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

        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="flex-div"
        >
          <div>
            <h1>Search By status</h1>
            <select>
              <option value="Select">---Select---</option>
              <option>Pending</option>
              <option>Reject</option>
              <option>Apporve</option>
            </select>
          </div>
          <div className="input-first">
            <h1>Pick a end date:</h1>
            <input type="date" />
          </div>
        </div>

        <div className="center-button">
          <button className="Search">Search Now</button>
          <button className="Reset">
            Reset <RotateLeftIcon />
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
          style={{ height: "22vh", background: "#C3A177" }}
          className="table"
        >
          <table>
            <tr>
              <th>SR. No.</th>
              <th>User Name</th>
              <th>User ID</th>
              <th>Mobile Number</th>
              <th>Email ID </th>
              <th>Direct Member </th>
              <th>Total Member </th>
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

export default Blockuser;
