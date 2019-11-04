/* eslint-disable arrow-parens */
/* eslint-disable quotes */
import React from "react";
import { Link } from "react-router-dom";

import "../../css/materialize.min.css";

import useForm from "../CustomHooks/CustomHooks";

import useFetch from "../CustomHooks/useFetchHook";

const UserDashboard = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm(saveData);
  const res = useFetch("/api/user/project/", {});
  const dayta = res.response;
  const filtered = dayta && dayta.filter( project => {
    if(inputs.search !== undefined){
      return project.title.toLowerCase().includes(inputs.search.toLowerCase());
    }else{
      return project;
    }
   
  });
  console.log("dayta ",dayta);

  function addProject(data) {
    console.log(data);
    fetch(`/api/user/project/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (data) alert(`Project added successfully`);
      })

      .catch(err => {
        console.log(err);
        alert(`Unable to add Project: ${err.message}`);
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
              <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s9">
                    <input id="search" type="email" className="validate" name="search"  onChange={handleInputChange} />
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
              {filtered &&
                filtered.map(item => (
                  <div
                    className="col s12"
                    id="projects-container"
                    key={item._id}
                  >
                    <div className="card">
                      <div className="card-content">
                        <span className="card-title">{item.title}</span>
                        <h4>{item.abstract}</h4>
                        <h3>{item.theme}</h3>
                        {"Status: " + item.status}
                        <span>{item.myImage}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <form className="col s4 offset-s1" onSubmit={handleSubmit}>
              <h3>Add Project</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="title"
                    type="text"
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
                    id="abst"
                    className="materialize-textarea"
                    onChange={handleInputChange}
                    name="abstract"
                    defaultValue=""
                  />
                  <label htmlFor="abstarct">Abstract</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="theme"
                    className="materialize-textarea text-bold"
                    onChange={handleInputChange}
                    name="theme"
                    defaultValue=""
                  />
                  <label htmlFor="theme">Theme</label>
                </div>
              </div>
              <form
                action="/uploadfile"
                encType="multipart/form-data"
                method="POST"
              >
                Select File: <input type="file" name="myFile" />
                <input type="submit" defaultValue="Upload a file" />
              </form>
              {/* MULTIPLE FILES */}
              <form
                action="/uploadmultiple"
                encType="multipart/form-data"
                method="POST"
              >
                Select files: <input type="file" name="myFiles" multiple />
                <input type="submit" defaultValue="Upload your files" />
              </form>
              {/*   PHOTO */}
              <form
                action="/upload/photo"
                encType="multipart/form-data"
                method="POST"
              >
                Select Image:
                <input type="file" name="myImage" accept="image/*" />
                <input type="submit" defaultValue="Upload Photo" />
              </form>
            </form>

            {/* <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div> */}
          </div>
          <button
            id="add-project-btn"
            type="button"
            className="waves-effect waves-light btn"
            onClick={handleSubmit}
          >
            Add Project
          </button>
          <Link to="/funding-opportunities" className="btn btn-primary">
            View Funding Opportunities
          </Link>
          {/* <button
            id="add-project-btn"
            type="button"
            className="waves-effect waves-light btn"
          >
            View Funding opportunities
          </button> */}
          {/* <button
            id="apply-funds-btn"
            type="button"
            className="waves-effect waves-light btn"
            // onClick = {this.applyFunds}
          >
            Apply for funding
          </button> */}
          <Link to="/apply-funds" className="btn btn-primary">
            Apply for Funding
          </Link>
          {/* applyFunds = () => {
              <NavLink to="/applyFunds"> Apply For Funds </NavLink>
            } */}
        </div>
        {/* Compiled and minified JavaScript */}
      </div>
      ;
    </div>
  );
};

export default UserDashboard;
