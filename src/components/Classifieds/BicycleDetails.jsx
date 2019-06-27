import React from "react";
import { bicycles } from "../../data/SampleData";

const BicycleDetails = props => {
  const bicycle = bicycles[props.match.params.id - 1];
  console.log(bicycle);
  return (
    <div>
      <h1>{bicycle.manufacturer}</h1>
    </div>
  );
};

export default BicycleDetails;
