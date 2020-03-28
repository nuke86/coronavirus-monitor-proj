import React from "react";

const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'decimal',
  }).format(value);
  
const Summary = props => {
  return (
    <div>
     
      <p>
        Totale accertati:{" "}
        <span style={{ fontSize: "30px", color: "red" }}>
          {numberFormat(props.summary.cases)}
        </span>
      </p>
      <p>
        Totale decessi:{" "}
        <span style={{ fontSize: "30px"}}>
          {numberFormat(props.summary.deaths)}
        </span>
      </p>
      <p>
        Totale guariti:{" "}
        <span style={{ fontSize: "30px",  color: "#80ff00"  }}>
          {numberFormat(props.summary.recovered)}
        </span>
      </p>
    </div>
  );
};

export default Summary;
