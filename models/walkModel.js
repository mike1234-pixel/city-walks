const mongoose = require('mongoose');

    const walkSchema = new mongoose.Schema({
        walk: String,
        city: String,
        description: String,
        startingPoint: String,
        content1: String,
        content2: String,
        content3: String,
        coverImg: String,
        img1: String,
        img2: String, 
        img3: String
      });

module.exports = mongoose.model(`Walk`, walkSchema);