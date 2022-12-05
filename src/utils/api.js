import { Amplify } from "aws-amplify";
import config from "./aws.config";
import { API, graphqlOperation } from "aws-amplify";
import { listHeros as listHerosQuery } from "../graphql/queries";
import {
    createHero as createHeroMutation,
    deleteHero as deleteHeroMutation,
    updateHero as updateHeroMutation,
} from "./../graphql/mutations";

Amplify.configure(config);

export const getHeros = async () => {
    try {
        const promise = await fetch(
            `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`,
        );

        const data = await promise.json();

        return data;
    } catch {
        throw new Error("Something went wrong");
    }
};

export async function fetchHeros() {
    const data = await API.graphql({ query: listHerosQuery });
    return data;
}

export async function getOneHero() {
    const data = await API.graphql(
        graphqlOperation(getHeroByIdQuery, { id: "YYY" }),
    );
    return data;
}

export async function addHero(newHeroInfo) {
    await API.graphql(
        graphqlOperation(createHeroMutation, { info: newHeroInfo }),
    );
}

export async function deleteHero(heroId) {
    await API.graphql(graphqlOperation(deleteHeroMutation, { id: heroId }));
}

export async function updateHero(updatedHero) {
    await API.graphql(
        graphqlOperation(updateHeroMutation, {
            updateData: updatedHero,
        }),
    );
}

// Template for Object
// const newHeroInfo = {
//     id: "",
//     name: "",
//     img: "",
//     combat: 1,
//     durability: 1,
//     intelligence: 1,
//     power: 1,
//     speed: 1,
//     strength: 1,
// };
