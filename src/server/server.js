/* eslint-disable quotes */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

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

app.use(`/api`, require("./routes/routes"));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
