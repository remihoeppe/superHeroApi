import styles from "./HeroCollection.module.scss";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { fetchHeros, deleteHero } from "../../utils/api";
import HeroCardCollection from "../../components/HeroCardCollection";

const HeroCollection = () => {
    const { search, setSearch } = useContext(SearchContext);
    const [displayHeros, setDisplayHeros] = useState([]);

    const handleDeleteHero = async (id) => {
        await deleteHero(id);
        getCollectionHeros();
    };

    const getCollectionHeros = async () => {
        const data = await fetchHeros();
        setDisplayHeros(data.data.listHeros);
    };

    useEffect(() => {
        getCollectionHeros();
    }, []);

    useEffect(() => {
        const updatedDisplayedHeros = displayHeros.filter((hero) => {
            return hero.name.toLowerCase().includes(search.toLowerCase());
        });

        setDisplayHeros(updatedDisplayedHeros);
    }, [search]);

    return (
        <>
            <h1>COLLECTION</h1>
            <p>{`Currently displayed are ${displayHeros?.length} heros`}</p>
            <div className={styles.HeroCollection__HeroGrid}>
                {displayHeros.map((hero) => {
                    return (
                        <HeroCardCollection
                            key={hero.id}
                            hero={hero}
                            onDeleteHero={handleDeleteHero}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default HeroCollection;
