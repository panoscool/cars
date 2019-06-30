import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { img, title, price, id } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`/bicycle/${id}`}>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          height="120"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span> &euro; {price} &bull; 5 seconds </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
