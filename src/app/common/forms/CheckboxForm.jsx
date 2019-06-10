import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

function Checkboxes() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{
          "aria-label": "primary checkbox"
        }}
      />
    </div>
  );
}

export default Checkboxes;
