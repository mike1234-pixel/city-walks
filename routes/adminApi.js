const Walk = require('../models/walkModel')
const City = require('../models/cityModel')
const Blog = require('../models/blogPostModel')
const Admin = require('../models/adminModel')
const bcrypt = require("bcrypt")
const saltRounds = 10

module.exports = function (app) {

app.post('/admin-login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    
    Admin.findOne({ username: username}, (err, foundAdmin) => {
        if (foundAdmin === null) {
        console.log("foundAdmin is null")
        res.send("unsuccessful login attempt")
        } else {
        bcrypt.compare(password, foundAdmin.password, (err, result) => {
            if (result === true) {
            res.send(foundAdmin);
            }  else {
            res.send("unsuccessful login attempt")
            }
        });
        }
    })
  })

app.post('/add-walk', (req, res) => {
  Walk.create(req.body)
});

app.post('/add-city', (req, res) => {
  City.create(req.body)
});

app.patch('/set-featured-walk', (req, res) => {
  console.log("set featured walk request")
  const featuredWalk1 = req.body.featuredWalk1;
  const featuredWalk2 = req.body.featuredWalk2;
  const featuredWalk3 = req.body.featuredWalk3;
  console.log(req.body)

  Walk.updateMany({featuredWalk: true},{$set:{featuredWalk: false}}, (err, doc) => {
    if (err) {
      console.log(err) // all entries now have featuredWalk set to false
    } else {
      Walk.updateMany({$or: [{walk: featuredWalk1}, {walk: featuredWalk2}, {walk: featuredWalk3}]},{$set:{featuredWalk: true}}, (err, doc) => {
        if (err) { // update three docs 
          console.log(err)
        } 
      })
    } 
  });
})

app.delete('/delete-walk', (req, res) => {
  const walk = req.body.walk;
  console.log("hit")
  console.log(walk)

  // delete where walk === walk
  Walk.findOneAndDelete({walk: walk }, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log("walk deleted")
    }
  })
})

app.delete('/delete-city', (req, res) => {
  const city = req.body.city;
  console.log("hit")
  console.log(city)

  City.findOneAndDelete({city: city }, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log("city deleted")
    }
  })
})

app.post('/add-blog-post', (req, res) => {
  Blog.create(req.body)
})

}