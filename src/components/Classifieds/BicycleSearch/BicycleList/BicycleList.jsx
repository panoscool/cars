import React from "react";
import BicycleListItem from "./BicycleListItem";
import { bicycles } from "../../../../data/SampleData";

const ClassifiedList = props => (
  <div>
    {bicycles.map(bicycle => (
      <BicycleListItem
        key={bicycle.id}
        id={bicycle.id}
        title={bicycle.manufacturer}
        price={bicycle.price}
        color={bicycle.color}
        category={bicycle.category}
        purchased={bicycle.purchased}
        gears={bicycle.gears}
        img={bicycle.img}
      />
    ))}
  </div>
);

export default ClassifiedList;
