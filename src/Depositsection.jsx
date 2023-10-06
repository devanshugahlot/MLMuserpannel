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

export default function Depositesection() {
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

        <ListItemText primary="Deposite section" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => navigate("/Alldeposite")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon >
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary=" ALL Deposite" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate("/Approveddeposite")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
           APPROVED DEPOSITE"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Penndingdeposite")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
            Pennding deposite"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Rejectdeposite")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
            Reject Deposite"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
