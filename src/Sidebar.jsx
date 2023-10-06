import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import "./sidebar.css";
import Depositesection from "./Depositsection";
import Investment from "./invesment";
import Fundtransfar from "./Fundtransfar";
import Usersection from "./Usersection";
import Incomereport from "./Incomereport";
import Withdraw from "./Withdrowrequest";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import MenuAppBar from "./Avatar";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ background: "black" }} />
      {/* <Divider /> */}
      <List
        sx={{
          color: "white",
          background: "#161616",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["Dashboard"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon sx={{ minWidth: "37px" }}>
                <AvTimerIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          color: "white",
          background: "#161616",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["profile "].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate("/Profile")}>
              <ListItemIcon sx={{ minWidth: "37px" }}>
                <ManageAccountsIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Depositesection />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Investment />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Fundtransfar />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Usersection />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Incomereport />
      </List>
      <List
        sx={{
          color: "white",
          background: "black",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        <Withdraw />
      </List>
      <List
        sx={{
          color: "white",
          background: "#161616",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["transction"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate("/Transction")}>
              <ListItemIcon sx={{ minWidth: "37px" }}>
                <MoveUpIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Toolbar sx={{ background: "#2E2A2A" }} />
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid white",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              display: "flex",
            }}
          >
            {/* <div className="container"> */}
            <div style={{ display: "flex" }} className="lefticon">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="fristicon"
              >
                <h5>Main Wallet</h5>
                <div className="frist-wallet">
                  <AccountBalanceWalletIcon
                    style={{ color: "rgb(216, 175, 114)" }}
                  />
                  <span>10</span>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="secondicon"
              >
                <h5>Main Wallet</h5>
                <div className="second-wallet">
                  <AccountBalanceWalletIcon
                    style={{ color: "rgb(216, 175, 114)" }}
                  />
                  <span>100</span>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Typography>
          <div className="right-icon">
            <MenuAppBar />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // backgroundColor: "#272727",
          height: "100%",
          // width: "100%",
          background: "#272727",
        }}
      >
        <Toolbar />

        {/* <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Alldeposite" element={<Alldeposite />} />
          <Route path="/Approveddeposite" element={<Approveddeposite />} />
          <Route path="/Penndingdeposite" element={<Penndingdeposite />} />
          <Route path="/Rejectdeposite" element={<Rejectdeposite />} />
          <Route path="/Investments" element={<Investments />} />
          <Route path="/Investmenthistory" element={<Investmenthistory />} />
          <Route
            path="/Admininvestmenthistory"
            element={<Admininvestmenthistory />}
          />
          <Route path="/Fundtransfers" element={<Fundtransfers />} />
          <Route
            path="/Usertransfarhistory"
            element={<Usertransfarhistory />}
          />
          <Route
            path="/Admintransfarhistory"
            element={<Admintransfarhistory />}
          />
          <Route path="/Alluser" element={<Alluser />} />
          <Route path="/Activeuser" element={<Activeuser />} />
          <Route path="/Inactiveusers" element={<Inactiveusers />} />
          <Route path="/Blockuser" element={<Blockuser />} />
          <Route path="/Mydirectteam" element={<Mydirectteam />} />
          <Route path="/Totalincome" element={<Totalincome />} />
          <Route path="/Roiincome" element={<Roiincome />} />
          <Route path="/Levelincome" element={<Levelincome />} />
          <Route path="/Rewardincome" element={<Rewardincome />} />
          <Route path="/Sendrequest" element={<Sendrequest />} />
          <Route path="/Wallethistory" element={<Wallethistory />} />
          <Route path="/Transction" element={<Transction />} />
        </Routes> */}

        {props.outlet}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
