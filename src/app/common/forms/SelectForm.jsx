import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SimpleSelect(props) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const { name, values, attributes, label, required, handleChange } = props;

  return (
    <FormControl
      required={required}
      variant="outlined"
      className={classes.formControl}
    >
      <InputLabel ref={inputLabel} htmlFor="outlined-select">
        {label}
      </InputLabel>
      <Select
        value={values}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name={name}
            id="outlined-select"
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
  );
}

export default SimpleSelect;
