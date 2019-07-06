import React from "react";
import BicycleForm from "./BicycleForm";

const BicycleEdit = props => {
  const onSubmit = formValues => {
    console.log(formValues);
  };

  const inputValues = {
    variant: "",
    owners: "",
    price: "",
    frameSize: "",
    rimSize: "",
    description: "",
    youTube: "",
    password: "",
    userName: "",
    email: "",
    phone1: "",
    location: ""
  };

  const selectedValues = {
    offer: "",
    category: "",
    manufacturer: "",
    condition: "",
    frameType: "",
    gears: "",
    color: "",
    brakes: "",
    duration: "",
    exchange: ""
  };

  const defaultCheckBoxState = {
    negotiable: false,
    womens: true,
    mens: true,
    dynamoLights: true,
    ledLights: true,
    shockAbsorber: true,
    fenders: true,
    singleSpeed: true,
    interiorSpeed: true,
    exteriorSpeed: true,
    antique: false,
    basket: false,
    cargoRack: false
  };

  return (
    <BicycleForm
      selectedValues={selectedValues}
      inputValues={inputValues}
      defaultCheckBoxState={defaultCheckBoxState}
      onSubmit={onSubmit}
    />
  );
};

export default BicycleEdit;
