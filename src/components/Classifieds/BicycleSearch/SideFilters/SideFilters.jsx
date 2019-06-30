import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import CheckboxForm from "../../../../shared/forms/CheckboxForm";
import SelectForm from "../../../../shared/forms/SelectForm";
import InputForm from "../../../../shared/forms/InputForm";
import {
  offer,
  condition,
  color,
  modified
} from "../../../../data/SharedAttributes";
import {
  manufacturers,
  brakeType,
  category,
  gears
} from "../../../../data/bicycle/bicycle";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowY: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Offer type</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            {offer.map(obj => (
              <Grid item xs={12} key={obj.key} style={{ marginLeft: 16 }}>
                <CheckboxForm
                  name={obj.key}
                  value={obj.key}
                  label={obj.value}
                  labelPlacement="end"
                  // handleChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Condition</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {condition.map(obj => (
            <CheckboxForm
              key={obj.key}
              name={obj.key}
              value={obj.key}
              label={obj.value}
              labelPlacement="end"
              // handleChange={handleChange}
            />
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Manufacturer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SelectForm
            name="manufacturer"
            label="Manufacturers"
            // values={selectValues.offer}
            attributes={manufacturers}
            // handleChange={handleSelectChange}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Color</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SelectForm
            name="color"
            label="Color"
            // values={selectValues.offer}
            attributes={color}
            // handleChange={handleSelectChange}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Brakes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            {brakeType.map(obj => (
              <Grid item xs={12} key={obj.key} style={{ marginLeft: 16 }}>
                <CheckboxForm
                  name={obj.key}
                  value={obj.key}
                  label={obj.value}
                  labelPlacement="end"
                  // handleChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Category</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SelectForm
            name="category"
            label="Category"
            // values={selectValues.offer}
            attributes={category}
            // handleChange={handleSelectChange}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Modified</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            {modified.map(obj => (
              <Grid item xs={12} key={obj.key} style={{ marginLeft: 16 }}>
                <CheckboxForm
                  name={obj.key}
                  value={obj.key}
                  label={obj.value}
                  labelPlacement="end"
                  // handleChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Gears</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            {gears.map(obj => (
              <Grid item xs={12} key={obj.key} style={{ marginLeft: 16 }}>
                <CheckboxForm
                  name={obj.key}
                  value={obj.key}
                  label={obj.value}
                  labelPlacement="end"
                  // handleChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Variant</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <InputForm
            name="variant"
            label="Variant"
            placeholder="eg. racing"
            // values={inputValues.variant}
            // handleChange={handleInputChange}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Price</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputForm
                name="priceFrom"
                label="Price from"
                // values={inputValues.priceFrom}
                // handleChange={handleInputChange}
              />
              <InputForm
                name="priceTo"
                label="Price to"
                // values={inputValues.priceTo}
                // handleChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
