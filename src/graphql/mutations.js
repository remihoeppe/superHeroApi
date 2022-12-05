/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHero = /* GraphQL */ `
    mutation CreateHero($info: HeroInput) {
        createHero(hero: $info) {
            combat
            durability
            id
            img
            intelligence
            name
            power
            speed
            strength
        }
    }
`;
export const deleteHero = /* GraphQL */ `
    mutation DeleteHero($id: String!) {
        deleteHero(heroId: $id) {
            id
            name
            img
            combat
            durability
            intelligence
            power
            speed
            strength
        }
    }
`;
export const updateHero = /* GraphQL */ `
    mutation UpdateHero($updateData: HeroInput) {
        updateHero(hero: $updateData) {
            combat
            durability
            id
            img
            intelligence
            name
            power
            speed
            strength
        }
    }
`;
