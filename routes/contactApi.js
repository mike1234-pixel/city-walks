/** @format */

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
  PROTON_EMAIL_ADDRESS
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);

module.exports = function (app) {
  app.post("/contact-form", (req, res) => {

    const { name, email, message } = req.body

    // send email start
    console.log("sending email");

    oauth2Client.setCredentials({
      refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
    });

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
  });
};
