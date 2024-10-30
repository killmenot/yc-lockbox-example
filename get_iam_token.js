const fetch = require('node-fetch');

exports.get_iam_token = async (jwt_token) => {
    const body = {
        jwt: jwt_token
    };
    
    const response = await fetch('https://iam.api.cloud.yandex.net/iam/v1/tokens', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();
    
    return data
}
