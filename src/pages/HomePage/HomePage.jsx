import styles from "./HomePage.module.css";
import {NavLink} from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <NavLink to={"/users"}>Users</NavLink>
    </div>
  );
};

export default HomePage;
