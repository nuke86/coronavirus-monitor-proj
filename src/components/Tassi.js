import React from "react";

const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'decimal',
  }).format(value);
  
  const percentFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'percent',
  }).format(value);
  
const Tassi = props => {
	var tassoMortiTot = props.tassi.deaths / props.tassi.cases,
		casiChiusi = props.tassi.cases - props.tassi.activeCases,
		tassoMortiChiusi = props.tassi.deaths / casiChiusi,
		casiNonGravi = props.tassi.activeCases - props.tassi.seriousCases,
		tassoCritici = props.tassi.seriousCases / props.tassi.activeCases,
		tassoNonGravi = casiNonGravi / props.tassi.activeCases,
		tassoGuariti = props.tassi.recovered / casiChiusi;
  return (
    <div>
     
      <p>
        Mortalità su {" "} ({numberFormat(props.tassi.cases)}){" "} totali:{" "}
        <span style={{ fontSize: "30px"}}>
          {percentFormat(tassoMortiTot)}
        </span>
      <br />
        Mortalità su {" "} ({numberFormat(casiChiusi)}){" "} casi chiusi:
        <span style={{ fontSize: "30px", color: "red" }}>
          {percentFormat(tassoMortiChiusi)}
        </span><br />
		di cui <span style={{ fontSize: "20px", color: "red" }}>{numberFormat(props.tassi.deaths)}</span> deceduti <br />
		e <span style={{ fontSize: "20px", color: "#80ff00" }}>{numberFormat(props.tassi.recovered)}</span> guariti ({percentFormat(tassoGuariti)})
      <br />
        Casi attualmente attivi:{" "}
        <span style={{ fontSize: "30px",  color: "#80ff00"  }}>
          {numberFormat(props.tassi.activeCases)}
        </span><br />
		di cui <span style={{ fontSize: "20px", color: "red" }}>{numberFormat(props.tassi.seriousCases)}</span> critici ({percentFormat(tassoCritici)})<br />
		e <span style={{ fontSize: "20px", color: "#80ff00" }}>{numberFormat(casiNonGravi)}</span> non gravi ({percentFormat(tassoNonGravi)})
      </p>
    </div>
  );
};

export default Tassi;