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
  carOfferType,
  carCategory,
  carManufacturer,
  carCondition,
  carModel,
  carOwners,
  carTransmission,
  carFuelType,
  carDriveType,
  carEuroStandard,
  carColor,
  carInteriorColor,
  carInteriorType
} from "../../../app/data/CarAttributes";

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
    price: ""
  });

  const handleInputChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const [selectValues, setSelectValues] = useState({
    offer: "",
    category: "",
    manufacturer: "",
    condition: "",
    model: "",
    owners: "",
    transmission: "",
    fuel: "",
    drive: "",
    standard: "",
    color: "",
    interiorColor: "",
    interiorType: ""
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
              <Grid item xs={12} sm={6}>
                <SelectForm
                  required
                  name="offer"
                  label="Offer Type"
                  values={selectValues.offer}
                  attributes={carOfferType}
                  handleChange={handleSelectChange}
                />
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
                <InputForm
                  name="variant"
                  label="Variant"
                  placeholder="eg. GTI"
                  values={inputValues.variant}
                  handleChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectForm
                  required
                  name="condition"
                  label="Condition"
                  values={selectValues.condition}
                  attributes={carCondition}
                  handleChange={handleSelectChange}
                />
                <CheckboxForm
                  name="crashed"
                  label="Crashed"
                  value={state.crashed}
                  handleChange={handleChange}
                />
                <SelectForm
                  required
                  name="model"
                  label="Model"
                  values={selectValues.model}
                  attributes={carModel}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="owners"
                  label="Previous owners"
                  values={selectValues.owners}
                  attributes={carOwners}
                  handleChange={handleSelectChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Engine Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputForm
                  required
                  name="mileages"
                  label="Mileages"
                  placeholder="km"
                  values={inputValues.mileages}
                  handleChange={handleInputChange}
                />
                <InputForm
                  required
                  name="engine"
                  label="Engine"
                  placeholder="cc"
                  values={inputValues.engine}
                  handleChange={handleInputChange}
                />
                <SelectForm
                  required
                  name="transmission"
                  label="Transmission"
                  values={selectValues.transmission}
                  attributes={carTransmission}
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectForm
                  required
                  name="fuel"
                  label="Fuel Type"
                  values={selectValues.fuel}
                  attributes={carFuelType}
                  handleChange={handleSelectChange}
                />
                <InputForm
                  required
                  name="power"
                  label="Power"
                  placeholder="bhp"
                  values={inputValues.power}
                  handleChange={handleInputChange}
                />
                <SelectForm
                  name="drive"
                  label="Drive Type"
                  values={selectValues.drive}
                  attributes={carDriveType}
                  handleChange={handleSelectChange}
                />
                <InputForm
                  name="emissions"
                  label="Emissions (CO2)"
                  placeholder="g/km"
                  values={inputValues.emissions}
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
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Body Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <CheckboxForm
                  name="metallic"
                  label="Metallic"
                  value={state.metallic}
                  handleChange={handleChange}
                />
                <SelectForm
                  name="interiorType"
                  label="Interior Type"
                  values={selectValues.interiorType}
                  attributes={carInteriorType}
                  handleChange={handleSelectChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Offer Details
            </Typography>
            <Divider variant="fullWidth" />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputForm
                  required
                  name="price"
                  label="Price"
                  values={inputValues.price}
                  handleChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CheckboxForm
                  name="negotiable"
                  label="Negotiable"
                  value={state.negotiable}
                  handleChange={handleChange}
                />
              </Grid>
            </Grid>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Classified Description
            </Typography>
            <Divider variant="fullWidth" />
            <Typography className={classes.title} variant="h6" gutterBottom>
              Extras
            </Typography>
            <Divider variant="fullWidth" />
            <Typography className={classes.title} variant="h6" gutterBottom>
              Ad Options
            </Typography>
            <Divider variant="fullWidth" />
            <Typography className={classes.title} variant="h6" gutterBottom>
              Contact Details
            </Typography>
            <Divider variant="fullWidth" />
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
