import { useContext } from "react";
import picture from "../../assets/home-background.webp";
import { SearchContext } from "../../context/SearchContext";
import styles from "./Home.module.scss";

const Home = () => {
    const { search } = useContext(SearchContext);

    const searchString = search
        ? `The last Super Hero searched was ${search}`
        : "No recent searches";

    return (
        <div className={styles.Home}>
            <h1>Superheroes API App</h1>
            <img className={styles.Home__Pic} src={picture} alt="" />
            <p>{searchString}</p>
        </div>
    );
};

export default Home;
