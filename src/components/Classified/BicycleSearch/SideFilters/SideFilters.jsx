import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider, FormGroup } from "@material-ui/core";
import moment from "moment";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import CheckboxForm from "../../../Shared/forms/CheckboxForm";
import RadioForm from "../../../Shared/forms/RadioForm";
import SelectForm from "../../../Shared/forms/SelectForm";
import InputForm from "../../../Shared/forms/InputForm";
import {
  offer,
  condition,
  color,
  modified
} from "../../../../data/SharedAttributes";
import {
  manufacturers,
  frameType,
  brakes,
  category,
  gears,
  extras
} from "../../../../data/bicycle/bicycle";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    padding: theme.spacing(2, 2, 2, 3),
    margin: theme.spacing(1, 0),
    boxShadow: "none"
  },
  list: {
    listStyle: "none"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  right: {
    marginRight: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1, 3)
  },
  expansionPanel: {
    boxShadow: "none"
  }
}));

const SideFilters = props => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const [values, setValues] = useState({
    variant: "",
    priceFrom: "",
    priceTo: "",
    frameSizeFrom: "",
    frameSizeTo: "",
    rimSizeFrom: "",
    rimSizeTo: "",
    yearFrom: "",
    yearTo: "",
    category: "",
    manufacturer: "",
    color: "",
    modified: "",
    brakes: "",
    frameType: ""
  });

  const [checkboxState, setCheckboxState] = useState({
    sale: false,
    rent: false,
    wanted: false,
    new: false,
    used: false,
    crashed: false,
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

  const year = moment().year();

  return (
    <div className={width < 960 ? "" : "side-filters"}>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Offer Type</Typography>
        <Divider variant="fullWidth" />
        <FormGroup className={classes.formControl}>
          {Object.keys(checkboxState)
            .slice(0, 3)
            .map(key => {
              const obj = offer.find(obj => obj.key === key);
              return (
                <CheckboxForm
                  key={obj.key}
                  name={obj.key}
                  value={obj.key}
                  label={obj.value}
                  labelPlacement="end"
                  checked={checkboxState[key]}
                  handleChange={handleCheckboxChange}
                />
              );
            })}
        </FormGroup>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Condition</Typography>
        <Divider variant="fullWidth" />
        <FormGroup className={classes.formControl}>
          {Object.keys(checkboxState)
            .slice(3, 6)
            .map(key => {
              const obj = condition.find(obj => obj.key === key);
              return (
                <CheckboxForm
                  key={obj.key}
                  name={obj.key}
                  value={obj.key}
                  label={obj.value}
                  labelPlacement="end"
                  checked={checkboxState[key]}
                  handleChange={handleCheckboxChange}
                />
              );
            })}
        </FormGroup>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Manufacturer</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <SelectForm
            name="manufacturer"
            label="Manufacturers"
            values={values.manufacturer}
            optionsArray={manufacturers}
            handleChange={handleChange}
          />
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Category</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <SelectForm
            name="category"
            label="Category"
            values={values.category}
            optionsArray={category}
            handleChange={handleChange}
          />
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Price</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
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
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Modified</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="modified"
          value={values.modified}
          optionsArray={modified}
          handleChange={handleChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Purchased</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <InputForm
            name="yearFrom"
            label="Purchased from"
            placeholder={`1990 - ${year.toString()}`}
            values={values.year}
            inputProps={{ min: 1990 }}
            handleChange={handleChange}
          />
          <InputForm
            name="yearTo"
            label="Purchased to"
            placeholder={`1990 - ${year.toString()}`}
            values={values.year}
            inputProps={{ min: 1990 }}
            handleChange={handleChange}
          />
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Variant</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <InputForm
            name="variant"
            label="Variant"
            placeholder="eg. racing"
            values={values.variant}
            handleChange={handleChange}
          />
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Color</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <SelectForm
            name="color"
            label="Color"
            values={values.color}
            optionsArray={color}
            handleChange={handleChange}
          />
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Frame Type</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="frameType"
          value={values.frameType}
          optionsArray={frameType}
          handleChange={handleChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Brakes</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="brakes"
          value={values.brakes}
          optionsArray={brakes}
          handleChange={handleChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Gears</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="gears"
          value={values.gears}
          optionsArray={gears}
          handleChange={handleChange}
        />
      </Paper>
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Extras</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup className={classes.formControl}>
            {Object.keys(checkboxState)
              .slice(7)
              .map(key => {
                const obj = extras.find(obj => obj.key === key);
                return (
                  <CheckboxForm
                    key={obj.key}
                    name={obj.key}
                    value={obj.key}
                    label={obj.value}
                    labelPlacement="end"
                    checked={checkboxState[key]}
                    handleChange={handleCheckboxChange}
                  />
                );
              })}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Frame Size</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
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
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Rim Size</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <InputForm
            type="number"
            name="rimSizeFrom"
            label="Rim size from"
            placeholder="number 10-30"
            values={values.rimSizeFrom}
            inputProps={{ min: 10, max: 30 }}
            handleChange={handleChange}
          />
          <InputForm
            type="number"
            name="rimSizeTo"
            label="Rim size to"
            placeholder="number 10-30"
            values={values.rimSizeTo}
            inputProps={{ min: 10, max: 30 }}
            handleChange={handleChange}
          />
        </div>
      </Paper>
    </div>
  );
};

export default SideFilters;
