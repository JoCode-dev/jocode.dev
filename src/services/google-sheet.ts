/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Google Sheet API
 *
 * - Create a new sheet
 * - Add a new row
 */

import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

const getAuth = () => {
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        throw new Error("Google credentials are not set in environment variables");
    }

    let privateKey = process.env.GOOGLE_PRIVATE_KEY;

    // Nettoyer et formater la clé privée
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
        privateKey = privateKey.slice(1, -1);
    }

    // Remplacer les séquences d'échappement
    privateKey = privateKey.replace(/\\n/g, "\n");
    privateKey = privateKey.replace(/\\"/g, '"');

    // Vérifier que la clé commence et se termine correctement
    if (!privateKey.includes("-----BEGIN PRIVATE KEY-----") || !privateKey.includes("-----END PRIVATE KEY-----")) {
        throw new Error("Invalid private key format. Must be a valid PEM private key.");
    }

    try {
        return new GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: privateKey,
            },
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });
    } catch (error) {
        console.error("Error creating Google Auth:", error);
        throw new Error(`Failed to create Google Auth: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};

/**
 * Create a google spreadsheet
 * @param {string} title Spreadsheets title
 * @param {string[]} headers Spreadsheets headers
 * @return {string} Created spreadsheets ID
 */
async function create(title: string, headers: string[]) {
    try {
        const auth = getAuth();
        const service = google.sheets({ version: "v4", auth });

        const spreadsheet = await service.spreadsheets.create({
            requestBody: {
                properties: {
                    title,
                },
            },
            fields: "spreadsheetId",
        });

        // Ajouter les headers après la création
        if (headers.length > 0) {
            await service.spreadsheets.values.update({
                spreadsheetId: spreadsheet.data.spreadsheetId!,
                range: "A1",
                valueInputOption: "RAW",
                requestBody: {
                    values: [headers],
                },
            });
        }

        console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
        return spreadsheet.data.spreadsheetId;
    } catch (err) {
        console.error("Error creating spreadsheet:", err);
        throw new Error(`Failed to create spreadsheet: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
}

/**
 * Add a row to a google spreadsheet
 * @param {string} spreadsheetId The spreadsheet ID
 * @param {any[]} row The row to add
 */
async function addRow(spreadsheetId: string, row: any[]) {
    if (!spreadsheetId) {
        throw new Error("Spreadsheet ID is required");
    }

    try {
        const auth = getAuth();
        const service = google.sheets({ version: "v4", auth });

        // Vérifier d'abord si le spreadsheet existe et est accessible
        try {
            await service.spreadsheets.get({
                spreadsheetId,
            });
        } catch (getError) {
            console.error("Error getting spreadsheet:", getError);
            if (getError instanceof Error && getError.message.includes('404')) {
                throw new Error("Spreadsheet not found or access denied");
            }
            // Si c'est une erreur d'authentification, la laisser remonter
            throw getError;
        }

        await service.spreadsheets.values.append({
            spreadsheetId,
            range: "A1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row],
            },
        });
        console.log(`Row added to spreadsheet ${spreadsheetId}`);
    } catch (err) {
        console.error("Error adding row to spreadsheet:", err);

        // Gestion spécifique des erreurs OpenSSL
        if (err instanceof Error && err.message.includes('DECODER routines::unsupported')) {
            throw new Error("Invalid Google private key format. Please check your environment variables.");
        }

        if (err instanceof Error && err.message.includes('Spreadsheet not found')) {
            throw new Error("Spreadsheet not found or access denied");
        }

        throw new Error(`Failed to add row: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
}

export const googleSheet = {
    create,
    addRow,
};
