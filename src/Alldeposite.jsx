import React from "react";
import "./Alldeposite.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Alldeposite = () => {
  return (
    <div className="main-container">
      <h2 style={{ color: "white" }}>All Deposite</h2>
      <div className="alldeposite"></div>
      <div className="table-div">
        <div className="input-frist-row">
          <div className="input-div1">
            <h3>Pick a start date:</h3>
            <input className="date" type="date" />
          </div>
          <div className="input-div1">
            <h3>Pick a start date:</h3>
            <input className="date" type="date" />
          </div>
        </div>
        <div className="option-div">
          <h2>Search By status</h2>
          <select className="select">
            <option>---select---</option>
            <option>pending</option>
            <option>Reject</option>
            <option>approve</option>
          </select>
        </div>
        <div className="buttons-div">
          <button className="search-button">Search Now</button>
          <button className="reset-button">
            Reset <RotateLeftIcon />
          </button>
        </div>
        <div className="four-button">
          <button className="inner-button">PDF</button>
          <button className="inner-button">EXCEL</button>
          <button className="inner-button">CSV</button>
          <button className="inner-button">Print</button>
        </div>

        <div className="main-table">
          <table className="tables">
            <tr>
              <th>SR.No.</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Status</th>
              <th>Massage</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>1</td>
              <td>100</td>
              <td>image1.jpg</td>
              <td>Active</td>
              <td>Sample Massage 1</td>
              <td>9/18/2023</td>
              <td>4:00:00 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>100</td>
              <td>image1.jpg</td>
              <td>Active</td>
              <td>Sample Massage 1</td>
              <td>9/18/2023</td>
              <td>4:00:00 PM</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alldeposite;
