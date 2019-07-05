import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container } from "@material-ui/core";
import { Search, Edit } from "@material-ui/icons";
import LatestClassifiedList from "../Classifieds/LatestClassifieds/LatestClassifiedList";
import { bicycles } from "../../data/SampleData";

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

const HomePage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.buttons}>
        <Typography>This is the place for some text.</Typography>
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
          <Button size="small" variant="outlined" color="primary">
            See latest classifieds
          </Button>
        </div>
        <div className="latest-classifieds">
          <ul className="horizontal-list">
            {bicycles.map(item => (
              <li key={item.id}>
                <LatestClassifiedList
                  img={item.img}
                  title={item.manufacturer}
                  price={item.price}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
