import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container } from "@material-ui/core";
import { Search, Edit } from "@material-ui/icons";
import ClassifiedLatest from "./ClassifiedLatest";

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
        <Button variant="contained" color="primary" className={classes.button}>
          <Search className={classes.leftIcon} />
          Search
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
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
            <li>
              <ClassifiedLatest />
            </li>
            <li>
              <ClassifiedLatest />
            </li>
            <li>
              <ClassifiedLatest />
            </li>
            <li>
              <ClassifiedLatest />
            </li>
            <li>
              <ClassifiedLatest />
            </li>
            <li>
              <ClassifiedLatest />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
