import React from "react";
import { Container, Typography } from "@material-ui/core";
import BicycleForm from "./BicycleForm";

const BicycleCreate = props => {
  const onSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Add a new bicycle
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The fields marked with * are required. Photographs are entered after you
        submit the details of the classified.
      </Typography>
      <BicycleForm onSubmit={onSubmit} />
    </Container>
  );
};

export default BicycleCreate;
