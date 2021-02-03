/** @format */

const Walk = require("../models/walkModel");
const City = require("../models/cityModel");
const Blog = require("../models/blogPostModel")
const dotenv = require('dotenv').config();

module.exports = function (app) {
  app.get("/walks", (req, res) => {
    Walk.find({}, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        throw err;
      }
    });
  });

  app.get("/cities", (req, res) => {
    City.find({}, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        throw err;
      }
    });
  });

  app.get("/blog", (req, res) => {
    Blog.find({}, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        throw err;
      }
    });
  });
};
