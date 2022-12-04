import { deleteHero } from "../../utils/api";
import styles from "./HeroCardCollection.module.scss";

const HeroCardCollection = ({ hero, onDeleteHero }) => {
    // Each HeroCard should display an image, the name, and stats of the hero

    const handleClick = () => {
        onDeleteHero(hero.id);
    };

    return (
        <div className={styles.HeroCardCollection}>
            <div>
                <h3>{hero.name}</h3>
                <p>{hero?.biography?.publisher}</p>
                <img
                    className={styles.HeroCardCollection__Img}
                    src={hero?.img}
                />

                <div className={styles.HeroCardCollection__Stats}>
                    <h3>STATS</h3>
                    <ul>
                        <li>INT: {hero.intelligence}</li>
                        <li>DUR: {hero.durability}</li>
                        <li>CBT: {hero.combat}</li>
                        <li>PWR: {hero.power}</li>
                        <li>SPD: {hero.speed}</li>
                        <li>STR: {hero.strength} </li>
                    </ul>
                </div>

                <button onClick={handleClick}>Remove Hero</button>
            </div>
        </div>
    );
};

export default HeroCardCollection;
