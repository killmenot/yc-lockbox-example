const fs = require('node:fs');
const jose = require('node-jose');

exports.get_jwt_token = async () => {
   const json = JSON.parse(fs.readFileSync(require.resolve('./authorized_key.json')));
   const privateKey = json.private_key;

   const serviceAccountId = json.service_account_id;
   const keyId = json.id;

   const now = Math.floor(new Date().getTime() / 1000);

   const payload = {
      aud: "https://iam.api.cloud.yandex.net/iam/v1/tokens",
      iss: serviceAccountId,
      iat: now,
      exp: now + 3600
   };

   const key = await jose.JWK.asKey(privateKey, 'pem', { kid: keyId, alg: 'PS256' })
   const jwt_token = await jose.JWS.createSign({ format: 'compact' }, key)
      .update(JSON.stringify(payload))
      .final()

   return jwt_token;
}