const dynamoDB = require('../config/dynamoDB');
const docClient = require('../config/docClient');
const uuid = require('uuid');
const fs = require('fs');


/* Create Table */
/*const params = {
    TableName: 'happy-projects',
    KeySchema: [
        {
            AttributeName: 'PK',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'SK',
            KeyType: 'RANGE'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'PK',
            AttributeType: 'S'
        },
        {
            AttributeName: 'SK',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    GlobalSecondaryIndexes: [{
        IndexName: "Project-Employee-Index",
        KeySchema: [
            {
                AttributeName: "SK",
                KeyType: "HASH"
            },
            {
                AttributeName: "PK",
                KeyType: "RANGE"
            }
        ],
        Projection: {
            ProjectionType: "ALL"
        },
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    }]
}

dynamoDB.createTable(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Delete Table */
/*dynamoDB.deleteTable({TableName: 'happy-projects'}, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Put Organization Item */
/*const orgID = uuid.v4()
const params = {
    TableName: 'happy-projects',
    Item: {
        PK: `ORG#${orgID}`,
        SK: `#METADATA#${orgID}`,
        name: 'Happy Inc',
        tier: 'free-tier'
    }
}

docClient.put(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Update Organization Item */
/*const orgID = 'f54e9704-b573-43cb-899b-a5e03b8ac9ec';
const params = {
    TableName: 'happy-projects',
    Key: {PK: `ORG#${orgID}`, SK: `#METADATA#${orgID}`},
    UpdateExpression: 'set #org_id = :org_id',
    ExpressionAttributeNames: {'#org_id': 'org_id'},
    ExpressionAttributeValues: {
        ':org_id': orgID
    }
};



docClient.update(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Delete Organization Item */
/*
const orgID = 'd3fda4e6-e34a-4caf-8ede-a6d6c23d2a67';
const params = {
    TableName : 'happy-projects',
    Key: {PK: `ORG#${orgID}`, SK: `'PRO#agile#e343a14a-04cf-4305-9487-a78c58b358b7`},
};

docClient.delete(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});
*/


/* Get An Organization Item */
/*const params = {
    TableName: 'happy-projects',
    Key: {
        PK: 'ORG#d3fda4e6-e34a-4caf-8ede-a6d6c23d2a67',
        SK: '#METADATA#d3fda4e6-e34a-4caf-8ede-a6d6c23d2a67'
    }
};

docClient.get(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Put Project Item */
/*const abcOrgId = 'd3fda4e6-e34a-4caf-8ede-a6d6c23d2a67';
const projectID = uuid.v4();

const params = {
    TableName: 'happy-projects',
    Item: {
        PK: `ORG#${abcOrgId}`,
        SK: `PRO#agile#${projectID}`,
        name: 'Project A',
        project_id: projectID
    }
}

docClient.put(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Update Project Item */
/*const orgID = 'd3fda4e6-e34a-4caf-8ede-a6d6c23d2a67';
const projectID = 'e343a14a-04cf-4305-9487-a78c58b358b7';

const params = {
    TableName: 'happy-projects',
    Key: {PK: `ORG#${orgID}`, SK: `PRO#agile#${projectID}`},
    UpdateExpression: 'set #name = :name',
    ExpressionAttributeNames: {'#name': 'name'},
    ExpressionAttributeValues: {
        ':name': 'Project B'
    }
};



docClient.update(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Find all the projects of an organization */
/*const params = {
    TableName: 'happy-projects',
    KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
    ExpressionAttributeNames: {'#PK': 'PK', '#SK': 'SK'},
    ExpressionAttributeValues: {
        ':PK': 'ORG#f54e9704-b573-43cb-899b-a5e03b8ac9ec',
        ':SK': 'PRO#'
    }
};

docClient.query(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Add Employee Item */
/*const happyIncOrgId = 'f54e9704-b573-43cb-899b-a5e03b8ac9ec';
const employeeID = uuid.v4();

const params = {
    TableName: 'happy-projects',
    Item: {
        PK: `ORG#${happyIncOrgId}`,
        SK: `EMP#${employeeID}`,
        name: 'Jane Doe',
        email: 'janedoe@email.com'
    }
}

docClient.put(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Assign project to a employee */
/*const happyIncOrgId = 'f54e9704-b573-43cb-899b-a5e03b8ac9ec';
const projectX = '4b255b62-edb2-4846-acd8-7e1fe86b2d53';
const projectY = 'ee2b2a6c-7f77-41ce-96c3-85775e80e09a';
const projectZ = '8367baaf-18f6-4787-8cc6-557acaf20aa1';
const manoj = '1bbfac01-ec8c-43d6-be06-b44f6b40b256';
const jane = '342bb3ab-77a3-46f7-b084-880b6beb6e3b';

const params = {
    TableName: 'happy-projects',
    Item: {
        PK: `ORG#${happyIncOrgId}#PRO#${projectX}`,
        SK: `ORG#${happyIncOrgId}#EMP#${jane}`,
        name: 'Jane Doe',
        project: 'Project X',
        date_of_join: new Date().toUTCString()
    }
}

docClient.put(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Update Project Employee Item */
/*const happyIncOrgId = 'f54e9704-b573-43cb-899b-a5e03b8ac9ec';
const projectY = 'ee2b2a6c-7f77-41ce-96c3-85775e80e09a';
const manoj = '1bbfac01-ec8c-43d6-be06-b44f6b40b256';

const params = {
    TableName: 'happy-projects',
    Key: {PK: `ORG#${happyIncOrgId}#PRO#${projectY}`, SK: `ORG#${happyIncOrgId}#EMP#${manoj}`},
    UpdateExpression: 'set #project = :project',
    ExpressionAttributeNames: {'#project': 'project'},
    ExpressionAttributeValues: {
        ':project': 'Project Y'
    }
};

docClient.update(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
})*/


/* Find all the employee of an projects */
/*const happyIncOrgId = 'f54e9704-b573-43cb-899b-a5e03b8ac9ec';
const projectX = '4b255b62-edb2-4846-acd8-7e1fe86b2d53';

const params = {
    TableName: 'happy-projects',
    KeyConditionExpression: '#PK = :PK',
    ExpressionAttributeNames: {'#PK': 'PK'},
    ExpressionAttributeValues: {
        ':PK': `ORG#${happyIncOrgId}#PRO#${projectX}`
    }
};

docClient.query(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Find projects an employee is part of - Using an inverted index */
const happyIncOrgId = 'f54e9704-b573-43cb-899b-a5e03b8ac9ec';
const empId = '342bb3ab-77a3-46f7-b084-880b6beb6e3b';

const params = {
    TableName: 'happy-projects',
    IndexName: 'Project-Employee-Index',
    KeyConditionExpression: '#SK = :SK',
    ExpressionAttributeNames: {'#SK': 'SK'},
    ExpressionAttributeValues: {
        ':SK': `ORG#${happyIncOrgId}#EMP#${empId}`
    }
};

docClient.query(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});


/* Get All Item From Dynamodb */
/*docClient.scan({TableName: 'happy-projects'}, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});*/


/* Insert Json Data */
/*const data = JSON.parse(fs.readFileSync('./test.json', "utf-8"));
data.forEach(item => {
    const params = {
        TableName: 'happy-projects',
        Item: {...item}
    }

    docClient.put(params, (err, data) => {
        if (err) console.log(err);
        else console.log(data);
    });
});*/
