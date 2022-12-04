const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function deleteHero(heroId: string) {
    const params = {
        TableName: process.env.HEROS_TABLE,
        Key: {
            id: heroId,
        },
    };
    console.log("in deleteHero", params);

    try {
        await docClient.delete(params).promise();
        return heroId;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default deleteHero;
