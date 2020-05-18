import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import About from "./About.js";

const App = () => {
  return (
    <Router>
      <div className="App-header">
      <h2> Piggy Games</h2>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
      </div>
    </Router>
  );
};

export default App;
