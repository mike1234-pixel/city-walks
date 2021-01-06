const User = require('../models/userModel')
const SecretCode = require('../models/secretCodeModel')
const Walk = require('../models/walkModel')
const City = require('../models/cityModel')
const bcrypt = require("bcrypt")
const saltRounds = 10
const uuid = require('uuid').v4
const nodemailer = require('nodemailer');
// google-OAuth
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);

const Mailing = {};

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

// http://localhost:5000/verify-user/5ff5efe00e2f501d28b903fa/4242172e-8866-410c-8b39-6f0a6c830ed1

app.get('/verify-user/:userId/:secretCode', (req, res) => {
  console.log("email link hit") // need to make sure i'm getting feedback on this link
 
  const { userId, secretCode } = req.params;
 
  User.findOne({_id: userId}, (err, foundUser) => {
    if (err) {
      console.log(err)
    } else {
      const email = foundUser.email;

      SecretCode.findOne({code: secretCode}, (err, foundSecretCode) => {
        if (err) {
          console.log(err)
        } else {
          User.findOneAndUpdate({email: email}, {status: "active"}, (err) => {
            if (err) {
              console.log(err)
            } else {
              res.send("user account activated") // the user will see this so send them a proper styled template
            }
          })
        }
      })
    }
  })

})

app.post('/register-user', (req, res) => {

  User.findOne({email: req.body.email}, (err, foundUser) =>{
    if (err) {
      console.log(err)
    } else {
      
      if (foundUser === null) {
            console.log("creating new account")

            let secretCode;

            // create secret code to verify email address
            const newSecretCode = new SecretCode({
              email: req.body.email,
              code: uuid(),
            })
            newSecretCode.save((err, secretCodeEntry) => {
              if (err) {
              console.log(err)
              } else {
                console.log("secret code created")
                secretCode = secretCodeEntry.code;
              }
            })

            // create new account
              bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                const newUser =  new User({
                  fname: req.body.fname,
                  lname: req.body.lname,
                  email: req.body.email,
                  password: hash
                });
                newUser.save((err, newUser) => {
                  if (err) {
                    console.log(err);
                  } else {
                    // send email start
                    console.log("sending email")

                        oauth2Client.setCredentials({
                        refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
                      });  
                    
                      const accessToken = oauth2Client.getAccessToken(); 
                      
                      const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                          type: 'OAuth2',
                          user: SENDER_EMAIL_ADDRESS,
                          clientId: MAILING_SERVICE_CLIENT_ID,
                          clientSecret: MAILING_SERVICE_CLIENT_SECRET,
                          refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
                          accessToken,
                        },
                      });

                      console.log(transporter)

                      const mailOptions = {
                        from: SENDER_EMAIL_ADDRESS,
                        to: req.body.email,
                        subject: "Email Verification for City Walks",
                        html: "<p>Hi, thanks for signing up. Please verify your account by clicking <a href='http://localhost:5000/verify-user/" + newUser.id +"/" + secretCode + "'>this link</a></p>",
                      };

                      console.log(mailOptions)
                    
                    transporter.sendMail(mailOptions, (err, info) => {
                      if (err) {
                        console.log(err)
                      } else {
                        console.log("email sent.") // not broken into
                      }
                    });
                    // send email end
                    
                  }
                
                })

              })
          res.send("We have sent you an email. Please verify your account by clicking the link in the mail.")
            
      } else {
        console.log(foundUser)
        console.log("an account with this email already exists")
        res.send("An account with this email already exists.")
      }
    }
  })



})



app.post('/login-user', (req, res) => {

  const { email, password } = req.body;

  User.findOne({ email: email}, (err, foundUser) => {
    if (foundUser === null) {
      console.log("foundUser is null")
      res.send("unsuccessful login attempt") // account does not exist
    } else {
      bcrypt.compare(password, foundUser.password, (err, result) => {
        if (foundUser.status === "pending") {
          console.log(foundUser.status)
          res.send("Your account exists but is not activated. Please click 'verify account' for email verification.")
        } else if (result === true) {
          res.send(foundUser);
        } else {
          res.send("unsuccessful login attempt")
        }
      });
    }
  })

})

app.post('/reverify-user', (req, res) => {
  console.log("reverify user")
  let secretCode;

  // create secret code to verify email address
  const newSecretCode = new SecretCode({
    email: req.body.email,
    code: uuid(),
  })
  newSecretCode.save((err, secretCodeEntry) => {
    if (err) {
    console.log(err)
    } else {
      console.log("secret code created")
      secretCode = secretCodeEntry.code;

      User.findOne({email: req.body.email }, (err, foundUser) => {
        if (err) {
          console.log(err)
        } else {
          if (foundUser !== null) {
          // send email 
          console.log("sending email")

          oauth2Client.setCredentials({
          refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
          });  

          const accessToken = oauth2Client.getAccessToken(); 

          const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken,
          },
          });

          console.log(transporter)

          const mailOptions = {
          from: SENDER_EMAIL_ADDRESS,
          to: req.body.email,
          subject: "Email Verification for City Walks",
          html: "<p>Hi, thanks for signing up. Please verify your account by clicking <a href='http://localhost:5000/verify-user/" + foundUser.id +"/" + secretCode + "'>this link</a></p>",
          };

          console.log(mailOptions)

          transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
          console.log(err)
          } else {
          console.log("email sent.") 
          }
        });
        // send email end


        }
      }
      })







    }
  })

 
res.send("verification email has been sent")

})

}