import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Checkboxes(props) {
  const { name, label, values, labelPlacement, handleChange } = props;
  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      control={
        <Checkbox
          name={name}
          value={values}
          onChange={handleChange}
          color="primary"
          inputProps={{
            "aria-label": "primary checkbox"
          }}
        />
      }
    />
  );
}

export default Checkboxes;
