const mongoose = require('mongoose');

    const citySchema = new mongoose.Schema({
        city: String,
        description: String,
        img: String
      })

module.exports = mongoose.model(`City`, citySchema)