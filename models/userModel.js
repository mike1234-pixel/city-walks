const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
  //   status: {
  //     type: String,
  //     default: "pending",
  // },

  })


module.exports = mongoose.model(`User`, userSchema)