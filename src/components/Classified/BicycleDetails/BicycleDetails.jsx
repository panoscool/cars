import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { Container, Grid, Hidden } from "@material-ui/core";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ClassifiedDetails from "./ClassifiedDetails";
import ExtraDetails from "./ExtrasDetails";
import DescriptionDetails from "./DescriptionDetails";
import SellerDetails from "./SellerDetails";
import SideDetails from "./SideDetails/SideDetails";
import SimilarClassifieds from "./SideDetails/SimilarClassifieds";
import { infoArray, sellerDetails, checkBoxes } from "./InfoDataArray";
import ImageCarousel from "./ImageCarousel";
import { fetchBicycle } from '../../../store/actions/bicycleActions'

const BicycleDetails = props => {
  const { width } = useWindowDimensions();

  const { fetchBicycle, match: { params }, bicycle } = props

  useEffect(() => {
    fetchBicycle(params.id)
  }, [params.id, fetchBicycle])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={width < 960 ? 12 : 9}>
          <ImageCarousel />
          <ClassifiedDetails infoArray={infoArray} bicycleObj={bicycle} />
          <ExtraDetails checkBoxes={checkBoxes} bicycleObj={bicycle} />
          <DescriptionDetails bicycleObj={bicycle} />
          <SellerDetails
            sellerDetails={sellerDetails}
            bicycleObj={bicycle}
          />
        </Grid>
        <Hidden smDown>
          <Grid item xs={3}>
            <SideDetails
              bicycleObj={bicycle}
              sellerDetails={sellerDetails}
            />
            <SimilarClassifieds />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ bicycleReducer }) => ({
  bicycle: bicycleReducer.bicycle
})

export default connect(mapStateToProps, { fetchBicycle })(BicycleDetails);
