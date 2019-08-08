import React from "react";
import { connect } from 'react-redux'
import BicycleForm from "./BicycleForm";
import { createBicycle } from '../../../store/actions/bicycleActions'

const BicycleCreate = ({ createBicycle }) => {

  const onSubmit = data => {
    createBicycle(data)
  };

  const requiredInfos = (
    <span>
      The fields marked with * are required. <br /> Photographs are entered
      after you submit the details of the classified.
    </span>
  );

  return <BicycleForm onSubmit={onSubmit} requiredInfos={requiredInfos} />;
};

export default connect(null, { createBicycle })(BicycleCreate);
