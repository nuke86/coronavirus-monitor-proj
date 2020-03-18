import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import classes from "./DialogBox.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  return (
    <div>
      <Dialog
        open={props.test}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          className={classes.DialogTitle}
          id="alert-dialog-slide-title"
        >
          {props.data.country} coronavirus, statistiche complete:
        </DialogTitle>
        <DialogContent className={classes.DialogContent}>
          <DialogContentText
            color="inherit"
            id="alert-dialog-slide-description"
          >
            <span>
              <strong>Numero dei casi identificati: </strong>
              {props.data.totalCases}
            </span>
            <br></br>
            <span>
              <strong>Numero dei nuovi casi: </strong>
              {props.data.newCases}
            </span>
            <br></br>
            <span>
              <strong>Numero dei decessi: </strong>
              {props.data.totalDeaths}
            </span>

            <br></br>
            <span>
              <strong>Numero dei nuovi decessi: </strong>
              {props.data.newDeaths}
            </span>
            <br></br>
            <span>
              <strong>Totale ospedalizzati: </strong>
              {props.data.totalRecovered}
            </span>
            <br></br>
            <span>
              <strong>Casi attivi: </strong>
              {props.data.activeCases}
            </span>
            <br></br>
            <span>
              <strong>Casi con complicazioni: </strong>
              {props.data.seriousCases}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.DialogContent}>
          <Button onClick={props.close} color="secondary">
            Chiudi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
