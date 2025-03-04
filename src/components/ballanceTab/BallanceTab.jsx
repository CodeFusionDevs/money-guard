import styles from "./BallanceTab.module.css";
import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/auth/selectors";

const BallanceTab = () => {
  const balance = useSelector(selectBalance);

  if (balance === "") {
    console.log("In BallanceTab balance is not fetched");
  } else {
    console.log("In BallanceTab balance is", balance);
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Your Balance</p>
      <p className={styles.balance}>₴ {balance}</p>
    </div>
  );
};

export default BallanceTab;
