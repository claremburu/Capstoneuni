import React from "react";
import "../../css/materialize.min.css";

const DonorDashboard = () => {
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
            <form className="col s4 offset-s1">
              <h3>Add Advert</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input id="title" type="text" className="validate" />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="description"
                    className="materialize-textarea"
                    defaultValue={""}
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="date" type="text" className="datepicker" />
                  <label htmlFor="title">Date</label>
                </div>
              </div>
              {/* <div class="file-field input-field">
						<div class="btn">
							<span>File</span>
							<input type="file" />
						</div>
						<div class="file-path-wrapper">
							<input class="file-path validate" type="text" />
						</div>
					</div> */}
              <button
                id="add-project-btn"
                type="button"
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
