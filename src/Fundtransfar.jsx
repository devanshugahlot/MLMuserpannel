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
import { useNavigate } from "react-router-dom";

export default function Fundtransfar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ paddingBlock: "0px" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ minWidth: "37px" }}>
          <SubtitlesIcon sx={{ color: "white" }} />
        </ListItemIcon>

        <ListItemText primary="Fund Transfar" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => navigate("/Fundtransfers")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Fund Transfar" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate("/Usertransfarhistory")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
            User Transfar history"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Admintransfarhistory")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              Admin Transfer History"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
