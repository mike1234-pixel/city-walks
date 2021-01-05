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

app.patch('/set-featured-walk', (req, res) => {
  const featuredWalk1 = req.body.featuredWalk1;
  const featuredWalk2 = req.body.featuredWalk2;
  const featuredWalk3 = req.body.featuredWalk3;

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
        } else {
          res.send("unsuccessful login attempt")
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
        }  else {
          res.send("unsuccessful login attempt")
        }
      });
    }
  })
})

}