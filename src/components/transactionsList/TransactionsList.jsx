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
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import {
  getTransactions,
  getCategories,
} from "../../redux/transactions/operations.js";

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

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

  const handleDeleteClick = (id) => {
    setTransactionToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (transactionToDelete) {
      try {
        // Wait for the deletion to complete
        await dispatch(deleteTransaction(transactionToDelete)).unwrap();
        // Then refresh the transactions list
        dispatch(getTransactions());
        setShowDeleteConfirm(false);
        setTransactionToDelete(null);
      } catch (error) {
        console.error("Failed to delete transaction:", error);
      }
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setTransactionToDelete(null);
  };

  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      {isMobile ? (
        <>
          <div className={styles.mobileContainer}>
            {transactions.map((transaction) => (
              <ul className={styles.mobileTable} key={transaction.id}>
                <li>
                  <div className={styles.mobileTableRow}>
                    <p className={styles.mobileTableLabel}>Date</p>
                    <div className={styles.mobileTableDate}>
                      {formatDate(transaction.transactionDate)}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.mobileTableRow}>
                    <p className={styles.mobileTableLabel}>Type</p>
                    <div className={styles.mobileTableType}>
                      {transaction.type === "INCOME" ? "+" : "-"}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.mobileTableRow}>
                    <p className={styles.mobileTableLabel}>Category</p>
                    <div className={styles.mobileTableCategory}>
                      {getCategoryName(transaction.categoryId)}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.mobileTableRow}>
                    <p className={styles.mobileTableLabel}>Comment</p>
                    <div className={styles.mobileTableComment}>
                      {transaction.comment}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.mobileTableRow}>
                    <p className={styles.mobileTableLabel}>Sum</p>
                    <div
                      className={`${styles.mobileTableSum} ${
                        transaction.type === "INCOME"
                          ? styles.income
                          : styles.expense
                      }`}
                    >
                      {transaction.amount.toLocaleString()} ₴
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.mobileTableActionButtons}>
                    <div className={styles.mobileTableActionButtonsDelete}>
                      <FormButton
                        type="button"
                        variant={"btn_delete"}
                        text={"Delete"}
                        onClick={() => handleDeleteClick(transaction.id)}
                      />
                    </div>
                    <div className={styles.mobileTableActionButtonsEdit}>
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
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>

          <div className={styles.controls}>
            <ButtonAddTransactions />
          </div>
        </>
      ) : (
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
                        onClick={() => handleDeleteClick(transaction.id)}
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
        </div>
      )}
      {isModalOpen && selectedTransaction && (
        <EditModal closeModal={closeModal} item={selectedTransaction} />
      )}

      {showDeleteConfirm && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmDialog}>
            <h3>Delete Transaction</h3>
            <p>Are you sure you want to delete this transaction?</p>
            <div className={styles.confirmButtons}>
              <FormButton
                type="button"
                variant={"btn_cancel"}
                text={"Cancel"}
                onClick={cancelDelete}
              />
              <FormButton
                type="button"
                variant={"btn_delete"}
                text={"Delete"}
                onClick={confirmDelete}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionsList;
