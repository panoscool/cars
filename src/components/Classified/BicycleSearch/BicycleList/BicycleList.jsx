import React from "react";
import BicycleListItem from "./BicycleListItem";
import BicycleGridItem from "./BicycleGridItem";

const ClassifiedList = ({ view, bicycles }) => {
  if (!view) {
    return (
      <div className="grid-view">
        {bicycles.map(bicycle => (
          <BicycleGridItem key={bicycle.id} {...bicycle} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {bicycles.map(bicycle => (
          <BicycleListItem key={bicycle.id} {...bicycle} />
        ))}
      </div>
    );
  }
};

export default ClassifiedList;
