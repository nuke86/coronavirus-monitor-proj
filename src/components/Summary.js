import React from "react";

const Summary = props => {
  return (
    <div>
     
      <p>
        Totale accertati:{" "}
        <span style={{ fontSize: "30px", color: "red" }}>
          {props.summary.cases}
        </span>
      </p>
      <p>
        Totale decessi:{" "}
        <span style={{ fontSize: "30px"}}>
          {props.summary.deaths}
        </span>
      </p>
      <p>
        Totale ospedalizzati:{" "}
        <span style={{ fontSize: "30px",  color: "#80ff00"  }}>
          {props.summary.recovered}
        </span>
      </p>
    </div>
  );
};

export default Summary;
