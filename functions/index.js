const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors")({origin: "https://www.thepaynetrain.com"});

exports.sendEmail = onRequest(
    {secrets: ["SENDGRID_API_KEY", "DESTINATION_EMAIL"]},
    async (request, response) => {
      cors(request, response, async () => {
        const sgMail = require("@sendgrid/mail");

        try {
          // Access the SendGrid API key from the Firebase Functions config
          const apiKey = process.env.SENDGRID_API_KEY;
          sgMail.setApiKey(apiKey);

          const {subject, text, html} = request.body;

          if (!subject || (!text && !html)) {
            response.status(400).send({error: "Missing required parameters."});
            return;
          }

          const msg = {
            to: process.env.DESTINATION_EMAIL,
            from: "website@thepaynetrain.com",
            subject: subject,
            text: text,
            html: html,
          };

          await sgMail.send(msg);
          console.log("Email sent successfully!");
          response.status(200).send({result: "Email sent successfully!"});
        } catch (error) {
          console.error("Error sending email:", error);
          response.status(500).send({error: "Failed to send email."});
        }
      });
    });
