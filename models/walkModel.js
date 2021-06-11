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
        mapImg: String,
        img1: String,
        img2: String, 
        img3: String,
        author: String,
        aboutTheAuthor: String,
        websiteLink: String,
        instagramLink: String,
        facebookLink: String,
        twitterLink: String,
        lat: String,
        lng: String,
        length: String,
        iframeLink: String,
        iframeTitle: String,
        featuredWalk: { type: Boolean, default: false },
      });

module.exports = mongoose.model(`Walk`, walkSchema);