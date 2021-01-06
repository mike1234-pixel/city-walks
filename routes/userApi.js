const User = require('../models/userModel')
const Walk = require('../models/walkModel')
const City = require('../models/cityModel')
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

app.post('/register-user', (req, res) => {

  User.findOne({email: req.body.email}, (err, foundUser) =>{
    if (err) {
      console.log(err)
    } else {
      if (foundUser === null) {
        console.log("creating new account")
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
      } else {
      console.log(foundUser)
      console.log("an account with this email already exists")
      res.send("An account with this email already exists.")
      }
    }
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
        } else {
          res.send("unsuccessful login attempt")
        }
      });
    }
  })

})

}