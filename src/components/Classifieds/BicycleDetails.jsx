import React from "react";
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
  Divider
} from "@material-ui/core";
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
    minWidth: 350
  },
  typography: {
    marginLeft: 16,
    marginTop: 16
  }
}));

const BicycleDetails = props => {
  const classes = useStyles();
  const bicycle = bicycles[props.match.params.id - 1];
  console.log(bicycle);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <img src={bicycle.img} alt="" />
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
                  <TableRow>
                    <TableCell>Manufacturer:</TableCell>
                    <TableCell align="left">{bicycle.manufacturer}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Category:</TableCell>
                    <TableCell align="left">{bicycle.category}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Price:
                    </TableCell>
                    <TableCell align="left">&euro; {bicycle.price}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Purchase Date:
                    </TableCell>
                    <TableCell align="left">{bicycle.purchased}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Color:
                    </TableCell>
                    <TableCell align="left">{bicycle.color}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Modified:
                    </TableCell>
                    <TableCell align="left">1 week</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Times clicked:
                    </TableCell>
                    <TableCell align="left">100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Classified ID:</TableCell>
                    <TableCell align="left">{bicycle.id}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={3}>
          right side
        </Grid>
      </Grid>
    </Container>
  );
};

export default BicycleDetails;
