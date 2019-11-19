/* eslint-disable arrow-parens */
/* eslint-disable quotes */
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const fs = require("fs-extra");
const multer = require("multer");
const bodyParser = require("body-parser");
const { User, Project, Donor } = require("../models/data");

const validateRegisterInput = require("../../client/components/Register/Register");
const validateLoginInput = require("../../client/components/Loggedin/Loggedin");

console.log(Project);

const router = express.Router();

// some routes

router.post("/register", (req, res) => {
  // Form validationconst { errors, isValid } = validateRegisterInput(req.body);// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        university: req.body.university,
        course: req.body.course,
        regNo: req.body.regNo,
        email: req.body.email,
        password: req.body.password
      });// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  // Form validationconst { errors, isValid } = validateLoginInput(req.body);// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }const email = req.body.email;
  const password = req.body.password;// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
// user registration
// router.post("/register", (req, res) => {
//   const { name, university, course, regNo, email, password } = req.body;
//   if (!name || !university || !course || !regNo || !email || !password) {
//     res.send("Please fill all fields");
//   }
//   const newUser = new User({
//     name,
//     university,
//     course,
//     regNo,
//     email,
//     password
//   });
//   bcrypt.genSalt(10, (err, salt) => {
//     // eslint-disable-next-line no-shadow
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if (err) throw err;
//       newUser.password = hash;
//       newUser
//         .save()
//         .then(user => {
//           console.log(user.password);
//           res.status(200).redirect("/users/login");
//         })
//         // eslint-disable-next-line no-shadow
//         .catch(err => console.log(err));
//     });
//   });
// });

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

router.get(`/donor/funds`, (req, res) => {
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

router.patch("/user/project", async(req, res) => {
  //let response= JSON.parse(req.body);
  //console.log("rbs  ",typeof Object.keys(req.body)[0]);
  let proj = Object.keys(req.body)[0];
  let result;
  if(proj === "approved"){
     result = await Project.update({_id:req.body.approved }, {status: proj });
  }else{
    result = await Project.update({_id:req.body.rejected }, {status: proj });
  }
  // Project.findById(req.body.id, (err, project) => {
  //   for (let b in req.body) {
  //     project[b] = req.body[b];
  //   }
  //   book.save();
  res.json(result);
  // });
});

router.get("/search", async (req, res) => {
	let projects = await mongoose
		.model("Project")
		.find({ $text: { $search: req.query.searchString } });
	return res.json(projects);
});

// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/users/login",
//     failureFlash: true
//   })(req, res, next);
// });

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200);
});


let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

let upload = multer({ storage: storage })

router.post('/uploadphoto', upload.single('picture'), (req, res) => {
	var img = fs.readFileSync(req.file.path);
 var encode_image = img.toString('base64');
 // Define a JSONobject for the image attributes for saving to database
 
 var finalImg = {
      contentType: req.file.mimetype,
      image:  new Buffer(encode_image, 'base64')
   };
db.collection('mycollection').insertOne(finalImg, (err, result) => {
  	console.log(result)

    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  
    
  })
})


router.get('/photos', (req, res) => {
db.collection('mycollection').find().toArray((err, result) => {

  	const imgArray= result.map(element => element._id);
			console.log(imgArray);

   if (err) return console.log(err)
   res.send(imgArray)

  
   
  })
});

router.get('/photo/:id', (req, res) => {
var filename = req.params.id;

db.collection('mycollection').findOne({'_id': ObjectId(filename) }, (err, result) => {

    if (err) return console.log(err)

   res.contentType('image/jpeg');
   res.send(result.image.buffer)
  
   
  })
})
module.exports = router;