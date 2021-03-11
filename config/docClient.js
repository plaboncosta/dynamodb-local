const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "123456",
    secretAccessKey: "123456",
    region: "local",
    endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient()
module.exports = docClient;
