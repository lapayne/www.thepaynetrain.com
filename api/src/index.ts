/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import "isomorphic-fetch";
import { setGlobalOptions } from "firebase-functions";
import { onCall, HttpsError } from "firebase-functions/v2/https";

import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials/index.js";

export const dynamic = "force-dynamic"; // Prevent static caching of this route

export const sendContactEmail = onCall(
  {
    secrets: ["AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET"],
  },
  async (request) => {
    // INITIALIZE EVERYTHING INSIDE THE HANDLER
    const credential = new ClientSecretCredential(
      process.env.AZURE_TENANT_ID!,
      process.env.AZURE_CLIENT_ID!,
      process.env.AZURE_CLIENT_SECRET!,
    );

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ["https://graph.microsoft.com/.default"],
    });

    const client = Client.initWithMiddleware({ authProvider });

    const { email, message } = request.data;

    try {
      await client.api("/users/lee@thepaynetrain.com/sendMail").post({
        message: {
          subject: `Contact from ${email}`,
          body: {
            contentType: "HTML",
            content: `<p>From: ${email}</p><p>${message}</p>`,
          },
          toRecipients: [
            { emailAddress: { address: "lee@thepaynetrain.com" } },
          ],
        },
      });
      return { success: true };
    } catch (error: any) {
      console.error("Detailed Graph Error:", error.body || error);
      throw new HttpsError("internal", "Failed to send email.");
    }
  },
);

setGlobalOptions({ maxInstances: 10 });
