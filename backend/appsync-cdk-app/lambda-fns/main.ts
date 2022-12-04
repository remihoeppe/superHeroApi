import createHero from "./createHero/createHero";
import deleteHero from "./deleteHero/deleteHero";
import { getHeroById, getHeroByName } from "./getHero/getHero";
import Hero from "./Hero/Hero";
import listHeros from "./listHeros/listHeros";
import updateHero from "./updateHero/updateHero";

type AppSyncEvent = {
    info: {
        fieldName: string;
    };
    arguments: {
        heroName: string;
        heroId: string;
        hero: Hero;
    };
};

exports.handler = async (event: AppSyncEvent) => {
    switch (event.info.fieldName) {
        case "getHeroById":
            return await getHeroById(event.arguments.heroId);
        case "getHeroByName":
            return await getHeroByName(event.arguments.heroName);
        case "createHero":
            return await createHero(event.arguments.hero);
        case "listHeros":
            return await listHeros();
        case "deleteHero":
            return await deleteHero(event.arguments.heroId);
        case "updateHero":
            return await updateHero(event.arguments.hero);
        default:
            return null;
    }
};
