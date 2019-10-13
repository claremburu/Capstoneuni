import React, { useState, useEffect } from 'react';
import './css/authstyles.css';
import { Button, Card, Row, Col, Container } from 'react-materialize';

const auth = () => {
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
    href="css/authstyles.css"
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
    </p>
  </div>
</div>;

        </div>

    );
}
export default auth;