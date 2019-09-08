import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SigninPage from "./components/Authentication/SigninPage";
import SignupPage from "./components/Authentication/SignupPage";
import HomePage from "./components/Home/HomePage";
import BicycleCreate from "./components/Classifieds/BicycleOffer/BicycleCreate";
import BicycleEdit from "./components/Classifieds/BicycleOffer/BicycleEdit";
import SearchForm from "./components/Classifieds/BicycleSearch/SearchForm";
import SearchResults from "./components/Classifieds//BicycleSearch/SearchResults";
import BicycleDetails from "./components/Classifieds/BicycleDetails/BicycleDetails";
import LatestClassifiedsPage from "./components/Classifieds/LatestClassifieds/LatestClassifiedsPage";
import Contact from "./components/Informations/Contact";
import MarketGuide from "./components/Informations/MarketGuide";
import UsersFAQ from "./components/Informations/UsersFAQ";

function App() {
  return (
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
  );
}

export default App;
