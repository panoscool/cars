import React from "react";
import { Container, Typography } from "@material-ui/core";
import BicycleForm from "./BicycleForm";

const BicycleEdit = props => {
  const onSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" gutterBottom>
        Edit your bicycle entry
      </Typography>
      <BicycleForm onSubmit={onSubmit} />
    </Container>
  );
};

export default BicycleEdit;
