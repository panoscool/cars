import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Navbar from "../features/Nav/Navbar/Navbar";
import HomePage from "../features/Home/HomePage";
import Footer from "../features/Footer/Footer";
import BicycleCreate from "../features/Classified/ClassifiedForms/BicycleCreate";
import BicycleSearch from "../features/Classified/ClassifiedForms/BicycleSearch";
import SearchDetailed from "../features/Classified/ClassifiedDetailed/SearchDetailed";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/search" component={SearchDetailed} />
          <Route path="/bicycles/search" component={BicycleSearch} />
          <Route path="/bicycle/create" component={BicycleCreate} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
