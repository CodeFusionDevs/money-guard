import styles from "./HomePage.module.css";
import HeaderLayout from "../../layout/HeaderLayout";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeaderLayout />
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
