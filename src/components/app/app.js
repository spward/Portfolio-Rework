import React from "react";
import "./app.css";
import Header from "./header";
import Home from "../../routes/home";
import Portfolio from "../../routes/portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
