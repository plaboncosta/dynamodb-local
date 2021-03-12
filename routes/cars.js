const express = require('express');
const router = express.Router();
const docClient = require('../config/docClient');

/* GET All Cars Data */
router.get('/all', function (req, res) {
    const params = {
        TableName: "Cars",
        ProjectionExpression: "#id, #name, #type, #manufacturer, #fuel_type, #description",
        ExpressionAttributeNames: {
            "#id": "id",
            "#type": "type",
            "#name": "name",
            "#manufacturer": "manufacturer",
            "#fuel_type": "fuel_type",
            "#description": "description"
        }
    };

    console.log("Scanning Cars Table.");
    docClient.scan(params, function (err, data) {
        if (err) {
            console.error("Unable to scan data. Error JSON : ", JSON.stringify(err, null, 2));
        } else {
            res.send(data);
            // print all the Cars
            console.log("Scan succeeded.");
            data.Items.forEach(function (car) {
                console.log(car.id, car.type, car.name)
            });
        }
    });
});


/* Get Cars Item By ID */
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const params = {
        TableName: "Cars",
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeNames: {
            "#id": "id"
        },
        ExpressionAttributeValues: {
            ":id": parseInt(id)
        }
    };

    docClient.query(params, function (err, data) {
        if (err) {
            console.log(JSON.stringify(err, null, 2));
        } else {
            res.send(data);
        }
    });
});


/* Get Car by Type */
router.get('/by/type', (req, res) => {
    const {type} = req.query;
    /*const params = {
        TableName: "Cars",
        ProjectionExpression: "#id, #name, #type, #manufacturer, #fuel_type, #description",
        FilterExpression: "#id",
        ExpressionAttributeNames: {
            "#id": "id",
            "#type": "type",
            "#name": "name",
            "#manufacturer": "manufacturer",
            "#fuel_type": "fuel_type",
            "#description": "description"
        },
        ExpressionAttributeValues: {
            ":id": 1
        }
    }*/

    /*const params = {
        TableName: "Cars",
        ProjectionExpression: "#id, #name, #type",
        FilterExpression: "#id between :start_yr and :end_yr",
        ExpressionAttributeNames: {
            "#id": "id",
        },
        ExpressionAttributeValues: {
            ":start_yr": 1,
            ":end_yr": 2
        }
    };*/

    const params = {
        TableName: "Cars",
        ProjectionExpression: "#id, #name, #type, #manufacturer, #fuel_type, #description",
        ExpressionAttributeNames: {
            "#id": "id",
            "#type": "type",
            "#name": "name",
            "#manufacturer": "manufacturer",
            "#fuel_type": "fuel_type",
            "#description": "description"
        },
        FilterExpression: "#id",
        ExpressionAttributeValues: {
            ":id": 1
        }
    };

    docClient.scan(params, function (err, data) {
        if (err) console.error(JSON.stringify(err, null, 2));
        else res.send(data);
    })
})

module.exports = router;
