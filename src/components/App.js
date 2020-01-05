import React from "react";
import "./App.scss";
import Header from "./Header";
import Home from "../routes/Home";
import About from "../routes/About";
import Portfolio from "../routes/Portfolio";
import Experience from "../routes/Experience";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/experience" component={Experience} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
