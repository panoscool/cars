import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, CssBaseline } from "@material-ui/core";
// import Breadcrumb from "../../../app/common/breadcrumbs/Breadcrumb";
import SelectForm from "../../../app/common/forms/SelectForm";
import { carOfferType, carCategory } from "../../../app/data/CarAttributes";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

const ClassifiedCreate = () => {
  const classes = useStyles();
  const [selectValues, setSelectValues] = React.useState({
    category: "something",
    offer: ""
  });

  function handleSelectChange(event) {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Container maxWidth="md">
          <div className={classes.root}>
            {/* <Breadcrumb /> */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <SelectForm
                  required
                  name="offer-type"
                  label="Offer Type"
                  values={selectValues.offer}
                  attributes={carOfferType}
                  handleChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectForm
                  name="category"
                  label="Category"
                  values={selectValues.category}
                  attributes={carCategory}
                  handleChange={handleSelectChange}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default ClassifiedCreate;
