import React, { useState, useEffect } from 'react';
import '../../css/authstyles.css';
import { Button, Card, Row, Col, Container } from 'react-materialize';

export default function Admin() {
  return (
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
  );
}