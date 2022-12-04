import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import styles from "./HeroDetailsCard.module.scss";
import { useState, useEffect } from "react";
import { addHero } from "../../utils/api";

const HeroDetailsCard = ({ heros }) => {
    const { heroId } = useParams();
    const [hero, setHero] = useState({});
    const [newHero, setNewHero] = useState({});
    const [stats, setStats] = useState({
        intelligence: hero?.powerstats?.intelligence,
        combat: 1,
        durability: 1,
        power: 1,
        speed: 1,
        strength: 1,
    });

    let navigate = useNavigate();

    useEffect(() => {
        const hero = heros.find((hero) => `${hero.id}` === heroId);
        setHero(hero);
        setStats({
            combat: hero?.powerstats?.combat,
            durability: hero?.powerstats?.durability,
            intelligence: hero?.powerstats?.intelligence,
            power: hero?.powerstats?.power,
            speed: hero?.powerstats?.speed,
            strength: hero?.powerstats?.strength,
        });
    }, [heros]);

    useEffect(() => {
        const newHeroObject = {
            id: hero?.id,
            name: hero?.name,
            img: hero?.images?.lg,
            combat: hero?.powerstats?.combat,
            durability: hero?.powerstats?.durability,
            intelligence: hero?.powerstats?.intelligence,
            power: hero?.powerstats?.power,
            speed: hero?.powerstats?.speed,
            strength: hero?.powerstats?.strength,
        };

        setNewHero(newHeroObject);
    }, [hero]);

    const handleChange = (event) => {
        const newStats = { ...stats };
        newStats[event.target.id] = parseInt(event.target.value);
        setStats(newStats);
    };

    const handleSaveHero = async () => {
        const updatedHero = { ...newHero, ...stats };
        await addHero(updatedHero);
        setNewHero(updatedHero);
    };

    return hero ? (
        <div className={styles.HeroDetailsCard}>
            <h2>{hero.name}</h2>
            <div className={styles.HeroDetailsCard__HeroInfo}>
                <img
                    className={styles.HeroDetailsCard__HeroInfo_Img}
                    src={hero.images?.lg}
                    alt="image"
                />
                <div className={styles.HeroDetailsCard__HeroInfo_Text}>
                    <div>
                        <h3>Biography</h3>
                        <p>Full Name: {hero.biography?.fullName}</p>
                        <p>Alter Ego: {hero.biography?.alterEgos}</p>
                        <p>Place Of Birth: {hero.biography?.placeOfBirth}</p>
                        <p>
                            First Appeared In: {hero.biography?.firstAppearance}
                        </p>
                        <p>
                            Alter Ego:{" "}
                            {hero.biography?.work?.occupation
                                ? hero.biography?.work?.occupation
                                : "Unknown"}
                        </p>
                    </div>
                    <div className={styles.HeroDetailsCard__HeroInfo_Stats}>
                        <h3>Stats</h3>
                        <form>
                            <div
                                className={
                                    styles.HeroDetailsCard__HeroInfo_Inputs
                                }>
                                <div>
                                    <label htmlFor="intelligence">
                                        Intelligence:
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        id="intelligence"
                                        type="number"
                                        value={stats.intelligence}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="strength">Strength :</label>
                                    <input
                                        onChange={handleChange}
                                        id="strength"
                                        type="number"
                                        value={stats.strength}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="speed">Speed:</label>
                                    <input
                                        onChange={handleChange}
                                        id="speed"
                                        type="number"
                                        value={stats.speed}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="durability">
                                        Durability:
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        id="durability"
                                        type="number"
                                        value={stats.durability}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="power">Power:</label>
                                    <input
                                        onChange={handleChange}
                                        id="power"
                                        type="number"
                                        value={stats.power}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="combat">Combat:</label>
                                    <input
                                        onChange={handleChange}
                                        id="combat"
                                        type="number"
                                        value={stats.combat}
                                    />
                                </div>
                            </div>
                        </form>
                        <button
                            className={styles.HeroDetailsCard__HeroInfo_AddBtn}
                            onClick={handleSaveHero}>
                            Add Hero To Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        navigate("/dashboard")
    );
};

export default HeroDetailsCard;
