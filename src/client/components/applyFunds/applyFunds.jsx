/* eslint-disable quotes */
import React, { useEffect } from "react";
import "../../css/materialize.min.css";
import useForm from "../CustomHooks/CustomHooks";
import useFetch from "../CustomHooks/useFetchHook";
import donorDashboard from "../Donor/DonorDashboard";
const applyFunds = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm(saveData);
  const res = useFetch("/api/donor", {});

  //console.log(res.response);

  function addFunds(data) {
    fetch(`/api/donor/funds`, {
      method: "GET",
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
    addApplyFunds(inputs);
  }

  // fetching from the database to the state
  const dayta = res.response;
  return (
    <div>
      <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input
          placeholder="Placeholder"
          id="first_name"
          type="text"
          className="validate"
        />
        <label htmlFor="first_name">First Name</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate" />
        <label htmlFor="last_name">Last Name</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input
          disabled
          defaultValue="I am not editable"
          id="disabled"
          type="text"
          className="validate"
        />
        <label htmlFor="disabled">Disabled</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" className="validate" />
        <label htmlFor="password">Password</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate" />
        <label htmlFor="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        This is an inline input field:
        <div className="input-field inline">
          <input id="email_inline" type="email" className="validate" />
          <label htmlFor="email_inline">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">
            Helper text
          </span>
        </div>
      </div>
    </div>
  </form>
</div>;

    </div>
  );
};

export default applyFunds;
