import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  Button,
  Divider,
  Typography
} from "@material-ui/core";
import SelectForm from "../../../shared/forms/SelectForm";
import InputForm from "../../../shared/forms/InputForm";
import CheckboxForm from "../../../shared/forms/CheckboxForm";
import {
  offer,
  condition,
  months,
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    paddingTop: 12
  },
  showButton: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const ClassifiedSearch = () => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    variant: "",
    priceFrom: "",
    priceTo: ""
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

  const extraKeys = extras.map(obj => obj.key);
  const defaultCheckBoxState = {
    withPrice: true,
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
  };
  extraKeys.forEach(keyName => {
    defaultCheckBoxState[keyName] = false;
  });
  const [state, setState] = useState(defaultCheckBoxState);

  const handleCheckboxChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formValues = { ...selectValues, ...inputValues, state };
    console.log("formValues", formValues);
  };

  console.log(state);

  return (
    <Paper className={classes.paper}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit} className={classes.root}>
          <div className={classes.showButton}>
            <Typography className={classes.title} variant="h6">
              Search for bicycle
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
                values={selectValues.offer}
                optionsArray={offer}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="condition"
                label="Condition"
                values={selectValues.condition}
                optionsArray={condition}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="category"
                label="Category"
                values={selectValues.category}
                optionsArray={category}
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
              <CheckboxForm
                name="withPrice"
                label="With price only"
                labelPlacement="start"
                values={state.withPrice}
                handleChange={handleCheckboxChange}
              />
              <InputForm
                name="priceFrom"
                label="Price from"
                values={inputValues.priceFrom}
                handleChange={handleInputChange}
              />
              <InputForm
                name="priceTo"
                label="Price to"
                values={inputValues.priceTo}
                handleChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="sort"
                label="Sort"
                values={selectValues.sort}
                optionsArray={sort}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="frameSizeFrom"
                label="Frame size from"
                values={selectValues.frameSizeFrom}
                optionsArray={sort}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="frameSizeTo"
                label="Frame size to"
                values={selectValues.frameSizeTo}
                optionsArray={sort}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="modified"
                label="Modified"
                values={selectValues.modified}
                optionsArray={modified}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="purchasedFrom"
                label="Purchased from"
                values={selectValues.purchasedFrom}
                optionsArray={months}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="purchasedTo"
                label="Purchased to"
                values={selectValues.purchasedTo}
                optionsArray={months}
                handleChange={handleSelectChange}
              />
            </Grid>
          </Grid>

          <Divider variant="fullWidth" style={{ margin: 16 }} />
          <Grid container spacing={3}>
            <Grid item xs>
              {extras.map(extra => {
                return (
                  <CheckboxForm
                    key={extra.key}
                    name={extra.key}
                    label={extra.value}
                    labelPlacement="end"
                    handleChange={handleCheckboxChange}
                  />
                );
              })}
            </Grid>
          </Grid>
          <div style={{ textAlign: "right" }}>
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
      </Container>
    </Paper>
  );
};

export default ClassifiedSearch;
