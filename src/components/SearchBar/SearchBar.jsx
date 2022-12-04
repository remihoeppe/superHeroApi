import styles from "./SearchBar.module.scss";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const { setSearch } = useContext(SearchContext);
    let navigate = useNavigate();

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleClick = () => {
        setSearch(input);
        setInput("");
        navigate("/dashboard");
    };

    return (
        <div className={styles.SearchBar}>
            <input
                className={styles.SearchBar__Input}
                type="text"
                value={input}
                onChange={handleChange}
            />
            <button className={styles.SearchBar__Btn} onClick={handleClick}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
