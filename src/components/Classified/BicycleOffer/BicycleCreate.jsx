import React from "react";
import { useDispatch } from 'react-redux'
import BicycleForm from "./BicycleForm";
import { createBicycle } from '../../../store/actions/bicycleActions'

const BicycleCreate = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(createBicycle(data));
  };

  const requiredInfos = (
    <span>
      The fields marked with * are required. <br /> Photographs are entered
      after you submit the details of the classified.
    </span>
  );

  return <BicycleForm onSubmit={onSubmit} requiredInfos={requiredInfos} />;
};

export default BicycleCreate;
