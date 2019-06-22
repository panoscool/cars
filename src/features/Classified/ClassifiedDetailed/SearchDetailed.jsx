import React from "react";
import { Container, Grid } from "@material-ui/core";
import ClassifiedList from "../ClassifiedList/ClassifiedList";
import SideFilters from "../SideFilters/SideFilters";
const SearchDetailed = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <SideFilters />
        </Grid>
        <Grid item xs={8}>
          <ClassifiedList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchDetailed;
