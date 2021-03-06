const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const helmet = require("helmet");
const dataApi = require('./routes/dataApi')
const contactApi = require('./routes/contactApi')
const adminApi = require('./routes/adminApi');
const userApi = require('./routes/userApi');
const forumApi = require('./routes/forumApi')
const blogApi = require('./routes/blogApi')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// content security policy
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self' https://cdnjs.cloudflare.com" // allow jquery cdn in views
  );
  next();
});

// cors
app.use(cors());
app.options('*', cors());

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

//Routing for API
dataApi(app) 
contactApi(app)
userApi(app)
adminApi(app)
forumApi(app)
blogApi(app)

app.listen(port, () => console.log(`Listening on port ${port}`));