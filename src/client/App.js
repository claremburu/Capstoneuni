import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard"; // this is one of the many componets that you are gonna render here
import AboutPage from "./components/About/AboutPage";
import PageNotfound from "./components/PageNotFound";

export default function App() {
  return (
    <div className="container">
      {/* this is the everall div of your website e.g with className = "container" */}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotfound} />
      </Switch>
    </div>
  );
}
