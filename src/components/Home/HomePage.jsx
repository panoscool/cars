import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container } from "@material-ui/core";
import { Search, Edit } from "@material-ui/icons";
import LatestClassifiedList from "../Classified/LatestClassifieds/LatestClassifiedList";
import { fetchBicycles } from '../../store/actions/bicycleActions'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(8)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  buttons: {
    textAlign: "center"
  },
  classifieds: {
    display: "flex",
    marginBottom: 20,
    justifyContent: "space-between"
  }
}));

const HomePage = ({ fetchBicycles, bicycles }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchBicycles()
  }, [fetchBicycles])

  return (
    <Container maxWidth="lg">
      <div className={classes.buttons}>
        <Button
          component={Link}
          to="/bicycle/search"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Search className={classes.leftIcon} />
          Search
        </Button>
        <Button
          component={Link}
          to="/bicycle/create"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Edit className={classes.leftIcon} />
          Offer
        </Button>
        <div className={classes.classifieds}>
          <Typography gutterBottom variant="h5" component="h2">
            Latest Classifieds
          </Typography>
          <Button
            component={Link}
            to="/classifieds/latest"
            size="small"
            variant="outlined"
            color="secondary"
          >
            Show latest
          </Button>
        </div>
        <div className="latest-classifieds">
          <ul className="horizontal-list">
            {bicycles.map((item, idx) => (
              <li key={idx}>
                <LatestClassifiedList {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ bicycleReducer }) => ({
  bicycles: bicycleReducer.bicycles
})

export default connect(mapStateToProps, { fetchBicycles })(HomePage);
