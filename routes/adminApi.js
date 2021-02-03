const Walk = require('../models/walkModel')
const City = require('../models/cityModel')
const Blog = require('../models/blogPostModel')
const Admin = require('../models/adminModel')
const { Board } = require( '../models/forumModels')
const bcrypt = require("bcrypt")
const dotenv = require('dotenv').config();
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

  const { walk, city, description, startingPoint, content1, content2, content3, coverImg, mapImg, img1, img2, img3, author, aboutTheAuthor, websiteLink, instagramLink, facebookLink, twitterLink} = req.body

  const newWalk = new Walk({ walk: walk, city: city, description: description, startingPoint: startingPoint, content1: content1, content2: content2, content3: content3, coverImg: coverImg, mapImg: mapImg, img1: img1, img2: img2, img3: img3, author: author, aboutTheAuthor: aboutTheAuthor, websiteLink: websiteLink, instagramLink: instagramLink, facebookLink: facebookLink, twitterLink: twitterLink });
  newWalk.save((err, walk) => {
    if (err) {
      console.log(err)
    } else {
      console.log("walk saved")
      res.send("walk saved")
    }
  })
});

app.post('/add-city', (req, res) => {
  const {city, description, img} = req.body
  
  const newCity = new City({ city: city, description: description, img: img})
  newCity.save((err, city) => {
    if (err) {
      console.log(err)
    } else {
      console.log("city saved")
      res.send("city saved")
    }
  })

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
        } else {
          res.send("featured walk set")
        }
      })
    } 
  });
})

app.post('/add-board', (req, res) => {

  const {name, description} = req.body
  
  const newBoard = new Board({ name: name, description: description})
  newBoard.save((err, board) => {
    if (err) {
      console.log(err)
    } else {
      console.log("board saved")
      res.send("board saved")
    }
  })
})

app.delete('/delete-board', (req, res) => {

  const { boardName } = req.body 

  Board.findOneAndDelete({ name: boardName}, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log("board deleted")
      res.send("board deleted")
    }
  })
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
      res.send("walk deleted")
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
      res.send("city deleted")
    }
  })
})

app.post('/add-blog-post', (req, res) => {
  const { title, subtitle, content, img, author} = req.body

  const blogPost = new Blog({ title: title, subtitle: subtitle, content: content, img: img, author: author });
  blogPost.save((err, blogPost) => {
    if (err) {
      console.log(err)
    } else {
      console.log("new blog post saved.")
      res.send("blog post saved")
    }
  })

})

app.delete('/delete-blog-post', (req, res) => {
  const { postTitle } = req.body

  Blog.findOneAndDelete({title: postTitle}, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log("blog post deleted")
      res.send("blog post deleted")
    }
  })
})

}