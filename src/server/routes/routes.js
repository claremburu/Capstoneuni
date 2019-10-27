/* eslint-disable arrow-parens */
/* eslint-disable quotes */
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const fs = require("fs-extra");
const multer = require("multer");
const bodyParser = require("body-parser");
const { User, Project, Donor } = require("../models/data");

console.log(Project);

const router = express.Router();

// some routes

// user registration
router.post("/register", (req, res) => {
  const { name, university, course, regNo, email, password } = req.body;
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
          res.status(200).redirect("/users/login");
        })
        // eslint-disable-next-line no-shadow
        .catch(err => console.log(err));
    });
  });
});

// add new projects to the database
router.post(`/user/project`, (req, res) => {
  const { title, abstract, theme } = req.body;
  if (title && abstract && theme) {
    const newProject = new Project(req.body);
    newProject
      .save()
      .then(project => {
        res.status(200).send(project); // this goes back to the client
      })
      .catch(err => res.status(500).send(err.message));
  } else {
    const message = "Please insert all the fields";
    res.status(500).send(message);
  }
});

// project fundings from the donor
router.post(`/donor/funds`, (req, res) => {
  // console.log(req.body);
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
      message: "Please fill in all the fields"
    });
  }
  req.body.createdOn = Date.now();
  // req.body.awardAmount = parseInt(req.body.awardAmount);
  console.log(req.body);
  const newFunds = new Donor(req.body);
  newFunds
    .save()
    .then(project => {
      res.status(200).send(project);
    })
    .catch(err => res.status(500).send(err.message));
});

// router.post(`/user/project`, (req, res) => {
//   // console.log(req.body);
//   const { title, description } = req.body;
//   if (!title && !description) {
//     res.send({
//       message: "Please fill in all the fields"
//     });
//   }

//   console.log(req.body);
//   const newProject = new Project(req.body);
//   newProject
//     .save()
//     .then(project => {
//       res.status(200).send(project);
//     })
//     .catch(err => res.status(500).send(err.message));
// });

router.get(`/projects`, (req, res) => {
  console.log(req.body);
  Donor.find()
    .then(result => {
      if (!result) {
        return res.status(404).send({
          message: "No available funded projects"
        });
      }
      res.status(200).send(result);
    })
    .catch(err =>
      res.status(500).send({
        message: "Error retrieving Funded projects",
        err
      })
    );
});

router.get(`/user/project`, (req, res) => {
  Project.find()
    .then(result => {
      if (!result) {
        return res.status(404).send({
          message: "No available funded projects"
        });
      }
      res.status(200).send(result);
    })
    .catch(err =>
      res.status(500).send({
        message: "Error retrieving Funded projects",
        err
      })
    );
});

// update project status
// router.patch(`/user/project`, (req, res) => {
//   console.log(req.body);
//   Project.findById({ _id: req.body.id })
//     .
//     .then(result => {
//       if (!result) {
//         return res.status(404).send({
//           message: "No available funded projects"
//         });
//       }
//       res.status(200).send(result);
//     })
//     .catch(err =>
//       res.status(500).send({
//         message: "Error retrieving Funded projects",
//         err
//       })
//     );
// });

router.patch("/user/project", (req, res) => {
  console.log(req.body);
  // Project.findById(req.body.id, (err, project) => {
  //   for (let b in req.body) {
  //     project[b] = req.body[b];
  //   }
  //   book.save();
  res.json(req.body);
  // });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200);
});
module.exports = router;
