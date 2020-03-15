import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Coronavirus - COVID-19 - Monitor live situazione
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default header;
