import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider, Typography } from "@material-ui/core";
import moment from "moment";
import SelectForm from "../../Shared/forms/SelectForm";
import InputForm from "../../Shared/forms/InputForm";
import CheckboxForm from "../../Shared/forms/CheckboxForm";
import {
  offer,
  condition,
  adDuration,
  color,
  months
} from "../../../data/SharedAttributes";
import {
  category,
  manufacturers,
  frameType,
  exchange,
  brakes,
  extras,
  gears
} from "../../../data/bicycle/bicycle";
import PaperPage from "../../Layout/PaperPage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    marginTop: theme.spacing(2)
  },
  title: {
    paddingTop: 16
  },
  alignButton: {
    textAlign: "right"
  }
}));

const BicycleForm = props => {
  const classes = useStyles();
  const {
    onSubmit,
    requiredInfos,
    currentValues,
    currentCheckBoxState
  } = props;

  useEffect(() => {
    if (props.match.params.id) {
      setValues(currentValues);
      setCheckboxState(currentCheckBoxState);
    }
  }, [props.match.params.id, currentValues, currentCheckBoxState]);

  const [values, setValues] = useState({
    variant: "",
    owners: "",
    price: "",
    frameSize: "",
    rimSize: "",
    description: "",
    youTube: "",
    password: "",
    userName: "",
    email: "",
    phone1: "",
    location: "",
    year: "",
    offer: "",
    category: "",
    manufacturer: "",
    condition: "",
    frameType: "",
    gears: "",
    color: "",
    brakes: "",
    duration: "",
    exchange: "",
    month: ""
  });

  const [checkboxState, setCheckboxState] = useState({
    negotiable: false,
    womens: false,
    mens: false,
    dynamoLights: false,
    ledLights: false,
    shockAbsorber: false,
    fenders: false,
    singleSpeed: false,
    interiorSpeed: false,
    exteriorSpeed: false,
    antique: false,
    basket: false,
    cargoRack: false
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = event => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formValues = {
      ...values,
      ...checkboxState
    };
    onSubmit(formValues);
    console.log(formValues);
  };

  const year = moment().year();

  return (
    <PaperPage>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Typography variant="h6">Βicycle Details</Typography>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SelectForm
              required
              name="offer"
              label="Offer Type"
              values={values.offer || ""}
              optionsArray={offer}
              handleChange={handleChange}
            />
            <SelectForm
              required
              name="condition"
              label="Condition"
              values={values.condition || ""}
              optionsArray={condition}
              handleChange={handleChange}
            />
            <SelectForm
              required
              name="category"
              label="Category"
              values={values.category || ""}
              optionsArray={category}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectForm
              required
              name="manufacturer"
              label="Manufacturer"
              values={values.manufacturer || ""}
              optionsArray={manufacturers}
              handleChange={handleChange}
            />
            <SelectForm
              required
              name="month"
              label="Purchased Month"
              optionsArray={months}
              values={values.month || ""}
              handleChange={handleChange}
            />
            <InputForm
              required
              name="year"
              label="Purchased Year"
              placeholder={`1990 - ${year.toString()}`}
              values={values.year || ""}
              inputProps={{ min: 1990 }}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputForm
              name="variant"
              label="Variant"
              placeholder="eg. racing"
              values={values.variant || ""}
              handleChange={handleChange}
            />
            <InputForm
              name="owners"
              type="number"
              label="Previous owners"
              placeholder="number 0-9"
              inputProps={{ min: 0, max: 9 }}
              values={values.owners || ""}
              handleChange={handleChange}
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
              values={values.color || ""}
              optionsArray={color}
              handleChange={handleChange}
            />
            <SelectForm
              name="frameType"
              label="Frame type"
              values={values.frameType || ""}
              optionsArray={frameType}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputForm
              type="number"
              name="frameSize"
              label="Frame size (cm)"
              placeholder="number 30-70"
              inputProps={{ min: 30, max: 70 }}
              values={values.frameSize || ""}
              handleChange={handleChange}
            />
            <InputForm
              type="number"
              name="rimSize"
              label="Rim size (inches)"
              placeholder="number 10-30"
              inputProps={{ min: 10, max: 30 }}
              values={values.rimSize || ""}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectForm
              name="brakes"
              label="Brakes"
              values={values.brakes || ""}
              optionsArray={brakes}
              handleChange={handleChange}
            />
            <SelectForm
              name="gears"
              label="Gears"
              values={values.gears || ""}
              optionsArray={gears}
              handleChange={handleChange}
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
              type="number"
              name="price"
              label="Price"
              values={values.price || ""}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectForm
              name="exchange"
              label="Exchange with"
              values={values.exchange || ""}
              optionsArray={exchange}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CheckboxForm
              name="negotiable"
              label="Negotiable"
              labelPlacement="start"
              checked={checkboxState.negotiable}
              value={checkboxState.negotiable}
              handleChange={handleCheckboxChange}
            />
          </Grid>
        </Grid>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Description
        </Typography>
        <Divider variant="fullWidth" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputForm
              multiline
              rows={5}
              name="description"
              label="Description"
              placeholder="No phones, emails or links are allowed in the description, otherwise the classified will be deleted."
              values={values.description || ""}
              handleChange={handleChange}
            />
            <InputForm
              type="url"
              name="youTube"
              label="YouTube"
              placeholder="https://youtube.com"
              values={values.youTube || ""}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Extras
        </Typography>
        <Divider variant="fullWidth" />
        <Grid container spacing={3}>
          <Grid item xs>
            {Object.keys(checkboxState)
              .slice(1)
              .map(key => {
                const extra = extras.find(extra => extra.key === key);
                return (
                  <CheckboxForm
                    key={extra.key}
                    name={extra.key}
                    value={extra.key}
                    label={extra.value}
                    labelPlacement="end"
                    checked={checkboxState[key]}
                    handleChange={handleCheckboxChange}
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
              values={values.duration || ""}
              optionsArray={adDuration}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputForm
              required
              name="password"
              label="Password"
              values={values.password || ""}
              handleChange={handleChange}
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
              values={values.userName || ""}
              handleChange={handleChange}
            />
            <InputForm
              required
              type="tel"
              name="phone1"
              label="Phone 1"
              values={values.phone1 || ""}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputForm
              required
              name="location"
              label="Location"
              values={values.location || ""}
              handleChange={handleChange}
            />
            <InputForm
              type="email"
              name="email"
              label="Email"
              values={values.email || ""}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
        <div className={classes.alignButton}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </div>
      </form>
      {requiredInfos}
    </PaperPage>
  );
};

export default withRouter(BicycleForm);
