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
import useWindowDimensions from "../../../app/common/hooks/useWindowDimensions";
import SelectForm from "../../../app/common/forms/SelectForm";
import { sort } from "../../../app/data/SharedAttributes";
import ClassifiedList from "../ClassifiedList/ClassifiedList";
import SideFilters from "../SideFilters/SideFilters";
import Tooltip from "../../../app/common/tooltip/Tooltip";
import Wrapper from "../SideFilters/Wrapper";

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

const SearchDetailed = () => {
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
            <Wrapper label="test1">
              <SelectForm
                name="sort"
                label="Sort"
                values={selectValues.sort}
                attributes={sort}
                handleChange={handleSelectChange}
              />
            </Wrapper>
            <Wrapper label="test2">
              <SelectForm
                name="sort"
                label="Sort"
                values={selectValues.sort}
                attributes={sort}
                handleChange={handleSelectChange}
              />
            </Wrapper>
            <Wrapper label="test3">
              <SelectForm
                name="sort"
                label="Sort"
                values={selectValues.sort}
                attributes={sort}
                handleChange={handleSelectChange}
              />
            </Wrapper>
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
              variant="extended"
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
              <Button
                variant="extended"
                size="small"
                className={classes.button}
              >
                <ViewList className={classes.extendedIcon} />
                List
              </Button>
              <Button
                variant="extended"
                size="small"
                className={classes.button}
              >
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
          <ClassifiedList />
        </Grid>
      </Grid>
      <Hidden smUp>
        <Tooltip />
      </Hidden>
    </Container>
  );
};

export default SearchDetailed;
