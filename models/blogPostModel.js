const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  userId: String,
  userFirstName: String,
  comment: String,
  submittedOn: { type: Date, default: new Date().toISOString().replace('T', ' ').substring(0, 19)}
})

  const blogSchema = new mongoose.Schema({
      title: String,
      content: String,
      img: String,
      submittedOn: { type: Date, default: new Date().toISOString().replace('T', ' ').substring(0, 19)},
      comments: [commentsSchema]
    })

module.exports = mongoose.model(`Blog`, blogSchema)