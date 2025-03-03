import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./Balance.module.css";
import { setTotalBalance } from "../../../../redux/balance/balanceSlice";
import { selectTotalBalance } from "../../../../redux/balance/balanceSelectors";
import { selectTransactions } from "../../../../redux/transactions/selectors";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectTotalBalance);
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    const totalSum = transactions.reduce((sumValue, transaction) => {
      let numberValue = parseFloat(transaction.amount);
      return sumValue + numberValue;
    }, 0);
    dispatch(setTotalBalance(totalSum));
  }, [dispatch, transactions]);

  return (
    <div className={css.styleBalance}>
      <h3 className={css.balanceTitle}>Your balance</h3>
      <span className={css.numberBalance}>$ {balance.toFixed(2)}</span>{" "}
    </div>
  );
};

export default Balance;
