import React from "react";
import "./dashboard.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const Totalincome = () => {
  return (
    <>
      <div style={{height:"84vh"}} className="main-div">
        <div className="container-3-third">
          <div>
            <div className="frist-div">
              <div className="General-Detail">
                <p className="box-header"> Income Detail</p>
                <p>Today ROI Income:-</p>
                <p>Total ROI Income:-</p>
                <p>Level Income:-</p>
                <p>Total Income:-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Totalincome;
