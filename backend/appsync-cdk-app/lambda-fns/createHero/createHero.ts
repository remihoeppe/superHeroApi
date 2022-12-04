const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
import Hero from "./../Hero/Hero";

async function createHero(hero: Hero) {
    const params = {
        TableName: process.env.HEROS_TABLE,
        Item: hero,
    };

    await docClient.put(params, function (err: any, data: any) {
        console.log("Params in createHero:", params);
        if (err) console.debug("error From createHero:", err);
        else console.log("Data From createHero:", data);
    });
}

export default createHero;
