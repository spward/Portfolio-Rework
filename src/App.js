import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Experience from "./components/pages/Experience";
import Project from "./components/pages/Project";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/project/" component={Project} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
