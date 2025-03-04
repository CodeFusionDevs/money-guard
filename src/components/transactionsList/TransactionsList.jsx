import { useState } from "react";
import styles from "./transactionsList.module.css";
import ButtonAddTransactions from "../buttonAddTransactions/ButtonAddTransactions";
import {
  selectTransactions,
  selectTransactionCategories,
} from "../../redux/transactions/selectors.js";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/operations.js";
import FormButton from "../common/FormButton/FormButton.jsx";
import EditModal from "../modalEditTransaction/ModalEditTransactions.jsx";
import ToastDeleteConfirm from "../ToastDeleteConfirm/ToastDeleteConfirm.jsx";

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Other";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
      .replace(/\//g, ".");
  };

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.transactionsTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{formatDate(transaction.transactionDate)}</td>
                <td>{transaction.type === "INCOME" ? "+" : "-"}</td>
                <td>{getCategoryName(transaction.categoryId)}</td>
                <td>{transaction.comment}</td>
                <td
                  className={
                    transaction.type === "INCOME"
                      ? styles.income
                      : styles.expense
                  }
                >
                  {transaction.amount.toLocaleString()} ₴
                </td>
                <td className={styles.actionButtons}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEdit(transaction)}
                  >
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5001 6.33343L8.16672 4.0001M1.45837 13.0418L3.43259 12.8224C3.67379 12.7956 3.79439 12.7822 3.90712 12.7457C4.00713 12.7133 4.1023 12.6676 4.19006 12.6097C4.28897 12.5445 4.37478 12.4587 4.54638 12.2871L12.2501 4.58343C12.8944 3.9391 12.8944 2.89443 12.2501 2.25009C11.6057 1.60576 10.5611 1.60576 9.91672 2.25009L2.21305 9.95375C2.04144 10.1254 1.95564 10.2112 1.89041 10.3101C1.83254 10.3978 1.7868 10.493 1.75442 10.593C1.71793 10.7057 1.70453 10.8263 1.67773 11.0675L1.45837 13.0418Z"
                        stroke="white"
                        strokeOpacity="0.6"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <FormButton
                    type="button"
                    variant={"btn_delete"}
                    text={"Delete"}
                    onClick={() => handleDelete(transaction.id)}
                  />  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.controls}>
        <ButtonAddTransactions />
      </div>

      {isModalOpen && selectedTransaction && (
        <EditModal closeModal={closeModal} item={selectedTransaction} />
      )}
    </div>
  );
};

export default TransactionsList;
