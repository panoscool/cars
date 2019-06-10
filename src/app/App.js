import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../features/Nav/Navbar/Navbar";
import HomePage from "../features/Home/HomePage";
import CarCreate from "../features/Classified/ClassifiedCreate/CarCreate";
import TestComponent from "../testarea/TestComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/car/create" component={CarCreate} />
        <Route path="/testarea" component={TestComponent} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
