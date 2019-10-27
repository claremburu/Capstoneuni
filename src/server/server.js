/* eslint-disable quotes */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const News = require("./models/data");
const passport = require("passport");
const session = require("express-session");
const multer = require("multer");
const fs = require("fs-extra");
const app = express();

const uploadRoute = require("./routes/fileupload");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://clare:clare@cluster0-zbbh0.mongodb.net/test?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  // eslint-disable-next-line quotes
  .then(() => console.log("DB connected sucessfully"))
  .catch(err => console.log(err));

app.use(express.static("dist"));

require("./config/passport")(passport);
// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("dist"));

// mounting of routes
app.use(`/api`, require("./routes/routes"));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
