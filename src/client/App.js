import React, { useState, useEffect } from 'react';
import './css/styles.css';
import { Button, Card, Row, Col, Container } from 'react-materialize';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Card from './card';

const App = () => {
  // I will do the functionality over here

  return (
    <div>
    <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Revolutionizing the housing experience" />
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
            <span className="highlight">InterUni PM </span>System
          </h1>
        </a>
      </div>
      <Router>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
            {/* <Link to={`${auth.js}`}>Register/Login</Link> */}
          </li>
        </ul>
      </nav>
      </Router>
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
</div>;

          </div>
        );
      }
//     // }
//     </div>

//   // );
// // };
export default App;
