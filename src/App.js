import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Navbar from "./components/Nav/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import BicycleCreate from "./components/Classifieds/BicycleCreate";
import SearchForm from "./components/Classifieds/BicycleSearch/SearchForm";
import SearchResults from "./components/Classifieds//BicycleSearch/SearchResults";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/bicycle/create" component={BicycleCreate} />
          <Route path="/bicycle/search" component={SearchForm} />
          <Route path="/bicycle/edit/:id" component={BicycleCreate} />
          <Route path="/bicycles" component={SearchResults} />
          <Route path="/bicycle/:id" component={SearchResults} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
