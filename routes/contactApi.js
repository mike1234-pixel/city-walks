/** @format */

const uuid = require("uuid").v4;
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
// recaptcha
const fetch = require('node-fetch')
const dotenv = require('dotenv').config();

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
  PROTON_EMAIL_ADDRESS,
  GOOGLE_RECAPTCHA_SECRET_KEY
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
  app.post("/contact-form", (req, res) => {

    const { name, email, message, gRecaptchaResponse } = req.body
    console.log(req.body)
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA_SECRET_KEY}&response=${gRecaptchaResponse}`;
      
    const sendEmail = () => {
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

    const mailOptionsToCityWalks = {
      from: SENDER_EMAIL_ADDRESS,
      to: PROTON_EMAIL_ADDRESS,
      subject: "City Walks Contact Form Message",
      html:
        "<p>" + name + " has sent you a message: "+ message + "</p>",
    };

    const mailOptionsToSender = {
        from: SENDER_EMAIL_ADDRESS,
        to: email,
        subject: "City Walks Contact Form",
        html:
          "<p>Thanks very much for getting in touch. We will get back to you with a response shortly.</p>",
      };

    transporter.sendMail(mailOptionsToCityWalks, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent to city walks.");
      }
    });

    transporter.sendMail(mailOptionsToSender, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log("email sent to sender.");
        }
      });
    // send email end
    res.send("message received")
    }

    fetch(verifyUrl, { method: 'POST' })
    .then(res => res.json())
    .then(json => {
      console.log(json) // recaptcha score here
      if (json.score > 0.6) {
      sendEmail()
      } else {
        res.send("request failed recaptcha")
      }
    });
  });
};
