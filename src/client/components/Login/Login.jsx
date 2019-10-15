/* eslint-disable quotes */
/* eslint-disable arrow-parens */
import React from "react";
import useSignUpForm from "../CustomHooks/CustomHooks";

const Login = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    handleLogin
  );

  function handleLogin() {
    // perform some fetch apis that sends the authentication details to the database
    return console.log(inputs);
  }

  return (
    <div className="w3">
      <div className="signin-form profile">
        <h3>Login</h3>
        <div className="login-form">
          <form action="/" method="post" onSubmit={handleSubmit}>
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
              required
            />
            <div className="tp">
              <input type="submit" defaultValue="LOGIN NOW" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
