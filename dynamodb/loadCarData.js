const docClient = require('../config/docClient');
const fs = require('fs');

console.log("Importing Cars into DynamoDB. Please wait.");

const cars = JSON.parse(fs.readFileSync('./carData.json', 'utf-8'));
cars.forEach(item => {
    const params = {
        TableName: "Cars",
        Item: {
            "id": item.id,
            "type": item.type,
            "name": item.name,
            "manufacturer": item.manufacturer,
            "fuel_type": item.fuel_type,
            "description": item.description
        }
    }

    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add Car", item.name, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", item.name);
        }
    });
});
