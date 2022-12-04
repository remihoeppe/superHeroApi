import styles from "./HeroCard.module.scss";
import { Link } from "react-router-dom";

const HeroCard = ({ hero }) => {
    const path = `/dashboard/${hero.id}`;

    // Each HeroCard should display an image, the name, and stats of the hero
    return (
        <div className={styles.HeroCard}>
            <div>
                <h3>{hero.name}</h3>
                <p>{hero?.biography?.publisher}</p>
                <img className={styles.HeroCard__Img} src={hero?.images?.lg} />
            </div>

            <Link to={path}>
                <button>More details</button>
            </Link>
        </div>
    );
};

export default HeroCard;
