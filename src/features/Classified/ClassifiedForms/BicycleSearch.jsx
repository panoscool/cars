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
import SelectForm from "../../../app/common/forms/SelectForm";
import InputForm from "../../../app/common/forms/InputForm";
import CheckboxForm from "../../../app/common/forms/CheckboxForm";
import {
  offerType,
  classifiedCondition,
  months,
  color,
  sort,
  lastEdit
} from "../../../app/data/SharedAttributes";
import {
  category,
  manufacturers,
  price,
  brakeType,
  extras,
  gears
} from "../../../app/data/bicycle/bicycle";
import { bicycles } from "../../../app/data/SampleData";

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
  },
  showButton: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const ClassifiedSearch = () => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    variant: ""
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
    priceFrom: "",
    priceTo: "",
    lastEdit: "",
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

  const [state, setState] = useState({
    crashed: false,
    withPrice: false
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
    <Paper className={classes.paper}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit} className={classes.root}>
          <div className={classes.showButton}>
            <Typography variant="h6" gutterBottom>
              Search for bicycle
            </Typography>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Show all {bicycles.length}
            </Button>
          </div>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="offer"
                label="Offer Type"
                values={selectValues.offer}
                attributes={offerType}
                handleChange={handleSelectChange}
              />
              <SelectForm
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
                values={state.crashed}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="category"
                label="Category"
                values={selectValues.category}
                attributes={category}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="manufacturer"
                label="Manufacturer"
                values={selectValues.manufacturer}
                attributes={manufacturers}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="color"
                label="Color"
                values={selectValues.color}
                attributes={color}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="brakes"
                label="Brakes"
                values={selectValues.brakes}
                attributes={brakeType}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="gears"
                label="Gears"
                values={selectValues.gears}
                attributes={gears}
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
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <CheckboxForm
                name="withPrice"
                label="With price only"
                labelPlacement="start"
                values={state.crashed}
                handleChange={handleChange}
              />
              <SelectForm
                name="priceFrom"
                label="Price from"
                values={selectValues.priceFrom}
                attributes={price}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="priceTo"
                label="Price to"
                values={selectValues.priceTo}
                attributes={price}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="sort"
                label="Sort"
                values={selectValues.sort}
                attributes={sort}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="frameSizeFrom"
                label="Frame size from"
                values={selectValues.frameSizeFrom}
                attributes={price}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="frameSizeTo"
                label="Frame size to"
                values={selectValues.frameSizeTo}
                attributes={price}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="lastEdit"
                label="Last edit"
                values={selectValues.lastEdit}
                attributes={lastEdit}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="purchasedFrom"
                label="Purchased from"
                values={selectValues.purchasedFrom}
                attributes={months}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="purchasedTo"
                label="Purchased to"
                values={selectValues.purchasedTo}
                attributes={months}
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
