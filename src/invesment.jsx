import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import PeopleIcon from "@mui/icons-material/People";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import StarBorder from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

export default function Investment() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ paddingBlock: "0px" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ minWidth: "37px" }}>
          <KeyboardBackspaceIcon sx={{ color: "white" }} />
        </ListItemIcon>

        <ListItemText primary="Investment" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => navigate("/Investments")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Investments" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate("/Investmenthistory")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
            investment history"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Admininvestmenthistory")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              Admin Investment History"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
