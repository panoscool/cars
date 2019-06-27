import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Divider
} from "@material-ui/core";
import history from "../../../../history";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

function AlignItemsList(props) {
  const classes = useStyles();
  const { title, price, category, color, purchased, gears, img, id } = props;

  return (
    <List className={classes.root}>
      <ListItem component={Link} to={`/bicycle/${id}`} alignItems="flex-start">
        <ListItemAvatar>
          <img className="image" alt="" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Fragment>
              {title} {price} {purchased}
            </Fragment>
          }
          secondary={
            <Fragment>
              Category: {category} Color: {color} Gears: {gears}
            </Fragment>
          }
        />
        <Button onClick={() => history.push(`/bicycle/edit/${id}`)}>
          Edit
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default AlignItemsList;
