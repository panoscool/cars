import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../features/Nav/Navbar/Navbar";
import HomePage from "../features/Home/HomePage";
import CarCreate from "../features/Classified/ClassifiedCreate/CarCreate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/car/create" component={CarCreate} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
