import React, { useState, useEffect } from 'react';
import '../../css/materialize.min.css';
import { Button, Card, Row, Col, Container } from 'react-materialize';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Link } from "react-router-dom";

export default function User() {
  return (

    <Router>
    <div>
      <ul>
        <li>
          <Link to="/Dashboard">Home</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
        </li>
        <li>
          <Link to="/Donor">Donor</Link>
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
        <Route exact path="/Dashboard">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

function UserDashboard(){
  return(
    <div>
          <div>
      <div>
  <title>Inter-Uni</title>
  <link rel="stylesheet" href="../css/materialize.min.css" />
  <nav className="blue">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        Inter-Uni
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="user-dashboard.html">User</a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container white" style={{ minHeight: 800 }}>
    <div className="row">
      <div className="col s7">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s9">
              <input id="search" type="email" className="validate" />
              <label htmlFor="search">Search</label>
            </div>
            <div className="input-field col s3">
              <button
                id="search-btn"
                type="button"
                className="waves-effect waves-light btn"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="col s12" id="projects-container">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="col s4 offset-s1">
        <h3>Add Project</h3>
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="email" className="validate" />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="description"
              className="materialize-textarea"
              defaultValue={""}
            />
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <span>File</span>
        <input type="file" name="document" />
        <input type="submit" />
      </form>
      {/* <div class="file-field input-field">
						<form method="POST" action="/submit-form">
						<span>File</span>
						<input type="file" name="document" />
						<input type="submit" />
					  </form>
						
						</div> */}
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
    <button
      id="add-project-btn"
      type="button"
      className="waves-effect waves-light btn"
    >
      Add Project
    </button>
    <button
      id="add-project-btn"
      type="button"
      className="waves-effect waves-light btn"
    >
      View Funding opportunities
    </button>
    <button
      id="add-project-btn"
      type="button"
      className="waves-effect waves-light btn"
    >
      Apply for funding
    </button>
  </div>
  {/* Compiled and minified JavaScript */}
</div>;

    </div>
  )
}
    </div>
  );
}
