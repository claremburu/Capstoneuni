import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard"; // this is one of the many componets that you are gonna render here
import PageNotfound from "./components/PageNotFound";
import Donor from "./components/Donor/Donor";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";

export default function App() {
  return (
    <div className="container">
      {/* this is the everall div of your website e.g with className = "container" */}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/Donor" component={Donor} />
        <Route path="/User" component={User} />
        <Route path="/Admin" component={Admin} />
        <Route component={PageNotfound} />
      </Switch>
    </div>
  );
}
