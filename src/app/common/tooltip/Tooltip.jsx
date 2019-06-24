import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FilterList } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

function SimpleTooltips(props) {
  const classes = useStyles();
  const { clickBtn } = props;
  return (
    <div>
      <Tooltip title="Filter" aria-label="Filter">
        <Fab onClick={clickBtn} color="primary" className={classes.absolute}>
          <FilterList />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default SimpleTooltips;
