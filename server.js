const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const helmet = require("helmet");
const apiRoutes = require('./routes/api.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

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

//Routing for API 
apiRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));