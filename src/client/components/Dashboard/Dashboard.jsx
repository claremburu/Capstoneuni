import React, { Component } from 'react';
import { Button, Card, Row, Col, Container } from "react-materialize";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Link } from "react-router-dom";

import "../../css/styles.css";

const Dashboard = () => {
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
        <Route path="/Admin">
        </Route>
        <Route path="/Auth">
        </Route>
      </Switch>
    </div>
  </Router>
    </div>
      
  );
};

    function Home(){
      return(
        <div>
          <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Revolutionizing the housing experience"
        />
        <meta
          name="keywords"
          content="housing, rentals, property platform, affordable housing"
        />
        <meta name="author" content="Clare Mburu" />
        <title>InterUni PM System | Welcome</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <header>
          <div className="container">
            <div id="branding">
              <a href="index.html">
                <h1>
                  <span className="highlight">InterUni PM </span>
                  System
                </h1>
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/user">User</Link>
                </li>
                <li>
                  <Link to="/Donor">Donor</Link>
                </li>
                <li>{/* <Link to={`${auth.js}`}>Register/Login</Link> */}</li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="showcase">
          <div className="container">
            <h1>Verify whether your final year project has been done</h1>
            <p>Projects search made easy</p>
          </div>
        </section>
        <div className="searchProperty">
          <input
            name="search"
            aria-label="Search"
            placeholder="What is your research topic?"
          />
          <button type="submit">Verify</button>
          <button type="submit">View related projects</button>
        </div>
      </div>
      ;

        </div>
      )

    }

    function User(){
      return(
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

    function Donor(){
      return(
        <div>
           <div>
  <title>Inter-Uni</title>
  <link rel="stylesheet" href="../../css/materialize.min.css" />
  <nav className="blue">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        Inter-Uni
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="donor-dashboard.html">Donor</a>
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
        <h3>Add Advert</h3>
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="text" className="validate" />
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
        <div className="row">
          <div className="input-field col s12">
            <input id="date" type="text" className="datepicker" />
            <label htmlFor="title">Date</label>
          </div>
        </div>
        {/* <div class="file-field input-field">
						<div class="btn">
							<span>File</span>
							<input type="file" />
						</div>
						<div class="file-path-wrapper">
							<input class="file-path validate" type="text" />
						</div>
					</div> */}
        <button
          id="add-project-btn"
          type="button"
          className="waves-effect waves-light btn"
        >
          Add Advert
        </button>
        <div>
          <button
            id="add-project-btn"
            type="button"
            className="waves-effect waves-light btn"
          >
            Funded Projects
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* Compiled and minified JavaScript */}
</div>;

        </div>
      )
    }
    
    function Admin(){
      return(
        <div>
           <div>
  <title>Inter-Uni</title>
  <link rel="stylesheet" href="/CSS/materialize.min.css" />
  <nav className="blue">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        Inter-Uni
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="admin-dashboard.html">Admin</a>
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
        <button
          id="add-project-btn"
          type="button"
          className="waves-effect waves-light btn"
        >
          Verify Project
        </button>
      </div>
    </div>
  </div>
  {/* Compiled and minified JavaScript */}
</div>;
        </div>
      )
    }

    function Auth(){
      return(
        <div>
          <div>
  <title>Capstone Auth</title>
  {/*Custom Theme files*/}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="keywords" content />
  {/* Custom Theme files */}
  <link
    href="CSS/authstyles.css"
    rel="stylesheet"
    type="text/css"
    media="all"
  />
  {/*web-fonts*/}
  <link
    href="//fonts.googleapis.com/css?family=Jura:400,300,500,600"
    rel="stylesheet"
    type="text/css"
  />
  {/*//web-fonts*/}
  <h1>User Login/Registration🚀 </h1>
  {/* main */}
  <div className="main">
    {/*login-profile*/}
    {/*login-profile*/}
    {/*signin-form*/}
    <div className="w3">
      <div className="signin-form profile">
        <h3>Login</h3>
        <div className="login-form">
          <form action="/" method="post">
            <input type="text" name="logemail" placeholder="E-mail" required />
            <input
              type="password"
              name="logpassword"
              placeholder="Password"
              required
            />
            <div className="tp">
              <input type="button" defaultValue="LOGIN NOW" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="agile">
      <div className="signin-form profile">
        <h3>Register</h3>
        <div className="login-form">
          <form
            id="login"
            action="/"
            method="post"
            onsubmit="event.preventDefault(); validateMyForm();"
          >
            <p id="alert-el" />
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              name="registration_number"
              placeholder="RegNo"
              required
            />
            <input
              type="text"
              name="university"
              placeholder="University"
              required
            />
            <input type="text" name="Course" placeholder="Course" required />
            <input type="text" name="email" placeholder="E-mail" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              required
            />
            <input
              type="password"
              name="passwordConf"
              placeholder="Confirm Password"
              id="password_conf"
              required
            />
            <input type="submit" defaultValue="REGISTER" />
          </form>
        </div>
        <p>
          <a href="#"> By clicking register, I agree to your terms</a>
        </p>
      </div>
    </div>
    <div className="clear" />
    {/*//signin-form*/}
  </div>
  <div className="copyright">
    <p>
      {" "}
      © 2019 Capstone InterUni PM . All rights reserved | Design by{" "}
      <a href="http://w3layouts.com/" target="_blank">
        W3layouts
      </a>
    </p>
  </div>
</div>;
        </div>
      )
    }
export default Dashboard;
