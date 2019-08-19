import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider, Typography } from "@material-ui/core";
import moment from 'moment'
import queryString from "query-string";
import SelectForm from "../../../shared/forms/SelectForm";
import InputForm from "../../../shared/forms/InputForm";
import CheckboxForm from "../../../shared/forms/CheckboxForm";
import { offer, condition, color, sort, modified } from "../../../data/SharedAttributes";
import { category, manufacturers, brakes, extras, gears } from "../../../data/bicycle/bicycle";
import PaperPage from "../../Layout/PaperPage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    marginTop: theme.spacing(1)
  },
  title: {
    paddingTop: 12
  },
  titleButton: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1)
  },
  alignButton: {
    textAlign: "right"
  }
}));

const ClassifiedSearch = props => {
  const classes = useStyles();

  const [values, setValues] = useState({
    variant: "",
    priceFrom: "",
    priceTo: "",
    yearFrom: "",
    yearTo: "",
    offer: "",
    category: "",
    manufacturer: "",
    condition: "",
    purchasedFrom: "",
    purchasedTo: "",
    frameSizeFrom: "",
    frameSizeTo: "",
    modified: "",
    gears: "",
    color: "",
    brakes: "",
    sort: ""
  });

  const [checkboxState, setCheckboxState] = useState({
    withPrice: false,
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
    const formValues = { ...values, ...checkboxState };
    props.history.push(`/bicycles/?${queryString.stringify(formValues)}`);
    console.log("formValues", formValues);
  };

  const year = moment().year();

  return (
    <PaperPage>
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.titleButton}>
          <Typography className={classes.title} variant="h6">
            Bicycle Search
          </Typography>
          <Button
            component={Link}
            to="/bicycles"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Show all
          </Button>
        </div>
        <Divider variant="fullWidth" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SelectForm
              name="offer"
              label="Offer Type"
              optionsArray={offer}
              values={values.offer}
              handleChange={handleChange}
            />
            <SelectForm
              name="condition"
              label="Condition"
              optionsArray={condition}
              values={values.condition}
              handleChange={handleChange}
            />
            <SelectForm
              name="category"
              label="Category"
              optionsArray={category}
              values={values.category}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectForm
              name="manufacturer"
              label="Manufacturer"
              values={values.manufacturer}
              optionsArray={manufacturers}
              handleChange={handleChange}
            />
            <SelectForm
              name="color"
              label="Color"
              values={values.color}
              optionsArray={color}
              handleChange={handleChange}
            />
            <InputForm
              name="variant"
              label="Variant"
              placeholder="eg. racing"
              values={values.variant}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectForm
              name="brakes"
              label="Brakes"
              values={values.brakes}
              optionsArray={brakes}
              handleChange={handleChange}
            />
            <SelectForm
              name="gears"
              label="Gears"
              values={values.gears}
              optionsArray={gears}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <InputForm
              type="number"
              name="frameSizeFrom"
              label="Frame size from"
              placeholder="number 30-69"
              values={values.frameSizeFrom}
              inputProps={{ min: 30, max: 69 }}
              handleChange={handleChange}
            />
            <InputForm
              type="number"
              name="frameSizeTo"
              label="Frame size to"
              placeholder="number 30-69"
              values={values.frameSizeTo}
              inputProps={{ min: 30, max: 69 }}
              handleChange={handleChange}
            />
            <SelectForm
              name="sort"
              label="Sort"
              values={values.sort}
              optionsArray={sort}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputForm
              name="yearFrom"
              label="Purchased from"
              placeholder={`1990 - ${year.toString()}`}
              values={values.yearFrom}
              inputProps={{ min: 1990 }}
              handleChange={handleChange}
            />
            <InputForm
              name="yearTo"
              label="Purchased to"
              placeholder={`1990 - ${year.toString()}`}
              values={values.yearTo}
              inputProps={{ min: 1990 }}
              handleChange={handleChange}
            />
            <SelectForm
              name="modified"
              label="Modified"
              values={values.modified}
              optionsArray={modified}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputForm
              type="number"
              name="priceFrom"
              label="Price from"
              values={values.priceFrom}
              handleChange={handleChange}
            />
            <InputForm
              type="number"
              name="priceTo"
              label="Price to"
              values={values.priceTo}
              handleChange={handleChange}
            />
            <CheckboxForm
              name="withPrice"
              label="With price only"
              labelPlacement="start"
              checked={checkboxState.withPrice}
              values={checkboxState.withPrice}
              handleChange={handleCheckboxChange}
            />
          </Grid>
        </Grid>

        <Divider variant="fullWidth" style={{ margin: 16 }} />
        <Grid container spacing={3}>
          <Grid item xs>
            {Object.keys(checkboxState)
              .slice(2)
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
        <div className={classes.alignButton}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Search
          </Button>
        </div>
      </form>
    </PaperPage>
  );
};

export default ClassifiedSearch;
