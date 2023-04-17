# SuperHero Api

The Live Version of this project can be seen here
[SuperHeroAPI](https://main.d2r2qa943hw608.amplifyapp.com/)

## The Task At Hand

You are charged to create a basic application for a superhero enthusiast, that can perform following functions:

1. Allow a user to search for their favorite superhero, by name, see their details, edit them and view all their saved superheroes.
2. Select the superhero and see their image and power stats.
3. Edit the power stats
4. Save the image and stats to be viewed later.

## Tech Stack Used

-   ReactJS
-   GraphQL
-   NodeJS
-   DynamoDB

I used this API as the source for the original data: https://akabab.github.io/superhero-api/api/

## Setup

### Front-End

The Front-End was deployed on AWS Amplify through the GUI. The GitHub repository was connected to AWS Amplify web hosting and deployed to an Amplify CDN.

If you want to run this application locally you can also follow the below instruction:

`npm install`
`npm run dev`

Vite will display which port to access on your localhost
(e.g. http://localhost:5173/)

### Back-End

The backend is already deployed on AWS, so no install is required. The code is in the Back-End directory

To deploy this API on the AWS AppSync service you can follow the steps below

`npm run build && cdk deploy`

## Assumptions

-   I decided not to copy all the superheroes from the API above, rather you can save and update individual heroes to the collection
-   I set up a GraphQL API by deploying to the AWS AppSync platform and creating the required table in DynamoDB
-   I decided to let users edit hero stats before adding them to the collection. Adding the same hero again from the dashboard will update them in the collection, rather than creating duplicates.
-   I didn't use any component libraries as part of this project, inputs and buttons are basic

## Challenges

-   I had never used GraphQL prior the completing this challenge. Changing mindset from classic REST API, and getting used to a brand-new syntax took me a while, and I'm still getting used to the best ways to use it. There was quite a lot of trial and error along the way.
-   I also had limited exposure to AWS, and hadn't deployed a full backend previously. Even though I followed the documentation the process was quite laborious, and my first attempt was unsalvageable requiring me to create a second AWS account.
-   One of the main issues I ran into was the discrepancy between the resolver functions and the query variable names which led to my API calls not being able to resolve properly, I ended up testing each function individually for queries and mutation. Each redeployment slowed down the development process, but I wanted to check everything was working properly.

## Next steps

-   For a future iteration for this project I would want to be able to update heroes from the collection page
-   I would refactor the HeroDetailsCard component as it has too much state, possibly using context
-   Styling could use polishing, and components should be standardized throughout the application
-   One of the important parts that this project is missing is testing, both component testing for the React application and backend testing for the API
-   I would implement a new updateHero method using a proper PATCH method from AWS rather than a simple PUT to allow for partial updates
-   Ideally I would also like to add some form of authentication so that a new table is created for each user signing up
