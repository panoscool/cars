import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import bicycle from "../../assets/images/bicycle.jfif";

const useStyles = makeStyles({
  card: {
    maxWidth: 340
  },
  media: {
    height: "auto",
    width: 100,
    paddingTop: 20,
    paddingLeft: 20
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="120"
          image={bicycle}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span> &euro; 10 &bull; 5 seconds </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
