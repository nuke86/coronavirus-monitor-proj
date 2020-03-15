import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import "../App.css";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import PeopleOutlined from "@material-ui/icons/PeopleOutline";
import Language from "@material-ui/icons/Language";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <div className={classes.root}>
        <Grid className={classes.footerText} container spacing={0}>
          <Grid item xs={12} sm={4}>
            <div className={classes.white}>
              <ul style={{ listStyle: "none", margin: 0 }}>
                <li>
                  <span
                    style={{
                      fontSize: "25px",
                      color: "#CCFFCC",
                      fontWeight: "bolder"
                    }}
                  >
                    Di cosa si tratta:
                  </span>
                </li>
                <li>
                  Una applicazione web creata con React, Node.js e Material-UI
                  che monitorizza gli ultimi aggiornamenti e news sulla pandemia da coronavirus.
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: "center" }}
                item
                xs={12}
              ></Grid>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: "flex-end" }}
                item
                xs={6}
              ></Grid>
              <Grid className={classes.flexContainer} item xs={6}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: "none", margin: 0 }}>
              <li>
                <span
                  style={{
                    fontSize: "25px",
                    color: "#CCFFCC",
                    fontWeight: "bolder"
                  }}
                >
                  Info:
                </span>
              </li>
              <li>
                <FreeBreakfast style={{ verticalAlign: "-5px" }} /> &nbsp; Dario Fadda
              </li>
              <li>
                <Email style={{ verticalAlign: "-5px" }} /> &nbsp;
                <a
                  style={{ color: "white" }}
                  href="mailto:dariofadda@tiscali.it"
                  target="_blank"
                >
                  dariofadda@tiscali.it
                </a>
              </li>
              <li>
                <PeopleOutlined style={{ verticalAlign: "-5px" }} /> &nbsp;
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/dariofadda86/"
                  target="_blank"
                >
                  www.linkedin.com/in/dariofadda86/
                </a>
              </li>
              <li>
                <Language style={{ verticalAlign: "-5px" }} /> &nbsp;
                <a
                  style={{ color: "white" }}
                  href="https://www.dariofadda.it"
                  target="_blank"
                >
                  www.dariofadda.it
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={"span"}
          >
            © {currentYear} Spcnet - Labs
          </Typography>
        </Grid>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    marginTop: 30,
    backgroundColor: "#000000",
    borderTop: "solid 3px #998643",
    paddingTop: "16px",
    overflowX: "hidden"
  },
  footerSections: {
    margin: "0 16px"
  },
  subFooter: {
    backgroundColor: "green",
    padding: "8px 16px 8px 16px",
    marginTop: "40px"
  },
  footerText: {
    color: "#fff",
    lineHeight: 1.5
  },
  invertedBtnDark: {
    color: "#fff",
    backgroundColor: "transparent",
    border: "2px #fff solid",
    boxShadow: "none",
    margin: "8px"
  },
  white: {
    color: "#ffffff"
  },
  flexContainer: {
    display: "flex"
  }
});

export default withStyles(styles)(Footer);
