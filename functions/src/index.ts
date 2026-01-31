/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions/v2";
import * as nodemailer from "nodemailer";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { defineSecret } from "firebase-functions/params";
const smtpPassSecret = defineSecret("SMTP_PASS");

// Set global options (e.g., region, memory, instances)
setGlobalOptions({ maxInstances: 2 });

/**
 * Sends an email using Nodemailer.
 * This function is triggered by an HTTPS request.
 *
 * It uses a Secret for SMTP_PASS and .env variables for other config.
 */
export const sendEmailToExchange = functions.https.onRequest(
  {
    // 2. ATTACH THE SECRET
    // This ensures the secret is loaded into process.env.SMTP_PASS at runtime
    secrets: [smtpPassSecret],
  },
  async (req, res) => {
    // 3. INITIALIZE TRANSPORTER INSIDE THE HANDLER
    // The transporter MUST be initialized here to ensure process.env.* has been loaded.
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER, // SMTP_PASS is now loaded from Secret Manager
        pass: process.env.SMTP_PASS,
      },
    });

    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { subject, text, html } = req.body;

    if (!subject || (!text && !html)) {
      res
        .status(400)
        .send("Missing required email parameters: to, subject, text/html");
      return;
    }

    try {
      const mailOptions = {
        from: "contact@thepaynetrain.com",
        to: "contact@thepaynetrain.com",
        subject: subject,
        text: text,
        html: html,
      };

      await transporter.sendMail(mailOptions);
      functions.logger.info("Email sent successfully!", { subject });
      res.status(200).send("Email sent successfully!");
      return;
    } catch (error) {
      functions.logger.error("Error sending email:", error);
      res.status(500).send("Failed to send email.");
      return;
    }
  }
);

setGlobalOptions({ maxInstances: 2 });
