import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  CssBaseline,
  Button,
  Divider,
  Typography
} from "@material-ui/core";
// import Breadcrumb from "../../../app/common/breadcrumbs/Breadcrumb";
import SelectForm from "../../../app/common/forms/SelectForm";
import InputForm from "../../../app/common/forms/InputForm";
import CheckboxForm from "../../../app/common/forms/CheckboxForm";
import {
  offerType,
  classifiedCondition,
  previousOwners,
  adDuration,
  exchangeWith
} from "../../../app/data/attributes/SharedAttributes";
import {
  carCategory,
  carTransmission,
  carFuelType,
  carDriveType,
  carEuroStandard,
  carColor,
  carInteriorColor,
  carInteriorType,
  carDoors,
  carSeats,
  carAirbags,
  carPlate,
  carRimSize
} from "../../../app/data/attributes/CarAttributes";
import carModel from "../../../app/data/classifieds/carModels";
import carManufacturer from "../../../app/data/classifieds/carMakers";
import {
  column1,
  column2,
  column3,
  column4
} from "../../../app/data/classifieds/carExtras";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    paddingTop: 14
  }
}));

const ClassifiedCreate = () => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    variant: "",
    mileages: "",
    engine: "",
    power: "",
    emissions: "",
    efficiencyCity: "",
    efficiencyMotorway: "",
    efficiencyMixed: "",
    price: "",
    description: "",
    youTube: "",
    password: "",
    userName: "",
    email: "",
    phone1: "",
    phone2: ""
  });

  const handleInputChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const [selectValues, setSelectValues] = useState({
    offer: "",
    category: "",
    manufacturer: "audi",
    condition: "",
    model: "80",
    owners: "",
    transmission: "",
    fuel: "",
    driveType: "",
    standard: "",
    color: "",
    interiorColor: "",
    interiorType: "",
    doors: "",
    seats: "",
    plate: "",
    airbags: "",
    rimSize: "",
    duration: "",
    exchange: ""
  });

  const handleSelectChange = event => {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const [state, setState] = useState({
    crashed: false,
    negotiable: false,
    metallic: false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formValues = { selectValues, inputValues, state };
    console.log("formValues", formValues);
  };

  const options = carModel[selectValues.manufacturer] || [];

  return (
    <Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Container maxWidth="md">
          {/* <Breadcrumb /> */}
          <form onSubmit={handleSubmit} className={classes.root}>
            <Typography variant="h6" gutterBottom>
              Vehicle Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  required
                  name="offer"
                  label="Offer Type"
                  values={selectValues.offer}
                  attributes={offerType}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  required
                  name="condition"
                  label="Condition"
                  values={selectValues.condition}
                  attributes={classifiedCondition}
                  handleChange={handleSelectChange}
                />
                <CheckboxForm
                  name="crashed"
                  label="Crashed"
                  labelPlacement="start"
                  value={state.crashed}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  required
                  name="category"
                  label="Category"
                  values={selectValues.category}
                  attributes={carCategory}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  required
                  name="manufacturer"
                  label="Manufacturer"
                  values={selectValues.manufacturer}
                  attributes={carManufacturer}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  required
                  name="model"
                  label="Model"
                  values={selectValues.model}
                  attributes={options}
                  handleChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  name="owners"
                  label="Previous owners"
                  values={selectValues.owners}
                  attributes={previousOwners}
                  handleChange={handleSelectChange}
                />
                <InputForm
                  name="variant"
                  label="Variant"
                  placeholder="eg. GTI"
                  values={inputValues.variant}
                  handleChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Engine Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  required
                  name="transmission"
                  label="Transmission"
                  values={selectValues.transmission}
                  attributes={carTransmission}
                  handleChange={handleSelectChange}
                />
                <InputForm
                  required
                  name="engine"
                  label="Engine"
                  placeholder="cc"
                  values={inputValues.engine}
                  handleChange={handleInputChange}
                />
                <InputForm
                  required
                  name="power"
                  label="Power"
                  placeholder="bhp"
                  values={inputValues.power}
                  handleChange={handleInputChange}
                />
                <InputForm
                  required
                  name="mileages"
                  label="Mileages"
                  placeholder="km"
                  values={inputValues.mileages}
                  handleChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  required
                  name="fuel"
                  label="Fuel Type"
                  values={selectValues.fuel}
                  attributes={carFuelType}
                  handleChange={handleSelectChange}
                />
                <InputForm
                  name="efficiencyCity"
                  label="Fuel Efficiency City"
                  placeholder="l/100km"
                  values={inputValues.efficiencyCity}
                  handleChange={handleInputChange}
                />
                <InputForm
                  name="efficiencyMotorway"
                  label="Fuel Efficiency Motorway"
                  placeholder="l/100km"
                  values={inputValues.efficiencyMotorway}
                  handleChange={handleInputChange}
                />
                <InputForm
                  name="efficiencyMixed"
                  label="Fuel Efficiency Mixed"
                  placeholder="l/100km"
                  values={inputValues.efficiencyMixed}
                  handleChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  name="driveType"
                  label="Drive Type"
                  values={selectValues.driveType}
                  attributes={carDriveType}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="standard"
                  label="Euro Standar"
                  values={selectValues.standard}
                  attributes={carEuroStandard}
                  handleChange={handleSelectChange}
                />
                <InputForm
                  name="emissions"
                  label="Emissions (CO2)"
                  placeholder="g/km"
                  values={inputValues.emissions}
                  handleChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Body Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  required
                  name="doors"
                  label="Doors"
                  values={selectValues.doors}
                  attributes={carDoors}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  required
                  name="seats"
                  label="Seats"
                  values={selectValues.seats}
                  attributes={carSeats}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  required
                  name="plate"
                  label="Plate"
                  values={selectValues.plate}
                  attributes={carPlate}
                  handleChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  required
                  name="color"
                  label="Color"
                  values={selectValues.color}
                  attributes={carColor}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="interiorColor"
                  label="Interior Color"
                  values={selectValues.interiorColor}
                  attributes={carInteriorColor}
                  handleChange={handleSelectChange}
                />
                <CheckboxForm
                  name="metallic"
                  label="Metallic"
                  labelPlacement="start"
                  value={state.metallic}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  name="interiorType"
                  label="Interior Type"
                  values={selectValues.interiorType}
                  attributes={carInteriorType}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="airbags"
                  label="Airbags"
                  values={selectValues.airbags}
                  attributes={carAirbags}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="rimSize"
                  label="Rim size (inches)"
                  values={selectValues.rimSize}
                  attributes={carRimSize}
                  handleChange={handleSelectChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Offer Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <InputForm
                  required
                  name="price"
                  label="Price"
                  values={inputValues.price}
                  handleChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  name="exchange"
                  label="Exchange with"
                  values={selectValues.exchange}
                  attributes={exchangeWith}
                  handleChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CheckboxForm
                  name="negotiable"
                  label="Negotiable"
                  labelPlacement="start"
                  value={state.negotiable}
                  handleChange={handleChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Classified Description
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputForm
                  multiline
                  rows={5}
                  name="description"
                  label="Description"
                  placeholder="No phones, emails or links are allowed in the description. Otherwise the classified will be deleted."
                  values={inputValues.description}
                  handleChange={handleInputChange}
                />
                <InputForm
                  name="youTube"
                  label="YouTube"
                  values={inputValues.youTube}
                  handleChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Typography className={classes.title} variant="h6" gutterBottom>
              Extras
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                {column1.map(extra => {
                  return (
                    <CheckboxForm
                      key={extra.key}
                      name={extra.key}
                      label={extra.value}
                      labelPlacement="end"
                    />
                  );
                })}
              </Grid>
              <Grid item xs={6} sm={3}>
                {column2.map(extra => {
                  return (
                    <CheckboxForm
                      key={extra.key}
                      name={extra.key}
                      label={extra.value}
                      labelPlacement="end"
                    />
                  );
                })}
              </Grid>
              <Grid item xs={6} sm={3}>
                {column3.map(extra => {
                  return (
                    <CheckboxForm
                      key={extra.key}
                      name={extra.key}
                      label={extra.value}
                      labelPlacement="end"
                    />
                  );
                })}
              </Grid>
              <Grid item xs={6} sm={3}>
                {column4.map(extra => {
                  return (
                    <CheckboxForm
                      key={extra.key}
                      name={extra.key}
                      label={extra.value}
                      labelPlacement="end"
                    />
                  );
                })}
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Ad Options
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SelectForm
                  required
                  name="duration"
                  label="Ad Duration"
                  values={selectValues.duration}
                  attributes={adDuration}
                  handleChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputForm
                  required
                  name="password"
                  label="Password"
                  values={inputValues.password}
                  handleChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Contact Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputForm
                  required
                  name="userName"
                  label="Name"
                  values={inputValues.userName}
                  handleChange={handleInputChange}
                />
                <InputForm
                  required
                  type="tel"
                  name="phone1"
                  label="Phone 1"
                  values={inputValues.phone1}
                  handleChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputForm
                  type="email"
                  name="email"
                  label="Email"
                  values={inputValues.email}
                  handleChange={handleInputChange}
                />
                <InputForm
                  type="tel"
                  name="phone2"
                  label="Phone 2"
                  values={inputValues.phone2}
                  handleChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default ClassifiedCreate;
