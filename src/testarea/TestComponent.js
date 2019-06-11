import React from "react";
import MaterialUi from "./MatirialUI";
import { carOfferType, carCategory } from "../app/data/CarAttributes";

const TestComponent = () => {
  const [selectValues, setSelectValues] = React.useState({
    age: "",
    car: ""
  });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  function handleChange(event) {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  console.log(selectValues);
  return (
    <div>
      <MaterialUi
        name="age"
        values={selectValues.age}
        something={carOfferType}
        handleChange={handleChange}
      />
      <MaterialUi
        name="car"
        values={selectValues.car}
        something={carCategory}
        handleChange={handleChange}
      />
    </div>
  );
};

export default TestComponent;
