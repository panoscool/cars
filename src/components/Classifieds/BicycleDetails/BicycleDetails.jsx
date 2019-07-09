import React from "react";
import { Container, Grid, Hidden } from "@material-ui/core";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ClassifiedDetails from "./ClassifiedDetails";
import ExtraDetails from "./ExtrasDetails";
import DescriptionDetails from "./DescriptionDetails";
import SellerDetails from "./SellerDetails";
import SideDetails from "./SideDetails/SideDetails";
import SimilarClassifieds from "./SideDetails/SimilarClassifieds";
import { infoArray, sellerDetails, checkBoxes } from "./InfoDataArray";
import { bicycles } from "../../../data/SampleData";
import ImageCarousel from "./ImageCarousel";

const BicycleDetails = props => {
  const { width } = useWindowDimensions();

  const bicycleObj = bicycles[props.match.params.id - 1];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={width < 960 ? 12 : 9}>
          <ImageCarousel />
          <ClassifiedDetails infoArray={infoArray} bicycleObj={bicycleObj} />
          <ExtraDetails checkBoxes={checkBoxes} bicycleObj={bicycleObj} />
          <DescriptionDetails bicycleObj={bicycleObj} />
          <SellerDetails
            sellerDetails={sellerDetails}
            bicycleObj={bicycleObj}
          />
        </Grid>
        <Hidden smDown>
          <Grid item xs={3}>
            <SideDetails
              bicycleObj={bicycleObj}
              sellerDetails={sellerDetails}
            />
            {bicycles.map(item => (
              <SimilarClassifieds
                key={item.id}
                id={item.id}
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
