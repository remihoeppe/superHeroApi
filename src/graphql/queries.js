/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHeroById = `
  query GetHeroById($id: String!) {
    getHeroById(id: $id) {
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
export const getHeroByName = /* GraphQL */ `
    query GetHeroByName($name: String!) {
        getHeroByName(name: $name) {
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
export const listHeros = /* GraphQL */ `
    query ListHeros {
        listHeros {
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
