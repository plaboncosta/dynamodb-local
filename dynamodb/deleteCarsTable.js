const dynamoDB = require('../config/dynamoDB');

/* Delete Cars Table */
const params = {
    TableName: "Cars"
}

dynamoDB.deleteTable(params, function (err, data) {
    if (err) console.error(JSON.stringify(err, null, 2));
    else console.log('Successfully delete Cars Table. ', JSON.stringify(data));
});
