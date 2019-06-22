import React from "react";
import ClassifiedListItem from "./ClassifiedListItem";
import { bicycles } from "../../../app/data/SampleData";

const ClassifiedList = props => (
  <div>
    {bicycles.map(bicycle => (
      <ClassifiedListItem
        key={bicycle.id}
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
