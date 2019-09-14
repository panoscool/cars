import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
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
  tableTitle: {
    marginLeft: 16,
    marginTop: 16
  },
  attention: {
    backgroundColor: "#ffc107"
  }
}));

const ClassifiedDetails = props => {
  const classes = useStyles();
  const { sellerDetails, bicycleObj } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableBody>
            <TableRow className={classes.attention}>
              <TableCell colSpan="2">
                Do not send a downpayment if you haven't carefully read the
                market <Link to="/market-guide">guide</Link>!
              </TableCell>
            </TableRow>
            {sellerDetails.map((info, index) => {
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
