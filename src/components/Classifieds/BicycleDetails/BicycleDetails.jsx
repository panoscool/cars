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
  Hidden
} from "@material-ui/core";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SideDetails from "./SideDetails";
import SimilarClassifieds from "./SimilarClassifieds";
import { bicycles } from "../../../data/SampleData";

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
    backgroundColor: "#FFFF66"
  },
  description: {
    padding: 16
  }
}));

const infoArray = [
  { label: "Manufacturer", key: "manufacturer" },
  { label: "Price", key: "price" },
  { label: "Condition", key: "condition" },
  { label: "Category", key: "category" },
  { label: "Purchased", key: "purchased" },
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
  const width = useWindowDimensions();
  const bicycleObj = bicycles[props.match.params.id - 1];

  let gridSize = 9;
  if (width < 960) {
    gridSize = 12;
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={gridSize}>
          <img src={bicycleObj.img} alt="" />
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.tableTitle}
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
            <Paper className={classes.paper}>
              <Typography variant="body2" className={classes.description}>
                {bicycleObj.description}
              </Typography>
            </Paper>
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
        <Hidden smDown>
          <Grid item xs={3}>
            <SideDetails bicycleObj={bicycleObj} userDetails={userDetails} />
            {bicycles.map(item => (
              <SimilarClassifieds
                key={item.id}
                img={item.img}
                title={item.manufacturer}
                price={item.price}
                purchased={item.purchased}
              />
            ))}
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default BicycleDetails;
