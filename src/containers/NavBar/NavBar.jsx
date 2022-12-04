import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div>
                <Link to="/">HOME</Link>
            </div>
            <div>
                <Link to="/dashboard">DASHBOARD</Link>
            </div>
            <div>
                <Link to="/collection">COLLECTION</Link>
            </div>

            <SearchBar />
        </div>
    );
};

export default NavBar;
