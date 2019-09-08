import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
  Hidden
} from "@material-ui/core";
import { DirectionsBike, ViewList, ViewModule } from "@material-ui/icons";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SelectForm from "../../Shared/forms/SelectForm";
import Modal from "../../Shared/modal/Modal";
import { sort } from "../../../data/SharedAttributes";
import BicycleList from "./BicycleList/BicycleList";
import SideFilters from "./SideFilters/SideFilters";
import { fetchBicycles } from "../../../store/actions/bicycleActions";

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

const SearchResults = ({ fetchBicycles, bicycles }) => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetchBicycles();
  }, [fetchBicycles]);

  const [selectValues, setSelectValues] = useState({
    sort: "newest"
  });

  const handleSelectChange = event => {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const [view, setView] = useState(true);

  const handleListView = () => setView(true);
  const handleGridView = () => setView(false);

  const onSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item xs={3}>
            <SideFilters onSubmit={onSubmit} />
          </Grid>
        </Hidden>
        <Grid item xs={width < 960 ? 12 : 9}>
          <Typography variant="h6" style={{ marginTop: 6 }}>
            <IconButton color="inherit">
              <DirectionsBike />
            </IconButton>
            Search Results
          </Typography>
          <Divider variant="fullWidth" component="hr" />
          <div className={classes.inline}>
            <div>
              <Button
                onClick={handleListView}
                variant="text"
                size="small"
                className={classes.button}
              >
                <ViewList className={classes.extendedIcon} />
                List
              </Button>
              <Button
                onClick={handleGridView}
                variant="text"
                size="small"
                className={classes.button}
              >
                <ViewModule className={classes.extendedIcon} />
                Grid
              </Button>
            </div>
            <div>
              <SelectForm
                name="sort"
                label="Sort"
                values={selectValues.sort}
                optionsArray={sort}
                handleChange={handleSelectChange}
              />
            </div>
          </div>
          <BicycleList view={view} bicycles={bicycles} />
        </Grid>
      </Grid>
      <Hidden mdUp>
        <div className="filter-button">
          <Modal onFormSubmit={onSubmit}>
            <SideFilters />
          </Modal>
        </div>
      </Hidden>
    </Container>
  );
};

const mapStateToProps = ({ bicycle }) => ({
  bicycles: bicycle.bicycles
});

export default connect(
  mapStateToProps,
  { fetchBicycles }
)(SearchResults);
