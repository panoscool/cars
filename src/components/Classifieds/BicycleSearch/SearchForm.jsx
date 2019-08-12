import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider, Typography } from "@material-ui/core";
import moment from 'moment'
import queryString from "query-string";
import SelectForm from "../../../shared/forms/SelectForm";
import InputForm from "../../../shared/forms/InputForm";
import CheckboxForm from "../../../shared/forms/CheckboxForm";
import {
  offer,
  condition,
  color,
  sort,
  modified
} from "../../../data/SharedAttributes";
import {
  category,
  manufacturers,
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

  const [inputValues, setInputValues] = useState({
    variant: "",
    priceFrom: "",
    priceTo: "",
    yearFrom: "",
    yearTo: ""
  });

  const handleInputChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const [selectValues, setSelectValues] = useState({
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

  const handleSelectChange = event => {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

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

  const handleCheckboxChange = event => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formValues = { ...selectValues, ...inputValues, ...checkboxState };
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
              values={selectValues.offer}
              handleChange={handleSelectChange}
            />
            <SelectForm
              name="condition"
              label="Condition"
              optionsArray={condition}
              values={selectValues.condition}
              handleChange={handleSelectChange}
            />
            <SelectForm
              name="category"
              label="Category"
              optionsArray={category}
              values={selectValues.category}
              handleChange={handleSelectChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectForm
              name="manufacturer"
              label="Manufacturer"
              values={selectValues.manufacturer}
              optionsArray={manufacturers}
              handleChange={handleSelectChange}
            />
            <SelectForm
              name="color"
              label="Color"
              values={selectValues.color}
              optionsArray={color}
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
              name="brakes"
              label="Brakes"
              values={selectValues.brakes}
              optionsArray={brakes}
              handleChange={handleSelectChange}
            />
            <SelectForm
              name="gears"
              label="Gears"
              values={selectValues.gears}
              optionsArray={gears}
              handleChange={handleSelectChange}
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
              values={inputValues.frameSizeFrom}
              inputProps={{ min: 30, max: 69 }}
              handleChange={handleInputChange}
            />
            <InputForm
              type="number"
              name="frameSizeTo"
              label="Frame size to"
              placeholder="number 30-69"
              values={inputValues.frameSizeTo}
              inputProps={{ min: 30, max: 69 }}
              handleChange={handleInputChange}
            />
            <SelectForm
              name="sort"
              label="Sort"
              values={selectValues.sort}
              optionsArray={sort}
              handleChange={handleSelectChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputForm
              name="yearFrom"
              label="Purchased from"
              placeholder={`1990 - ${year.toString()}`}
              values={inputValues.yearFrom}
              inputProps={{ min: 1990 }}
              handleChange={handleInputChange}
            />
            <InputForm
              name="yearTo"
              label="Purchased to"
              placeholder={`1990 - ${year.toString()}`}
              values={inputValues.yearTo}
              inputProps={{ min: 1990 }}
              handleChange={handleInputChange}
            />
            <SelectForm
              name="modified"
              label="Modified"
              values={selectValues.modified}
              optionsArray={modified}
              handleChange={handleSelectChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputForm
              type="number"
              name="priceFrom"
              label="Price from"
              values={inputValues.priceFrom}
              handleChange={handleInputChange}
            />
            <InputForm
              type="number"
              name="priceTo"
              label="Price to"
              values={inputValues.priceTo}
              handleChange={handleInputChange}
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
