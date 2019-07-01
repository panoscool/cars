import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(1),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(1)
  },
  table: {
    width: "100%"
  },
  title: {
    marginLeft: 16,
    marginTop: 16
  }
}));

const ClassifiedDetails = props => {
  const classes = useStyles();
  const { infoArray, bicycleObj } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Classified Details
        </Typography>
        <Divider variant="fullWidth" />
        <Table className={classes.table} size="small">
          <TableBody>
            {infoArray.map((info, index) => {
              return bicycleObj[info.key] ? (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {info.label}:
                  </TableCell>
                  <TableCell align="left">{bicycleObj[info.key]}</TableCell>
                </TableRow>
              ) : null;
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default ClassifiedDetails;
