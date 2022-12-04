import HeroCard from "../../components/HeroCard";
import styles from "./Dashboard.module.scss";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Dashboard = ({ heros }) => {
    const { search, setSearch } = useContext(SearchContext);
    const [displayHeros, setDisplayHeros] = useState([]);

    useEffect(() => {
        setDisplayHeros(heros);
    }, [heros]);

    useEffect(() => {
        const updatedDisplayedHeros = heros.filter((hero) => {
            return hero.name.toLowerCase().includes(search.toLowerCase());
        });

        setDisplayHeros(updatedDisplayedHeros);
    }, [search]);

    return (
        <>
            <h1>DASHBOARD</h1>
            <p>{`Currently displayed are ${displayHeros?.length} heros`}</p>
            <div className={styles.Dashboard__CharGrid}>
                {displayHeros.map((hero) => {
                    return <HeroCard key={hero.id} hero={hero} />;
                })}
            </div>
        </>
    );
};

export default Dashboard;
