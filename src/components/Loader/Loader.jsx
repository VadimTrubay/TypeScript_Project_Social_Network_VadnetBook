import styles from "./Loader.module.css";
import loader from "./loader.svg";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt="Wait..." />
    </div>
  );
};

export default Loader;
