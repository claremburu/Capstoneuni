/* eslint-disable quotes */
import React from "react";
// import "../../css/styles.css";
import "../../css/materialize.min.css";
import useFetch from "../CustomHooks/useFetchHook";

const AdminDashboard = () => {
  const res = useFetch("/api/user/project", {});
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
                        </div>
                      </div>
                    </div>
                  );
                })}
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
      </div>
      ;
    </div>
  );
};

export default AdminDashboard;
