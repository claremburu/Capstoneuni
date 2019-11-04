/* eslint-disable quotes */
import React, { useEffect } from "react";
import "../../css/materialize.min.css";
import useForm from "../CustomHooks/CustomHooks";
import useFetch from "../CustomHooks/useFetchHook";

const DonorDashboard = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm(saveData);
  const res = useFetch("/api/projects", {});

  
  //console.log(res.response);

  function addFunds(data) {
    fetch(`/api/donor/funds`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (data) alert(`Advert added successfully`);
      })
      .catch(err => {
        console.log(err);
        alert("unable to add Advert");
      });
  }

  function saveData() {
    addFunds(inputs);
  }

  // fetching from the database to the state
  const dayta = res.response;
  return (
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
              {dayta &&
                dayta.map(item => {
                  return (
                    <div
                      className="col s12"
                      id="projects-container"
                      key={item._id}
                    >
                      <div className="card">
                        <div className="card-content">
                          <span className="card-title">{item.title}</span>
                          <p>{item.description}</p>
                          <p>{item.qualifications}</p>
                          {/* <p>{item.applicationDeadline}</p> */}
                          <p>{item.awardAmount}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <form className="col s4 offset-s1" onSubmit={handleSubmit}>
              <h3>Add Advert</h3>
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
                    id="description"
                    name="description"
                    onChange={handleInputChange}
                    className="materialize-textarea"
                    defaultValue=""
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="qualifications"
                    name="qualifications"
                    onChange={handleInputChange}
                    className="materialize-textarea"
                    defaultValue=""
                  />
                  <label htmlFor="description">Qualifications</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="date"
                    id="applicationDeadline"
                    name="applicationDeadline"
                    onChange={handleInputChange}
                    className="materialize-textarea"
                    defaultValue=""
                  />
                  <label htmlFor="description">Application Deadline</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    id="awardAmount"
                    name="awardAmout"
                    onChange={handleInputChange}
                    className="materialize-textarea"
                    defaultValue=""
                  />
                  <label htmlFor="description">Award Amount</label>
                </div>
              </div>

              <button
                id="add-project-btn"
                type="submit"
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
      </div>
      ;
    </div>
  );
};

export default DonorDashboard;
