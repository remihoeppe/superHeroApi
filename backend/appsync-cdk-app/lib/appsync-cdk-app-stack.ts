import { Construct } from "constructs";
import * as cdk from "@aws-cdk/core";
import * as appsync from "@aws-cdk/aws-appsync";
import * as ddb from "@aws-cdk/aws-dynamodb";
import * as lambda from "@aws-cdk/aws-lambda";

export class AppsyncCdkAppStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Creates the AppSync API
        const api = new appsync.GraphqlApi(this, "Api", {
            name: "cdk-heros-appsync-api",
            schema: appsync.Schema.fromAsset("graphql/schema.graphql"),
            authorizationConfig: {
                defaultAuthorization: {
                    authorizationType: appsync.AuthorizationType.API_KEY,
                    apiKeyConfig: {
                        expires: cdk.Expiration.after(cdk.Duration.days(365)),
                    },
                },
            },
            xrayEnabled: true,
        });

        const herosLambda = new lambda.Function(this, "AppSyncHerosHandler", {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: "main.handler",
            code: lambda.Code.fromAsset("lambda-fns"),
            memorySize: 1024,
        });

        // Set the new Lambda function as a data source for the AppSync API
        const lambdaDs = api.addLambdaDataSource(
            "lambdaDatasource",
            herosLambda,
        );

        lambdaDs.createResolver({
            typeName: "Query",
            fieldName: "getHeroById",
        });

        lambdaDs.createResolver({
            typeName: "Query",
            fieldName: "getHeroByName",
        });

        lambdaDs.createResolver({
            typeName: "Query",
            fieldName: "listHeros",
        });

        lambdaDs.createResolver({
            typeName: "Mutation",
            fieldName: "createHero",
        });

        lambdaDs.createResolver({
            typeName: "Mutation",
            fieldName: "deleteHero",
        });

        lambdaDs.createResolver({
            typeName: "Mutation",
            fieldName: "updateHero",
        });

        const herosTable = new ddb.Table(this, "CDKHerosTable", {
            billingMode: ddb.BillingMode.PAY_PER_REQUEST,
            partitionKey: {
                name: "id",
                type: ddb.AttributeType.STRING,
            },
        });

        // enable the Lambda function to access the DynamoDB table (using IAM)
        herosTable.grantFullAccess(herosLambda);

        // Create an environment variable that we will use in the function code
        herosLambda.addEnvironment("HEROS_TABLE", herosTable.tableName);

        // Prints out the AppSync GraphQL endpoint to the terminal
        new cdk.CfnOutput(this, "GraphQLAPIURL", {
            value: api.graphqlUrl,
        });

        // Prints out the AppSync GraphQL API key to the terminal
        new cdk.CfnOutput(this, "GraphQLAPIKey", {
            value: api.apiKey || "",
        });

        // Prints out the stack region to the terminal
        new cdk.CfnOutput(this, "Stack Region", {
            value: this.region,
        });
    }
}
