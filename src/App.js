import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SigninPage from "./components/Authentication/SigninPage";
import SignupPage from "./components/Authentication/SignupPage";
import HomePage from "./components/Home/HomePage";
import BicycleCreate from "./components/Classified/BicycleOffer/BicycleCreate";
import BicycleEdit from "./components/Classified/BicycleOffer/BicycleEdit";
import SearchForm from "./components/Classified/BicycleSearch/SearchForm";
import SearchResults from "./components/Classified//BicycleSearch/SearchResults";
import BicycleDetails from "./components/Classified/BicycleDetails/BicycleDetails";
import LatestClassifiedsPage from "./components/Classified/LatestClassifieds/LatestClassifiedsPage";
import Contact from "./components/Information/Contact";
import MarketGuide from "./components/Information/MarketGuide";
import UsersFAQ from "./components/Information/UsersFAQ";
import ThemeWrapper from './theme';

function App(props) {
  return (
    <ThemeWrapper>
      <Layout>
        <Switch>
          <Route path="/bicycle/create" component={BicycleCreate} />
          <Route path="/bicycle/search" component={SearchForm} />
          <Route path="/bicycle/edit/:id" component={BicycleEdit} />
          <Route path="/bicycles" component={SearchResults} />
          <Route path="/bicycle/:id" component={BicycleDetails} />
          <Route path="/classifieds/latest" component={LatestClassifiedsPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/market-guide" component={MarketGuide} />
          <Route path="/users-faq" component={UsersFAQ} />
          <Route path="/sign-up" component={SignupPage} />
          <Route path="/sign-in" component={SigninPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Layout>
    </ThemeWrapper>
  );
}

export default App;
