import "./App.css";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Alldeposite from "./Alldeposite";
import Approveddeposite from "./Approveddeposite";
import Penndingdeposite from "./Penndingdeposite";
import Rejectdeposite from "./Rejectdeposite";
import Investments from "./Investments";
import Investmenthistory from "./Investmenthistory";
import Admininvestmenthistory from "./Admininvestmenthistory";
import Fundtransfers from "./Fundtransfers";
import Usertransfarhistory from "./Usertransfarhistory";
import Admintransfarhistory from "./Admintransfarhistory";
import Alluser from "./Alluser";
import Activeuser from "./Activeuser";
import Inactiveusers from "./Inactiveusers";
import Blockuser from "./Blockuser";
import Mydirectteam from "./Mydirectteam";
import Totalincome from "./Totalincome";
import Roiincome from "./Roiincome";
import Levelincome from "./Levelincome";
import Rewardincome from "./Rewardincome";
import Sendrequest from "./Sendrequest";
import Wallethistory from "./Wallethistory";
import Transction from "./Transction";
import ResponsiveDrawer from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Outlet/Layout";
import Authlayout from "./Outlet/Authlayout";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ResponsiveDrawer />   */}

        <Routes>
          <Route exact path={`/*`} element={<Authlayout />}>
            <Route path="Login" element={<Login />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="Login" element={<Logout />} />
          </Route>
          <Route exact path="/" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Alldeposite" element={<Alldeposite />} />
            <Route path="Approveddeposite" element={<Approveddeposite />} />
            <Route path="Penndingdeposite" element={<Penndingdeposite />} />
            <Route path="Rejectdeposite" element={<Rejectdeposite />} />
            <Route path="Investments" element={<Investments />} />
            <Route path="Investmenthistory" element={<Investmenthistory />} />
            <Route
              path="Admininvestmenthistory"
              element={<Admininvestmenthistory />}
            />
            <Route path="Fundtransfers" element={<Fundtransfers />} />
            <Route
              path="Usertransfarhistory"
              element={<Usertransfarhistory />}
            />
            <Route
              path="Admintransfarhistory"
              element={<Admintransfarhistory />}
            />
            <Route path="Alluser" element={<Alluser />} />
            <Route path="Activeuser" element={<Activeuser />} />
            <Route path="Inactiveusers" element={<Inactiveusers />} />
            <Route path="Blockuser" element={<Blockuser />} />
            <Route path="Mydirectteam" element={<Mydirectteam />} />
            <Route path="Totalincome" element={<Totalincome />} />
            <Route path="Roiincome" element={<Roiincome />} />
            <Route path="Levelincome" element={<Levelincome />} />
            <Route path="Rewardincome" element={<Rewardincome />} />
            <Route path="Sendrequest" element={<Sendrequest />} />
            <Route path="Wallethistory" element={<Wallethistory />} />
            <Route path="Transction" element={<Transction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
