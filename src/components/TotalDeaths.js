import React from "react";

const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'decimal',
  }).format(value);
  
const TotalDeaths = props => {
  return (
    <li style={{ borderBottom: "1px solid white", padding: "5px" }}>
      {props.name}: {numberFormat(props.totalDeaths)}
    </li>
  );
};

export default TotalDeaths;
