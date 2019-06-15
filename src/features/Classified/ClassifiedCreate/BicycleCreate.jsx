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
import SelectForm from "../../../app/common/forms/SelectForm";
import InputForm from "../../../app/common/forms/InputForm";
import CheckboxForm from "../../../app/common/forms/CheckboxForm";
import {
  offerType,
  classifiedCondition,
  previousOwners,
  adDuration,
  months
} from "../../../app/data/attributes/SharedAttributes";
import {
  bicycleCategory,
  frameType,
  exchange
} from "../../../app/data/attributes/BicycleAttributes";
import {
  carColor,
  carInteriorColor,
  carSeats,
  carPlate,
  carRimSize
} from "../../../app/data/attributes/CarAttributes";
import bicycleMakers from "../../../app/data/classifieds/bicycle/bicycleMakers";
import bicycleExtras from "../../../app/data/classifieds/bicycle/bicycleExtras";

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
    manufacturer: "",
    condition: "",
    month: "",
    purchased: "",
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

  return (
    <Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Container maxWidth="md">
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
                  attributes={bicycleCategory}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  required
                  name="manufacturer"
                  label="Manufacturer"
                  values={selectValues.manufacturer}
                  attributes={bicycleMakers}
                  handleChange={handleSelectChange}
                />
                <InputForm
                  name="variant"
                  label="Variant"
                  placeholder="eg. racing"
                  values={inputValues.variant}
                  handleChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  required
                  name="purchased"
                  label="Purchased"
                  values={selectValues.purchased}
                  attributes={months}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="month"
                  label="Month"
                  values={selectValues.month}
                  attributes={months}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="owners"
                  label="Previous owners"
                  values={selectValues.owners}
                  attributes={previousOwners}
                  handleChange={handleSelectChange}
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
                  name="color"
                  label="Color"
                  values={selectValues.color}
                  attributes={carColor}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="frameType"
                  label="Frame type"
                  values={selectValues.interiorColor}
                  attributes={frameType}
                  handleChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SelectForm
                  name="frameSize"
                  label="Frame size (cm)"
                  values={selectValues.interiorColor}
                  attributes={carInteriorColor}
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
              <Grid item xs={12} sm={4}>
                <SelectForm
                  name="breaks"
                  label="Breaks"
                  values={selectValues.plate}
                  attributes={carPlate}
                  handleChange={handleSelectChange}
                />
                <SelectForm
                  name="gears"
                  label="Gears"
                  values={selectValues.seats}
                  attributes={carSeats}
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
                  attributes={exchange}
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
                {bicycleExtras.map(extra => {
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
