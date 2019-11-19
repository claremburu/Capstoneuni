/* eslint-disable react/button-has-type */
/* eslint-disable arrow-parens */
/* eslint-disable quotes */
import React from "react";
// import "../../css/styles.css";
import "../../css/materialize.min.css";

import useFetch from "../CustomHooks/useFetchHook";
import useForm from "../CustomHooks/CustomHooks";

const AdminDashboard = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm(updateStatus);
  const res = useFetch("/api/user/project", {}); // fetch all the projects from the database
  const dayta = res.response;
  const filtered = dayta && dayta.filter( project => {
   // console.log("inputs.search ",inputs.search)
    if(inputs.search !== undefined){
      return project.title.toLowerCase().includes(inputs.search.toLowerCase());
    }else{
      return project;
    }
  });

  function saveStatus() {
    updateStatus(inputs);
  }

  function updateStatus() {
    console.log("inpuths ",inputs)
    fetch(`/api/user/project/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs)
    })
      .then(rawData => rawData.json())
      .then(result => {
        console.log("result ",result);
        if (result) alert(result.message);
      })
      .catch(err => {
        console.log(err);
        alert(`Verification failed ${err.message}`);
      });
  }

  return (
    <div>
      <div>
      Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Browser market shares in January, 2018'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }]
  }]
});
      </div>
      ;
    </div>
  );
};

export default AdminDashboard;
