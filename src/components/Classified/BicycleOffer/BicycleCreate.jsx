import React from "react";
import { connect } from 'react-redux'
import BicycleForm from "./BicycleForm";
import { createBicycle } from '../../../store/actions/bicycleActions'

const BicycleCreate = ({ createBicycle, history, bicycleObj }) => {

  const onSubmit = data => {
    createBicycle(data)
    history.push(`/bicycle/${bicycleObj.id}`)
  };

  const requiredInfos = (
    <span>
      The fields marked with * are required. <br /> Photographs are entered
      after you submit the details of the classified.
    </span>
  );

  return <BicycleForm onSubmit={onSubmit} requiredInfos={requiredInfos} />;
};

const mapStateToProps = ({ bicycleReducer }) => ({
  bicycleObj: bicycleReducer.bicycle
})

export default connect(mapStateToProps, { createBicycle })(BicycleCreate);
