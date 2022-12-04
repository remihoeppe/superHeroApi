import styles from "./App.module.scss";
import Dashboard from "./containers/Dashboard";
import HeroDetailsCard from "./components/HeroDetailsCard";
import HeroCollection from "./containers/HeroCollection";
import Home from "./containers/Home";
import NavBar from "./containers/NavBar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchProvider from "./context/SearchContext";
import { getHeros } from "./utils/api";

const App = () => {
    const [heros, setHeroes] = useState([]);

    const getData = async () => {
        const herosList = await getHeros();
        console.log(herosList);
        setHeroes(herosList);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <SearchProvider>
            <BrowserRouter>
                <div className={styles.App}>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="dashboard"
                            element={<Dashboard heros={heros} />}
                        />
                        <Route
                            path="/dashboard/:heroId"
                            element={<HeroDetailsCard heros={heros} />}
                        />
                        <Route
                            path="/collection"
                            element={<HeroCollection />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </SearchProvider>
    );
};

export default App;
