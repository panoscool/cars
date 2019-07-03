import React from "react";
import BicycleForm from "./BicycleForm";

const BicycleEdit = props => {
  const onSubmit = formValues => {
    console.log(formValues);
  };

  return <BicycleForm onSubmit={onSubmit} />;
};

export default BicycleEdit;
