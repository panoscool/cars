import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const {
    title,
    price,
    category,
    color,
    clicked,
    purchased,
    gears,
    img
  } = props;

  return (
    <List className={classes.root}>
      <ListItem button onClick={clicked} alignItems="flex-start">
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
        test
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
