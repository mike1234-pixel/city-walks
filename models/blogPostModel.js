const mongoose = require('mongoose');

    const blogSchema = new mongoose.Schema({
        title: String,
        content: String,
        img: String
      })

module.exports = mongoose.model(`Blog`, blogSchema)