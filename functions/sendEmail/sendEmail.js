const nodemailer = require("nodemailer");
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const request = require("request");

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());

const router = express.Router();

router.post("/", (req, res) => {
  const emailVal = req.body.email;
  const messageVal = req.body.message;
  const token = req.body.token;
  const subject = req.body.subject;
  const secretKey = process.env.RECAPTCHA_SECRETKEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  if (!token) {
    return res.json({
      msg: "There was a problem with your request. Please try again later.",
    });
  }

  request(verificationUrl, async (err, response, body) => {
    if (err) {
      return res.json({ msg: "Unable to process request." });
    }
    console.log(body);
    const { success, score } = JSON.parse(body);
    // reCAPTCHA validation
    if (!success || score < 0.4) {
      return res.json({
        msg: "Sending failed. Robots aren't allowed here.",
        verificationUrl,
        score: score,
      });
    }

    await email(emailVal, messageVal, subject);
    // When no problems occur, "send" the form
    res.status(200).send({ emailVal, messageVal, score });
    // res.status(200).send();
  });
});

async function email(emailVal, messageVal, subject) {
  let transporter = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "website-contact@sayantanmondal.com", // generated ethereal user
      pass: process.env.ZOHO_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "website-contact@sayantanmondal.com", // sender address
    to: "sayantan@sayantanmondal.com", // list of receivers
    subject: `Contact From Website - ${subject} from ${emailVal}`, // Subject line
    text: `${messageVal}`, // plain text body
    html: `${messageVal}`, // html body
  });
}

app.use("/.netlify/functions/sendEmail", router);

module.exports.handler = serverless(app);
