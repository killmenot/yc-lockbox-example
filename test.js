const { get_jwt_token } = require('./get_jwt_token');
const { get_iam_token } = require('./get_iam_token');
const { get_payload_secret } = require('./get_payload_secret');

async function main() {
    const jwt_token = await get_jwt_token()
    const iam_token_data = await get_iam_token(jwt_token)

    const secret_id = 'xxxxxxxxx' // replace to needed secret id
    const data = await get_payload_secret(secret_id, iam_token_data.iamToken)

    console.log(data)
}

main()