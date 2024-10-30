const fs = require('node:fs');
const jose = require('node-jose');

exports.get_payload_secret = async (secret_id, iam_token) => {    
    const response = await fetch(`https://payload.lockbox.api.cloud.yandex.net/lockbox/v1/secrets/${secret_id}/payload`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${iam_token}`,
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();
    
    return data
}