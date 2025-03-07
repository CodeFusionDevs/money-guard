import styles from "./BallanceTab.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectBalance } from "../../redux/auth/selectors";
import { getCurrentUser } from "../../redux/auth/operations";
import { useEffect } from "react";

const BallanceTab = () => {
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, transactions]);
  
  return (
    <div className={styles.container}>
      <p className={styles.title}>Your Balance</p>
      <p className={styles.balance}>₴ {balance}</p>
    </div>
  );
};

export default BallanceTab;
