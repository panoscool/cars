import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CloudUpload } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "grey"
  }
}));

function UploadForm() {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  function handleChange(e) {
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
  }

  function handleSubmit(e) {
    e.prevetnDefault();
    const formData = new FormData();
    formData.append("file", file);
  }

  console.log(file, fileName);
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          accept="image/*"
          className={classes.input}
          id="outlined-button-file"
          multiple
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="outlined-button-file">
          <Button
            type="submit"
            variant="outlined"
            component="span"
            className={classes.button}
          >
            <CloudUpload className={classes.icon} />
            Upload Photos
          </Button>
        </label>
      </form>
      {fileName}
    </Fragment>
  );
}

export default UploadForm;
