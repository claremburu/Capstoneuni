/* eslint-disable quotes */
import React from "react";
import "../../css/authstyles.css";
import Login from "../Login/Login";

import useSignUpForm from "../CustomHooks/CustomHooks"; // importing the custom hook

// initiating the form custom hooks

const SignUp = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    handleSignup
  );

  // all callback funcitons should always be defined using the function keywords arrow funciton wont work
  function handleSignup() {
    return console.log(inputs);
  }
  return (
    <div>
      <div>
        <h1>User Login/Registration </h1>

        <div className="main">
          <Login />
          <div className="agile">
            <div className="signin-form profile">
              <h3>Register</h3>
              <div className="login-form">
                <form
                  id="login"
                  action="/"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <p id="alert-el" />
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="registration_number"
                    placeholder="RegNo"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="university"
                    placeholder="University"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="Course"
                    placeholder="Course"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    id="password"
                    required
                  />
                  <input
                    type="password"
                    name="passwordConf"
                    placeholder="Confirm Password"
                    onChange={handleInputChange}
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
        </div>
        <div className="copyright">
          <p> © 2019 Capstone InterUni PM . All rights reserved | Design by Patrick Gathara </p>
        </div>
      </div>
      ;
    </div>
  );
};

export default SignUp;
