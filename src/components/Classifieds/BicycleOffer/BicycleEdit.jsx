import React from "react";
import BicycleForm from "./BicycleForm";
import { bicycles } from "../../../data/SampleData";

const BicycleEdit = props => {
  const bicycleObj = bicycles[props.match.params.id - 1];

  console.log(bicycleObj);

  const onSubmit = formValues => {
    console.log(formValues);
  };

  const currentInputValues = {
    variant: bicycleObj.variant,
    owners: bicycleObj.owners,
    price: bicycleObj.price,
    frameSize: bicycleObj.frameSize,
    rimSize: bicycleObj.rimSize,
    description: bicycleObj.description,
    youTube: bicycleObj.youTube,
    password: bicycleObj.password,
    userName: bicycleObj.userName,
    email: bicycleObj.email,
    phone1: bicycleObj.phone1,
    location: bicycleObj.location
  };

  const currentSelectedValues = {
    offer: bicycleObj.offer,
    category: bicycleObj.category,
    manufacturer: bicycleObj.manufacturer,
    condition: bicycleObj.condition,
    frameType: bicycleObj.frameType,
    gears: bicycleObj.gears,
    color: bicycleObj.color,
    brakes: bicycleObj.brakes,
    duration: bicycleObj.duration,
    exchange: bicycleObj.exchange
  };

  const currentCheckBoxState = {
    negotiable: bicycleObj.negotiable,
    womens: bicycleObj.womens,
    mens: bicycleObj.mens,
    dynamoLights: bicycleObj.dynamoLights,
    ledLights: bicycleObj.ledLights,
    shockAbsorber: bicycleObj.shockAbsorber,
    fenders: bicycleObj.fenders,
    singleSpeed: bicycleObj.singleSpeed,
    interiorSpeed: bicycleObj.interiorSpeed,
    exteriorSpeed: bicycleObj.exteriorSpeed,
    antique: bicycleObj.antique,
    basket: bicycleObj.basket,
    cargoRack: bicycleObj.cargoRack
  };

  const currentSelectedDate = {
    purchasedDate: bicycleObj.purchasedDate
  };

  return (
    <BicycleForm
      currentInputValues={currentInputValues}
      currentSelectedValues={currentSelectedValues}
      currentCheckBoxState={currentCheckBoxState}
      currentSelectedDate={currentSelectedDate}
      onSubmit={onSubmit}
    />
  );
};

export default BicycleEdit;
