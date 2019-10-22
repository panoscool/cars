import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
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

const BicycleDetails = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const { bicycle } = useSelector(state => state.bicycleReducer);
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(fetchBicycle(params.id));
  }, [params.id, dispatch])

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

export default BicycleDetails;
