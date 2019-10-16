/* eslint-disable arrow-parens */
/* eslint-disable quotes */
const express = require("express");
const { Project, Donor } = require("../models/data");

console.log(Project);

const router = express.Router();

// some routes
// add new projects to the database
router.post(`/user/project`, (req, res) => {
  const { title, description } = req.body;
  if (!title && !description) {
    res.send({
      message: "Pleas insert the Title and Description of your project"
    });
  }
  const newProject = new Project(req.body);
  newProject
    .save()
    .then(project => {
      res.status(200).send(project);
    })
    .catch(err => res.status(500).send(err.message));
});
// project fundings from the donor
router.post(`/donor/funds`, (req, res) => {
  const {
    title,
    description,
    awardAmount,
    applicationDeadline,
    qualifications,
    createdOn
  } = req.body;
  if (
    !title &&
    !description &&
    !awardAmount &&
    !applicationDeadline &&
    !qualifications &&
    !createdOn
  ) {
    res.send({
      message: "Pleas fill in all the fields"
    });
  }
  const newFunds = new Donor(req.body);
  newFunds
    .save()
    .then(project => {
      res.status(200).send(project);
    })
    .catch(err => res.status(500).send(err.message));
});

module.exports = router;
