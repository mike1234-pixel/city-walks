const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }); 

// mongo connect
const DB = process.env.MONGO_URI.replace("<user>", process.env.MONGO_USER).replace("<password>", process.env.MONGO_PASSWORD).replace("<dbname>", process.env.DBNAME);

  mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("DB connection successful.");
  })
  .catch((err) => console.log(err)); 

// schema --> defines the structure of the document
const walkSchema = new mongoose.Schema({
    route: String,
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
  
// model --> wraps schema and allows CRUD ops with db
const walkModel = mongoose.model(`Walk`, walkSchema);
// ----------------------------------------------> must be name of collection! <---------------------------------------------

const citySchema = new mongoose.Schema({
  city: String,
  description: String,
  img: String
})

const cityModel = mongoose.model(`City`, citySchema)

// USERMODEL

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String
})

const User = mongoose.model(`User`, userSchema)

app.get('/walks', (req, res) => {
    walkModel.find({}, (err, docs) => {
        if (!err) { 
            console.log(docs);
            res.send(docs);
        }
        else {
            throw err;
        }
    });
});

app.get('/cities', (req, res) => {
  cityModel.find({}, (err, docs) => {
      if (!err) { 
          console.log(docs);
          res.send(docs);
      }
      else {
          throw err;
      }
  });
});

app.post('/add-walk', (req, res) => {
  walkModel.create(req.body)
});

app.post('/add-city', (req, res) => {
  cityModel.create(req.body)
});

app.post('/register-user', (req, res) => {
  console.log(req.body)

  const newUser = new User({
    fname: req.body.fname,
    lname: req.body.lname, 
    email: req.body.email, 
    password: req.body.password,
  })

  newUser.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.send("registration successful")
    }
  }) 
})

app.listen(port, () => console.log(`Listening on port ${port}`));