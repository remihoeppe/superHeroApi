const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function updateHero(hero: any) {
    const params = {
        TableName: process.env.HEROS_TABLE,
        Key: { id: hero.id },
        Item: hero,
    };

    try {
        await docClient.put(params).promise();
        return hero;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default updateHero;
