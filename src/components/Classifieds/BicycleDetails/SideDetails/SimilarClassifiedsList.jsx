import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemAvatar, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const SimilarClassifiedsList = props => {
  const classes = useStyles();
  const { title, price, purchased, img, id } = props;

  return (
    <List className={classes.root}>
      <ListItem component={Link} to={`/bicycle/${id}`} alignItems="flex-start">
        <ListItemAvatar>
          <img className="list-view-image" alt={title} src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Fragment>
              {title} {purchased}
            </Fragment>
          }
          secondary={<Fragment>&euro; {price}</Fragment>}
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </List>
  );
};

export default SimilarClassifiedsList;
