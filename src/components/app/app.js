import React from "react";
import "./app.css";
import Header from "./header";
import Home from "../../routes/home";
import About from "../../routes/about";
import Portfolio from "../../routes/portfolio";
import Experience from "../../routes/experience";
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
