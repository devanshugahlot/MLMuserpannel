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

export default function Usersection() {
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

        <ListItemText primary="User section" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("/Alluser")} sx={{ pl: 4 }}>
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All User" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate("/Activeuser")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              Active users"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Inactiveusers")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              In active users"
            />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/Blockuser")} sx={{ pl: 4 }}>
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              Block user"
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/Mydirectteam")}
            sx={{ pl: 4 }}
          >
            <PeopleIcon />
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary="
              Mydirect team"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
