const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

export async function getHeroById(id: string) {
    const params = {
        TableName: process.env.HEROS_TABLE,
        Key: { id },
    };

    console.log("In getHeroById", params);

    try {
        const { Item } = await docClient.get(params).promise();
        return Item;
    } catch (err) {
        console.log("DynamoDB error: ", err);
    }
}

export async function getHeroByName(heroName: string) {
    const params = {
        TableName: process.env.HEROS_TABLE,
        Key: { name: heroName },
    };
    try {
        const { Item } = await docClient.get(params).promise();
        return Item;
    } catch (err) {
        console.log("DynamoDB error: ", err);
    }
}
