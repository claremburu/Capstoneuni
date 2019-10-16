/* eslint-disable arrow-parens */
/* eslint-disable quotes */
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User, Project, Donor } = require("../models/data");

console.log(Project);

const router = express.Router();

// some routes

// user registration
router.post("/register", (req, res) => {
  const {
    name,
    university,
    course,
    regNo,
    email,
    password
  } = req.body;
  if (!name || !university || !course || !regNo || !email || !password) {
    res.send("Please fill all fields");
  }
  const newUser = new User({
    name,
    university,
    course,
    regNo,
    email,
    password
  });
  bcrypt.genSalt(10, (err, salt) => {
    // eslint-disable-next-line no-shadow
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => {
          console.log(user.password);
          res.status(200).redirect('/users/login');
        })
        // eslint-disable-next-line no-shadow
        .catch(err => console.log(err));
    });
  });
});

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
    !title
    && !description
    && !awardAmount
    && !applicationDeadline
    && !qualifications
    && !createdOn
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

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});
module.exports = router;
