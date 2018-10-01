import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const style = {
  background: "#512da8"
};

const Footer = () => {
  return (
    <div>
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="caption" color="inherit">
            Michael Dwyer and JJ Clements &copy; 2018
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
