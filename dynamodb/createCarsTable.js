const dynamoDB = require('../config/dynamoDB');

const params = {
    TableName: "Cars",
    KeySchema: [
        {
            AttributeName: "id", // Partition Key
            KeyType: "HASH"
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: "id",
            AttributeType: "N"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
}

dynamoDB.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error Json : ", JSON.stringify(err, null, 2));
    } else {
        console.log("Created Table. Table description in JSON : ", JSON.stringify(data, null, 2));
    }
});
