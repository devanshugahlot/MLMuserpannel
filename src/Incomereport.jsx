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
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

export default function Incomereport() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ paddingBlock: "0px" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ minWidth: "37px" }}>
          <CurrencyRupeeIcon sx={{ color: "#D8AF72" }} />
        </ListItemIcon>

        <ListItemText primary="Income Report" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => navigate("/Totalincome")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary=" Total Income" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/Roiincome")} sx={{ pl: 4 }}>
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              Roi income"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Levelincome")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              Level income"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Rewardincome")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
            Reward Income"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
