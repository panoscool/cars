import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container } from "@material-ui/core";
import { Search, Edit } from "@material-ui/icons";
import HomeCarousel from "../Classified/ClassifiedDetailed/HomeCarousel";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(8)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div style={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" className={classes.button}>
          <Search className={classes.leftIcon} />
          Search
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          <Edit className={classes.leftIcon} />
          Offer
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20
          }}
        >
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
              <HomeCarousel />
            </li>
            <li>
              <HomeCarousel />
            </li>
            <li>
              <HomeCarousel />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
