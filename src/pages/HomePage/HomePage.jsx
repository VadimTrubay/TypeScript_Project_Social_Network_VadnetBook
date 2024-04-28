import styles from "./HomePage.module.css";
import {NavLink} from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <p>Welcome to contactbook ☎</p>
      <p>This is my best project for React course))))))))))</p>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

export default HomePage;
