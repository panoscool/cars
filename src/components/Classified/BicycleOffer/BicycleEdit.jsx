import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import BicycleForm from "./BicycleForm";
import { fetchBicycle, updateBicycle } from '../../../store/actions/bicycleActions';

const BicycleEdit = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const { bicycle } = useSelector(state => state.bicycleReducer);

  useEffect(() => {
    dispatch(fetchBicycle(params.id));
  }, [params.id, dispatch])

  const onSubmit = data => {
    dispatch(updateBicycle(params.id, data));
  };

  const currentValues = {
    variant: bicycle.variant,
    owners: bicycle.owners,
    price: bicycle.price,
    frameSize: bicycle.frameSize,
    rimSize: bicycle.rimSize,
    description: bicycle.description,
    youTube: bicycle.youTube,
    password: bicycle.password,
    userName: bicycle.userName,
    email: bicycle.email,
    phone1: bicycle.phone1,
    location: bicycle.location,
    year: bicycle.year
  };

  const currentCheckBoxState = {
    negotiable: bicycle.negotiable,
    womens: bicycle.womens,
    mens: bicycle.mens,
    dynamoLights: bicycle.dynamoLights,
    ledLights: bicycle.ledLights,
    shockAbsorber: bicycle.shockAbsorber,
    fenders: bicycle.fenders,
    singleSpeed: bicycle.singleSpeed,
    interiorSpeed: bicycle.interiorSpeed,
    exteriorSpeed: bicycle.exteriorSpeed,
    antique: bicycle.antique,
    basket: bicycle.basket,
    cargoRack: bicycle.cargoRack
  };

  return (
    <BicycleForm
      currentValues={currentValues}
      currentCheckBoxState={currentCheckBoxState}
      onSubmit={onSubmit}
    />
  );
};

export default BicycleEdit;
