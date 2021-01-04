const User = require('../models/userModel')
const Walk = require('../models/walkModel')
const City = require('../models/cityModel')
const Admin = require('../models/adminModel')
const bcrypt = require("bcrypt")
const saltRounds = 10

module.exports = function (app) {

app.get('/walks', (req, res) => {
    Walk.find({}, (err, docs) => {
        if (!err) { 
            res.send(docs);
        }
        else {
            throw err;
        }
    });
});

app.get('/cities', (req, res) => {
  City.find({}, (err, docs) => {
      if (!err) { 
          res.send(docs);
      }
      else {
          throw err;
      }
  });
});

app.post('/add-walk', (req, res) => {
  Walk.create(req.body)
});

app.post('/add-city', (req, res) => {
  City.create(req.body)
});

app.post('/register-user', (req, res) => {
    
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    const newUser =  new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: hash
    });
    newUser.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.send(newUser)
      }
    })
  })
})

app.post('/login-user', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

 
  User.findOne({ email: email}, (err, foundUser) => {
    if (foundUser === null) {
      console.log("foundUser is null")
      res.send("unsuccessful login attempt")
    } else {
      bcrypt.compare(password, foundUser.password, (err, result) => {
        if (result === true) {
          res.send(foundUser);
        } 
      });
    }
  })


})

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
        } 
      });
    }
  })
})

}