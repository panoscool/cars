import React, { useEffect } from "react";
import { connect } from 'react-redux'
import BicycleForm from "./BicycleForm";
import { fetchBicycle, updateBicycle } from '../../../store/actions/bicycleActions'

const BicycleEdit = props => {
  const { fetchBicycle, updateBicycle, history, match: { params }, bicycleObj } = props

  useEffect(() => {
    fetchBicycle(params.id)
  }, [params.id, fetchBicycle])

  const onSubmit = data => {
    updateBicycle(params.id, data);
    history.push(`/bicycle/${bicycleObj.id}`)
  };

  const currentValues = {
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
    location: bicycleObj.location,
    year: bicycleObj.year
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

  return (
    <BicycleForm
      currentValues={currentValues}
      currentCheckBoxState={currentCheckBoxState}
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = ({ bicycleReducer }) => ({
  bicycleObj: bicycleReducer.bicycle
})


export default connect(mapStateToProps, { fetchBicycle, updateBicycle })(BicycleEdit);
