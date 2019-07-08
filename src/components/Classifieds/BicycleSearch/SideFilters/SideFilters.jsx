import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider } from "@material-ui/core";
import CheckboxForm from "../../../../shared/forms/CheckboxForm";
import RadioForm from "../../../../shared/forms/RadioForm";
import SelectForm from "../../../../shared/forms/SelectForm";
import InputForm from "../../../../shared/forms/InputForm";
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

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1, 0)
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
  }
}));

const SideFilters = ({ onSubmit }) => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    variant: "",
    priceFrom: "",
    priceTo: "",
    frameSizeFrom: "",
    frameSizeTo: "",
    rimSizeFrom: "",
    rimSizeTo: ""
  });

  const handleInputChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const [selectValues, setSelectValues] = useState({
    category: "",
    manufacturer: "",
    color: ""
  });

  const handleSelectChange = event => {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const [checkboxState, setCheckboxState] = useState({
    sale: true,
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

  const handleCheckboxChange = event => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked
    });
  };

  const [value, setValue] = useState({
    modified: "",
    brakes: "",
    frameType: ""
  });

  const handleRadioChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formValues = { selectValues, inputValues, checkboxState, value };
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="side-filters">
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Offer Type</Typography>
        <Divider variant="fullWidth" />
        {Object.keys(checkboxState).map(key => {
          const obj = offer.find(obj => obj.key === key);
          return offer[key] ? (
            <CheckboxForm
              key={obj.key}
              name={obj.key}
              value={obj.key}
              label={obj.value}
              labelPlacement="end"
              checked={checkboxState[key]}
              handleChange={handleCheckboxChange}
            />
          ) : null;
        })}
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Condition</Typography>
        <Divider variant="fullWidth" />
        <CheckboxForm
          optionsType="optionsArray"
          optionsArray={condition}
          handleChange={handleCheckboxChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Manufacturer</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <SelectForm
            name="manufacturer"
            label="Manufacturers"
            values={selectValues.manufacturer}
            optionsArray={manufacturers}
            handleChange={handleSelectChange}
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
            values={selectValues.category}
            optionsArray={category}
            handleChange={handleSelectChange}
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
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Modified</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="modified"
          values={value.modified}
          optionsArray={modified}
          handleChange={handleRadioChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Variant</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
          <InputForm
            name="variant"
            label="Variant"
            placeholder="eg. racing"
            values={inputValues.variant}
            handleChange={handleInputChange}
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
            values={selectValues.color}
            optionsArray={color}
            handleChange={handleSelectChange}
          />
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Frame Type</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="frameType"
          values={value.frameType}
          optionsArray={frameType}
          handleChange={handleRadioChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Brakes</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="brakes"
          values={value.brakes}
          optionsArray={brakes}
          handleChange={handleRadioChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Gears</Typography>
        <Divider variant="fullWidth" />
        <RadioForm
          name="gears"
          values={value.gears}
          optionsArray={gears}
          handleChange={handleRadioChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Frame Size</Typography>
        <Divider variant="fullWidth" />
        <div className={classes.right}>
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
            values={inputValues.rimSizeFrom}
            inputProps={{ min: 10, max: 30 }}
            handleChange={handleInputChange}
          />
          <InputForm
            type="number"
            name="rimSizeTo"
            label="Rim size to"
            placeholder="number 10-30"
            values={inputValues.rimSizeTo}
            inputProps={{ min: 10, max: 30 }}
            handleChange={handleInputChange}
          />
        </div>
      </Paper>
    </form>
  );
};

export default SideFilters;
