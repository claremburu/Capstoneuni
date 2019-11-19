/* eslint-disable quotes */
const mongoose = require("mongoose");

// pre save functiion

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  university: { type: String },
  course: { type: String },
  regNo: { type: String },
  email: { type: String },
  password: { type: String }
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  abstract: { type: String, required: true },
  theme: { type: String, required: true },
  myImage: { type: String, title: "picture" },
  status: { type: String, default: "pending" },
  user: {type: mongoose.Schema.Types.ObjectId}
});

const donorSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  awardAmount: { type: Number },
  applicationDeadline: { type: Date, required: true },
  qualifications: { type: String, required: true },
  createdOn: { type: Date, required: true }
});

const User = mongoose.model("User", userSchema);

const Project = mongoose.model("Project", projectSchema);

const Donor = mongoose.model("Donor", donorSchema);

module.exports = {
  User,
  Project,
  Donor
};
