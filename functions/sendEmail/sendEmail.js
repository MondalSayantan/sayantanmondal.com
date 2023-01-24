const nodemailer = require("nodemailer");
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

const router = express.Router();

router.post("/", (req, res) => {
  const { emailVal, messageVal, token } = req.body;
  console.log(token);
  const secretKey = process.env.RECAPTCHA_SECRETKEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  if (!token) {
    return res.json({
      msg: "There was a problem with your request. Please try again later.",
    });
  }

  request(verificationUrl, (err, response, body) => {
    // Stop process for any errors
    if (err) {
      return res.json({ msg: "Unable to process request." });
    }
    // Destructure body object
    // Check the reCAPTCHA v3 documentation for more information
    const { success, score } = JSON.parse(body);
    // reCAPTCHA validation
    if (!success || score < 0.4) {
      return res.json({
        msg: "Sending failed. Robots aren't allowed here.",
        score: score,
      });
    }
    // When no problems occur, "send" the form
    res.status(200).send({ emailVal, messageVal, token });
  });
});

app.use("/.netlify/functions/sendEmail", router);

module.exports.handler = serverless(app);
