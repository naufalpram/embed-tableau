import jwt from  'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

export function generateJwt() {
    // Replace the example values below (remove the brackets).
    // Store secrets securely based on your team's best practices.
    // See: https://help.tableau.com/current/online/en-us/connected_apps_direct.htm
    const { sign } = jwt;

    const secret = process.env.TABLEAU_SECRET_VALUE;
    const secretId = process.env.TABLEAU_SECRET_ID;
    const clientId = process.env.TABLEAU_CLIENT_ID;
    const scopes = ["tableau:views:embed", "tableau:views:embed_authoring"];
    const userId = process.env.TABLEAU_USER_ID;
    const tokenExpiryInMinutes = process.env.TOKEN_EXPIRY; // Max of 10 minutes.

    const userAttributes = {
        //  User attributes are optional.
        //  Add entries to this dictionary if desired.
        //  "[User Attribute Name]": "[User Attribute Value]",
    };

    const header = {
        alg: "HS256",
        typ: "JWT",
        kid: secretId,
        iss: clientId,
    };

    const data = {
        jti: uuidv4(),
        aud: "tableau",
        sub: userId,
        scp: scopes,
        exp: Math.floor(Date.now() / 1000) + tokenExpiryInMinutes * 60,
        ...userAttributes,
    };

    const token = sign(data, secret, { header });
    return token;
}