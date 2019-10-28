/* eslint-disable react/button-has-type */
/* eslint-disable arrow-parens */
/* eslint-disable quotes */
import React from "react";
// import "../../css/styles.css";
import "../../css/materialize.min.css";

import useFetch from "../CustomHooks/useFetchHook";
import useForm from "../CustomHooks/CustomHooks";

const AdminDashboard = () => {
  const res = useFetch("/api/user/project", {}); // fetch all the projects from the database

  const { inputs, handleInputChange, handleSubmit } = useForm(updateStatus);

  function updateStatus() {
    fetch(`/api/user/project/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs)
    })
      .then(rawData => rawData.json())
      .then(result => {
        console.log(result);
        if (result) alert(result.message);
      })
      .catch(err => {
        console.log(err);
        alert(`Verification failed ${err.message}`);
      });
  }

  const dayta = res.response;
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
              {dayta &&
                dayta.map(item => (
                  <div
                    className="col s12"
                    id="projects-container"
                    key={item._id}
                  >
                    <div className="card">
                      <div clasasName="card-content">
                        <span className="card-title">{item.title}</span>
                        <h4>{item.abstract}</h4>
                        <h3>{item.theme}</h3>
                        {`Status: ${item.status}`}
                      </div>
                      <div>
                        <form onSubmit={handleSubmit}>
                          <button
                            className="waves-effect waves-light btn"
                            onClick={handleInputChange}
                            name="status"
                            value={{ id: item._id, status: "Approved" }}
                          >
                            <i className="material-icons left">check</i>
                            Approve
                          </button>
                          <button
                            className="waves-effect waves-light btn"
                            name="status"
                            value={{ id: item._id, status: "Rejected" }}
                            onClick={handleInputChange}
                          >
                            <i className="material-icons right">close</i>
                            Reject
                          </button>
                          <button
                            className="waves-effect waves-light btn"
                            type="submit"
                          >
                            Apply
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Compiled and minified JavaScript */}
      </div>
      ;
    </div>
  );
};

export default AdminDashboard;
