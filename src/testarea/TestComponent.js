import React, { useState } from "react";
import MaterialUi from "./MatirialUI";

const TestComponent = () => {
  const [values, setValues] = useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // function handleChange(event) {
  //   setValues(oldValues => ({
  //     ...oldValues,
  //     [event.target.name]: event.target.value
  //   }));
  // }

  console.log(values);
  return (
    <MaterialUi
      values={values}
      setValues={setValues}
      handleChange={handleChange}
    />
  );
};

export default TestComponent;
