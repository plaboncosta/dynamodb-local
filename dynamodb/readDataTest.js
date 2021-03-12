const docClient = require('../config/docClient');

const table = "Cars";
const id = 2;

const params = {
    TableName: table,
    Key: {
        id: id
    }
};

docClient.get(params, function (err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});
