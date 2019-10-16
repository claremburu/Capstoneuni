/* eslint-disable arrow-parens */
/* eslint-disable quotes */
import React from "react";
import "../../css/materialize.min.css";

import useForm from "../CustomHooks/CustomHooks";

const UserDashboard = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm(saveData);

  function addProject(data) {
    fetch(`/api/user/project`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (data) alert(`Project added successfully`);
        alert("unable add the Project");
      })

      .catch(err => {
        console.log(err);
        alert("unable add the Project");
      });
  }

  function saveData() {
    addProject(inputs);
  }
  return (
    <div>
      <div>
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
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form className="col s4 offset-s1" onSubmit={handleSubmit}>
              <h3>Add Project</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="title"
                    type="email"
                    className="validate"
                    name="title"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="description"
                    className="materialize-textarea"
                    onChange={handleInputChange}
                    name="description"
                    defaultValue={""}
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              {/* <span>File</span>
              <input type="file" name="document" />
              <input type="submit" /> */}
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
            onClick={handleSubmit}
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
      </div>
      ;
    </div>
  );
};

export default UserDashboard;
