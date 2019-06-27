import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
  Hidden
} from "@material-ui/core";
import {
  DirectionsBike,
  Search,
  ViewList,
  ViewModule
} from "@material-ui/icons";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SelectForm from "../../../common/forms/SelectForm";
import { sort } from "../../../data/SharedAttributes";
import BicycleList from "./BicycleList/BicycleList";
import SideFilters from "./SideFilters/SideFilters";
import Tooltip from "../../../common/tooltip/Tooltip";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2)
  },
  inline: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const SearchResults = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const [selectValues, setSelectValues] = useState({
    sort: "newest"
  });

  const handleSelectChange = event => {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  let gridSize = 9;
  if (width < 960) {
    gridSize = 12;
  }
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item xs={3}>
            <SideFilters />
          </Grid>
        </Hidden>
        <Grid item xs={gridSize}>
          <div className={classes.inline}>
            <Typography variant="h6" gutterBottom>
              <IconButton color="inherit">
                <DirectionsBike />
              </IconButton>
              Search Results
            </Typography>
            <Button
              component={Link}
              to="/bicycles/search"
              variant="text"
              size="small"
              className={classes.margin}
            >
              <Search className={classes.extendedIcon} />
              Change Search
            </Button>
          </div>
          <Divider variant="fullWidth" component="hr" />
          <div className={classes.inline}>
            <div>
              <Button variant="text" size="small" className={classes.button}>
                <ViewList className={classes.extendedIcon} />
                List
              </Button>
              <Button variant="text" size="small" className={classes.button}>
                <ViewModule className={classes.extendedIcon} />
                Gallery
              </Button>
            </div>
            <div>
              <SelectForm
                name="sort"
                label="Sort"
                values={selectValues.sort}
                attributes={sort}
                handleChange={handleSelectChange}
              />
            </div>
          </div>
          <BicycleList />
        </Grid>
      </Grid>
      <Hidden smUp>
        <Tooltip />
      </Hidden>
    </Container>
  );
};

export default SearchResults;
