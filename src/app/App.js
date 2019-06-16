import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../features/Nav/Navbar/Navbar";
import HomePage from "../features/Home/HomePage";
import BicycleCreate from "../features/Classified/ClassifiedCreate/BicycleCreate";
import BicycleSearch from "../features/Classified/ClassifiedSearch/BicycleSearch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/bicycles/search" component={BicycleSearch} />
        <Route path="/bicycle/create" component={BicycleCreate} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
