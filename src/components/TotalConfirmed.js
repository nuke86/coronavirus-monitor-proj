import React from "react";

const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'decimal',
  }).format(value);
  
const TotalConfirmed = props => {
  return (
    <li
      onClick={props.clicked}
      style={{
        cursor: "pointer",
        borderBottom: "1px solid white",
        padding: "5px"
      }}
    >
      {props.name}: <span style={{ color: "red" }}>{numberFormat(props.totalCases)}</span>
    </li>
  );
};

export default TotalConfirmed;
