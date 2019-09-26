import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    objectFit: "fill"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { manufacturer, price, category, img, id } = props;
  return (
    <Card className="card">
      <CardActionArea component={Link} to={`/bicycle/${id}`}>
        <CardMedia
          className={classes.media}
          component="img"
          alt={manufacturer}
          height="120"
          image={img}
          title={manufacturer}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {manufacturer}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span> &euro; {price} &bull; {category} </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
