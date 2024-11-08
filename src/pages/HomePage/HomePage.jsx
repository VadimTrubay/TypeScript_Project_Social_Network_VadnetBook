import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Loader />
      <NavLink to={"/users"}>Users</NavLink>
    </div>
  );
};

export default HomePage;
