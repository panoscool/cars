import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Typography,
  Divider,
  Tooltip
} from "@material-ui/core";
import { DirectionsBike, CalendarToday } from "@material-ui/icons";
import { bicycles } from "../../data/SampleData";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    width: "100%"
  },
  typography: {
    marginLeft: 16,
    marginTop: 16
  },
  attention: {
    backgroundColor: "#FFFF66"
  },
  sideInfos: {
    color: "green",
    textAlign: "center"
  },
  align: {
    textAlign: "center"
  }
}));

const infoArray = [
  { label: "Manufacturer", key: "manufacturer" },
  { label: "Category", key: "category" },
  { label: "Purchased", key: "purchased" },
  { label: "Price", key: "price" },
  { label: "Previous owners", key: "owners" },
  { label: "Color", key: "color" },
  { label: "Frame size", key: "frameSize" },
  { label: "Frame type", key: "frameType" },
  { label: "Gears", key: "gears" },
  { label: "Rim size", key: "rimSize" },
  { label: "Modified", key: "modified" },
  { label: "Times clicked", key: "timesClicked" },
  { label: "Classified ID", key: "id" }
];

const userDetails = [
  { label: "Name", key: "userName" },
  { label: "Location", key: "location" },
  { label: "Phone", key: "phone1" }
];

const BicycleDetails = props => {
  const classes = useStyles();
  const bicycleObj = bicycles[props.match.params.id - 1];
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <img src={bicycleObj.img} alt="" />
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.typography}
              >
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
                        <TableCell align="left">
                          {bicycleObj[info.key]}
                        </TableCell>
                      </TableRow>
                    ) : null;
                  })}
                </TableBody>
              </Table>
            </Paper>
          </div>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Table className={classes.table} size="small">
                <TableBody>
                  <TableRow className={classes.attention}>
                    <TableCell colSpan="2">
                      Do not send a downpayment if you haven't carefully read
                      the market <Link to="/market-guide">guide</Link>!
                    </TableCell>
                  </TableRow>
                  {userDetails.map((info, index) => {
                    return bicycleObj[info.key] ? (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {info.label}:
                        </TableCell>
                        <TableCell align="left">
                          {bicycleObj[info.key]}
                        </TableCell>
                      </TableRow>
                    ) : null;
                  })}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Table className={classes.table} size="small">
                <TableBody>
                  <TableRow>
                    <TableCell colSpan="2">
                      <h2 className={classes.sideInfos}>
                        &euro; {bicycleObj.price}
                      </h2>
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
                      <Tooltip title="Category" placement="left">
                        <DirectionsBike color="primary" fontSize="large" />
                      </Tooltip>
                      <br />
                      {bicycleObj.category}
                    </TableCell>
                  </TableRow>
                  {userDetails.map((info, index) => {
                    return bicycleObj[info.key] ? (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {info.label}:
                        </TableCell>
                        <TableCell align="left">
                          {bicycleObj[info.key]}
                        </TableCell>
                      </TableRow>
                    ) : null;
                  })}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BicycleDetails;
