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

  const currentInputValues = {
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

  const currentSelectedValues = {
    offer: bicycleObj.offer,
    category: bicycleObj.category,
    manufacturer: bicycleObj.manufacturer,
    condition: bicycleObj.condition,
    frameType: bicycleObj.frameType,
    gears: bicycleObj.gears,
    color: bicycleObj.color,
    brakes: bicycleObj.brakes,
    duration: bicycleObj.duration,
    exchange: bicycleObj.exchange,
    month: bicycleObj.month
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
      currentInputValues={currentInputValues}
      currentSelectedValues={currentSelectedValues}
      currentCheckBoxState={currentCheckBoxState}
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = ({ bicycle }) => ({
  bicycleObj: bicycle.bicycle
})


export default connect(mapStateToProps, { fetchBicycle, updateBicycle })(BicycleEdit);
