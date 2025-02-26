import styles from "./homeTab.module.css";


const HomeTab = () => {
  return (
    <div className={styles.container}>
      <h1>HomeTab</h1>
      <TransactionsList />
      <button onClick={}>
        Add Transaction
      </button>
    </div>
  );
};

export default HomeTab;
