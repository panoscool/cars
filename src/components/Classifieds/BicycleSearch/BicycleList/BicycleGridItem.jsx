import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 340
  },
  media: {
    height: "auto",
    width: 210,
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { title, price, category, img, id } = props;
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
            <span>
              &euro; {price} &bull; {category}
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
