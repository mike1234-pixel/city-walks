/** @format */

const User = require("../models/userModel");
const Blog = require("../models/blogPostModel")
const SecretCode = require("../models/secretCodeModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const path = require('path');
const uuid = require("uuid").v4;
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

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

oauth2Client.setCredentials({
  refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
});

module.exports = function (app) {
  // http://localhost:5000/verify-user/5ff5efe00e2f501d28b903fa/4242172e-8866-410c-8b39-6f0a6c830ed1

  app.get("/verify-user/:userId/:secretCode", (req, res) => {
    console.log("email link hit"); // need to make sure i'm getting feedback on this link

    const { userId, secretCode } = req.params;

    User.findOne({ _id: userId }, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else if (foundUser === null) {
        console.log("user not found")
        res.send("invalid attempt")
      } else {
        const email = foundUser.email;

        SecretCode.findOne({ code: secretCode }, (err, foundSecretCode) => {
          if (err) {
            console.log(err);
          } else if (email === null) {
            console.log("email not found")
          } else {
            User.findOneAndUpdate(
              { email: email },
              { status: "active" },
              (err) => {
                if (err) {
                  console.log(err);
                } else {
                  res.sendFile(path.join(__dirname, '../views', 'activated.html')); 
                }
              }
            );
          }
        });
      }
    });
  });

  app.post("/register-user", (req, res) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        if (foundUser === null) {
          console.log("creating new account");

          let secretCode;

          // create secret code to verify email address
          const newSecretCode = new SecretCode({
            email: req.body.email,
            code: uuid(),
          });
          newSecretCode.save((err, secretCodeEntry) => {
            if (err) {
              console.log(err);
            } else {
              console.log("secret code created");
              secretCode = secretCodeEntry.code;
            }
          });

          // create new account
          bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            const newUser = new User({
              fname: req.body.fname,
              lname: req.body.lname,
              email: req.body.email,
              password: hash,
            });
            newUser.save((err, newUser) => {
              if (err) {
                console.log(err);
              } else {
                // send email start
                console.log("sending email");
                
                const accessToken = oauth2Client.getAccessToken();

                const transporter = nodemailer.createTransport({
                  service: "gmail",
                  auth: {
                    type: "OAuth2",
                    user: SENDER_EMAIL_ADDRESS,
                    clientId: MAILING_SERVICE_CLIENT_ID,
                    clientSecret: MAILING_SERVICE_CLIENT_SECRET,
                    refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
                    accessToken,
                  },
                });

                console.log(transporter);

                const mailOptions = {
                  from: SENDER_EMAIL_ADDRESS,
                  to: req.body.email,
                  subject: "Email Verification for City Walks",
                  html:
                    "<p>Hi, thanks for signing up. Please verify your account by clicking <a href='http://localhost:5000/verify-user/" +
                    newUser.id +
                    "/" +
                    secretCode +
                    "'>this link</a></p>",
                };

                console.log(mailOptions);

                transporter.sendMail(mailOptions, (err, info) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("email sent."); // not broken into
                  }
                });
                // send email end
              }
            });
          });
          res.send(
            "We have sent you an email. Please verify your account by clicking the link in the mail."
          );
        } else {
          console.log(foundUser);
          console.log("an account with this email already exists");
          res.send("An account with this email already exists.");
        }
      }
    });
  });

  app.post("/login-user", (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email }, (err, foundUser) => {
      if (foundUser === null) {
        console.log("foundUser is null");
        res.send("unsuccessful login attempt"); // account does not exist
      } else {
        bcrypt.compare(password, foundUser.password, (err, result) => {
          if (foundUser.status === "pending") {
            console.log(foundUser.status);
            res.send(
              "Your account exists but is not activated. Please click 'verify account' for email verification."
            );
          } else if (result === true) {
            res.send(foundUser);
          } else {
            res.send("unsuccessful login attempt");
          }
        });
      }
    });
  });

  app.post("/reverify-user", (req, res) => {
    console.log("reverify user");
    let secretCode;

    // create secret code to verify email address
    const newSecretCode = new SecretCode({
      email: req.body.email,
      code: uuid(),
    });
    newSecretCode.save((err, secretCodeEntry) => {
      if (err) {
        console.log(err);
      } else {
        console.log("secret code created");
        secretCode = secretCodeEntry.code;

        User.findOne({ email: req.body.email }, (err, foundUser) => {
          if (err) {
            console.log(err);
          } else {
            if (foundUser !== null) {
              // send email
              console.log("sending email");

              const accessToken = oauth2Client.getAccessToken();

              const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  type: "OAuth2",
                  user: SENDER_EMAIL_ADDRESS,
                  clientId: MAILING_SERVICE_CLIENT_ID,
                  clientSecret: MAILING_SERVICE_CLIENT_SECRET,
                  refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
                  accessToken,
                },
              });

              console.log(transporter);

              const mailOptions = {
                from: SENDER_EMAIL_ADDRESS,
                to: req.body.email,
                subject: "Email Verification for City Walks",
                html:
                  "<p>Hi, thanks for signing up. Please verify your account by clicking <a href='http://localhost:5000/verify-user/" +
                  foundUser.id +
                  "/" +
                  secretCode +
                  "'>this link</a></p>",
              };

              console.log(mailOptions);

              transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("email sent.");
                }
              });
              // send email end
            }
          }
        });
      }
    });

    res.send("verification email has been sent");
  });


  app.post('/forgot-password', (req, res) => {
    console.log(req.body)

    // send email start

    const accessToken = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SENDER_EMAIL_ADDRESS,
        clientId: MAILING_SERVICE_CLIENT_ID,
        clientSecret: MAILING_SERVICE_CLIENT_SECRET,
        refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: SENDER_EMAIL_ADDRESS,
      to: req.body.email,
      subject: "Reset Password for City Walks",
      html: "<p>Hi, please click on this link and enter your email and password to reset.<a href='http://localhost:5000/forgot-password/'>this link</a></p>",
    };

    console.log(mailOptions);

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent.");
        res.send("email sent")
      }
    });
    // send email end
  })

  app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'forgotpassword.html')); 
  })

  app.post('/reset-password', (req, res) => {
    console.log(req.body)

    const { email, newPassword } = req.body;

    bcrypt.hash(newPassword, saltRounds, (err, hash) => {
      if (err) {
        console.log(err)
      } else {
        User.findOneAndUpdate({email: email}, {password: hash}, (err, foundUser) => {
          if (err) {
            console.log(err)
          } else if (foundUser === null) {
            res.sendFile(path.join(__dirname, '../views', 'passwordresetfail.html')); 
          } else {
            res.sendFile(path.join(__dirname, '../views', 'passwordresetsuccess.html')); 
          }
        })
      }
    })
    
  })


  app.post('/reset-password-with-old-password', (req, res) => {
    const { email, oldPassword, newPassword } = req.body
    
   User.findOne({email: email}, (err, foundUser) => {
     if (err) {
       console.log(err)
     } else if (foundUser === null) {
       res.send("user not found")
     } else {
      bcrypt.compare(oldPassword, foundUser.password, (err, result) => {
       if (err) {
         console.log(err)
       } else {
         if (result === true) {
          bcrypt.hash(newPassword, saltRounds, (err, hash) => {
            if (err) {
              console.log(err)
            } else {
              User.findOneAndUpdate({email: email}, {password: hash}, (err, foundUser) => {
                if (err) {
                  console.log(err)
                } else if (foundUser === null) {
                  res.send("user not found")
                } else {
                  res.send("password successfully updated")
                }
              })
            }
          })
         } else {
           res.send("old password does not match password in the database")
         }
       }
      })
     }
   })
  })

  app.delete('/delete-account', (req, res) => {
    const { userId } = req.body

    User.findOneAndDelete({ _id: userId}, (err, doc) => {
      if (err) {
        console.log(err)
      } else {
        console.log("user deleted")
      }
    })
  })

  app.post('/add-blog-comment', (req, res) => {

    const { currentBlogTitle, comment, userFirstName, userId } = req.body

    const commentObj = {
      userId: userId,
      userFirstName: userFirstName,
      comment: comment
    }

    Blog.findOne({ title: currentBlogTitle}, (err, board) => {
      if (err) {
        console.log(err)
      } else {
        board.comments.push(commentObj);
        board.save(); 
        res.send("comment submitted")
      }
    })
  })

  app.delete('/delete-blog-comment', (req, res) => {

    const { currentBlogTitle, commentId } = req.body
  
    Blog.findOne({title: currentBlogTitle}, (err, blogPost)=> {
      if (err) {
        console.log(err)
      } else {
        const comment = blogPost.comments.id(commentId);
        if (comment === null) {
          res.send('comment does not exist') 
        } else {
          blogPost.comments.pull(commentId);
          blogPost.save();
          console.log("comment deleted")
          res.send('comment deleted');
        }
      }

    })

  })

};
