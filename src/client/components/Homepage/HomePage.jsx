import React, { Component } from "react";
import { Button, Card, Row, Col, Container } from "react-materialize";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import "../../css/styles.css";

const HomePage = () => {
  // I will do the functionality over here

  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
            <li>
              <Link to="/Donor">Donor</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/Auth">Auth</Link>
            </li>
          </ul>

          <hr />

          {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/User">
              <User />
            </Route>
            <Route path="/Donor">
              <Donor />
            </Route>
            <Route path="/Admin"></Route>
            <Route path="/Auth"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default HomePage;
