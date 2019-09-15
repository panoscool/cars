import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Divider
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

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
      <ListItem
        color="secondary"
        component={Link}
        to={`/bicycle/${id}`}
        alignItems="flex-start"
      >
        <ListItemAvatar>
          <img className="list-view-image" alt={title} src={img} />
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
        <ListItemSecondaryAction>
          <IconButton
            component={Link}
            to={`/bicycle/edit/${id}`}
            edge="end"
            aria-label="Edit"
          >
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default AlignItemsList;
