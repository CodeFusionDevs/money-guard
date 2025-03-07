import styles from "./EmptyTransaction.module.css";
import emptyTransaction from "../../assets/images/emptytransaction.webp.webp";

const EmptyTransaction = () => {
  return (
    <div className={styles.wrapper}>
      <img src={emptyTransaction} alt="page-not-found" width="240" />
      <div className={styles.content}>
        <h4 className={styles.title}>Transaction history is empty now.</h4>
      </div>
    </div>
  );
};

export default EmptyTransaction;
