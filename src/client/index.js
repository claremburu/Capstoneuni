import React from "react";
import ReactDOM, { render } from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// please do not add any other files in this component

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
); // this  renders and paste the compoenent to the DOM
