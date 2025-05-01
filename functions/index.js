/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest, functions} = require("firebase-functions/v2/https");


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.sendEmail = onRequest((request, response) => {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(functions.config().sendgrid_api.key);

  const msg = {
    to: "lee@thepaynetrain.com", // Change to your recipient
    from: "website@thepaynetrain.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
});
