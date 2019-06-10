import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Loading from "../loading/Loading";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SimpleSelect(props) {
  const classes = useStyles();

  const inputLabel = useRef();
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  console.log(inputLabel);

  // const [values, setValues] = useState({
  //   age: "",
  //   name: "hai"
  // });

  // function handleChange(event) {
  //   setValues(oldValues => ({
  //     ...oldValues,
  //     [event.target.name]: event.target.value
  //   }));
  // }
  const { name, label, values, attributes, handleChange } = props;
  if (!attributes) return <Loading />;
  console.log(values);
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl
        required={props.required}
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          {label}
        </InputLabel>
        <Select
          value={values}
          onChange={handleChange}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name={name}
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {attributes.map(attribute => {
            return (
              <MenuItem key={attribute.key} value={attribute.key}>
                {attribute.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
}

export default SimpleSelect;
