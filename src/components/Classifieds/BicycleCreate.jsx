import React, { useState } from "react";
// import cuid from "cuid";
import BicycleForm from "./BicycleForm";
import { bicycles } from "../../data/SampleData";

const BicycleCreate = props => {
  const [classifieds, setClassified] = useState(bicycles);

  const onSubmit = formValues => {
    // formValues.id = cuid();
    setClassified({ ...classifieds, formValues });
  };
  console.log(classifieds);
  const requiredInfos = (
    <span>
      The fields marked with * are required. <br /> Photographs are entered
      after you submit the details of the classified.
    </span>
  );

  return <BicycleForm onSubmit={onSubmit} requiredInfos={requiredInfos} />;
};

export default BicycleCreate;
