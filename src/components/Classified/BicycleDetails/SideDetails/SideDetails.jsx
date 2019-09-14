import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Table, TableBody, TableRow, TableCell, Tooltip } from "@material-ui/core";
import { DirectionsBike, CalendarToday } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(2),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    width: "100%"
  },
  price: {
    color: "green",
    textAlign: "center"
  },
  align: {
    textAlign: "center"
  }
}));

const SideDetails = props => {
  const classes = useStyles();
  const { bicycleObj, sellerDetails } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableBody>
            <TableRow>
              <TableCell colSpan="2">
                <h2 className={classes.price}>&euro; {bicycleObj.price}</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.align}>
                <Tooltip title="Purchase Date" placement="right">
                  <CalendarToday color="secondary" fontSize="large" />
                </Tooltip>
                <br />
                {bicycleObj.purchased}
              </TableCell>
              <TableCell className={classes.align}>
                <Tooltip title="Manufacturer" placement="left">
                  <DirectionsBike color="primary" fontSize="large" />
                </Tooltip>
                <br />
                {bicycleObj.manufacturer}
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

export default SideDetails;
