/* eslint-disable quotes */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./components/User/UserDashboard"; // this is one of the many componets that you are gonna render here
// import AboutPage from "./components/About/AboutPage";
import PageNotfound from "./components/PageNotFound";
import SignUp from "./components/SignUp/SignUp";
import donorDashboard from "./components/Donor/DonorDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import HomePage from "./components/Homepage/HomePage";
import applyFunds from "./components/applyFunds/applyFunds";
import "./css/styles.css";

export default function App() {
  return (
    <div className="container">
      {/* this is the everall div of your website e.g with className = "container" */}
      <Switch>
      <Route exact path="/" component={HomePage} />
        <Route exact path="/user-dashboard" component={Dashboard} />
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/login-signup" component={SignUp} />
        <Route path="/donor-dashboard" component={donorDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/apply-funds" component={applyFunds} />

        <Route component={PageNotfound} />
      </Switch>
    </div>
  );
}
