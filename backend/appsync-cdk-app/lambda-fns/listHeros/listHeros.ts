const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function listHeros() {
    const params = {
        TableName: process.env.HEROS_TABLE,
    };

    try {
        const data = await docClient.scan(params).promise();

        console.log(params);
        return data.Items;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default listHeros;
