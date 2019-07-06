import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Navbar from "./components/Nav/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import BicycleCreate from "./components/Classifieds/BicycleOffer/BicycleCreate";
import BicycleEdit from "./components/Classifieds/BicycleOffer/BicycleEdit";
import SearchForm from "./components/Classifieds/BicycleSearch/SearchForm";
import SearchResults from "./components/Classifieds//BicycleSearch/SearchResults";
import BicycleDetails from "./components/Classifieds/BicycleDetails/BicycleDetails";
import LatestClassifiedsPage from "./components/Classifieds/LatestClassifieds/LatestClassifiedsPage";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/bicycle/create" component={BicycleCreate} />
          <Route path="/bicycle/search" component={SearchForm} />
          <Route path="/bicycle/edit/:id" component={BicycleEdit} />
          <Route path="/bicycles" component={SearchResults} />
          <Route path="/bicycle/:id" component={BicycleDetails} />
          <Route path="/classifieds/latest" component={LatestClassifiedsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
