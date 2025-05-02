const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");

const sendGridApiKey = defineSecret("SENDGRID_API_KEY");

exports.sendEmail = onRequest(async (request, response) => {
  const sgMail = require("@sendgrid/mail");

  try {
    const apiKey = await sendGridApiKey.get();
    sgMail.setApiKey(apiKey);

    // Assuming you're sending data in the request body (e.g., JSON)
    const {to, subject, text, html} = request.body;

    if (!to || !subject || (!text && !html)) {
      response.status(400).send({error: "Missing required parameters."});
      return;
    }

    const msg = {
      to: to,
      from: "website@thepaynetrain.com", // Make this configurable if needed
      subject: subject,
      text: text,
      html: html,
    };

    await sgMail.send(msg);
    console.log("Email sent successfully to:", to);
    response.status(200).send({result: "Email sent successfully!"});
  } catch (error) {
    console.error("Error sending email:", error);
    response.status(500).send({error: "Failed to send email."});
  }
});
