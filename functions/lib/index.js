"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailToExchange = void 0;
const functions = __importStar(require("firebase-functions/v2"));
const nodemailer = __importStar(require("nodemailer"));
const options_1 = require("firebase-functions/v2/options");
const params_1 = require("firebase-functions/params");
const smtpPassSecret = (0, params_1.defineSecret)("SMTP_PASS");
// Set global options (e.g., region, memory, instances)
(0, options_1.setGlobalOptions)({ maxInstances: 2 });
/**
 * Sends an email using Nodemailer.
 * This function is triggered by an HTTPS request.
 *
 * It uses a Secret for SMTP_PASS and .env variables for other config.
 */
exports.sendEmailToExchange = functions.https.onRequest({
    // 2. ATTACH THE SECRET
    // This ensures the secret is loaded into process.env.SMTP_PASS at runtime
    secrets: [smtpPassSecret],
}, async (req, res) => {
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
    }
    catch (error) {
        functions.logger.error("Error sending email:", error);
        res.status(500).send("Failed to send email.");
        return;
    }
});
(0, options_1.setGlobalOptions)({ maxInstances: 2 });
//# sourceMappingURL=index.js.map