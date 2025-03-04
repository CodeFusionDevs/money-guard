import styles from "./EmptyHistory.module.css";

const EmptyHistory = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/public/emptytransaction.webp.webp" alt="page-not-found" width="240" />
      <div className={styles.content}>
        <h4 className={styles.title}>Transaction history is empty now.</h4>
      </div>
    </div>
  );
};

export default EmptyHistory;
