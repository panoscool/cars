import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, CssBaseline, Button } from "@material-ui/core";
// import Breadcrumb from "../../../app/common/breadcrumbs/Breadcrumb";
import SelectForm from "../../../app/common/forms/SelectForm";
import InputForm from "../../../app/common/forms/InputForm";
import CheckboxForm from "../../../app/common/forms/CheckboxForm";
import {
  carOfferType,
  carCategory,
  carMaker,
  carCondition,
  carModel,
  carOwners
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
  }
}));

const ClassifiedCreate = () => {
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
    make: "",
    condition: "",
    model: "",
    owners: ""
  });

  const handleSelectChange = event => {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const [state, setState] = useState({
    crashed: false
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
                  name="make"
                  label="Make"
                  values={selectValues.make}
                  attributes={carMaker}
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
            <Button
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
