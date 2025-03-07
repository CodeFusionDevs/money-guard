import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectTransactionCategories } from "../../redux/transactions/selectors";
import {
  editTransaction,
  getTransactions,
} from "../../redux/transactions/operations";
import { FiCalendar } from "react-icons/fi";
import { editSchema } from "../../validations/EditSchema/index";
import { useMediaQuery } from "react-responsive";
import FormButton from "../common/FormButton/FormButton";
import ReactDatePicker from "react-datepicker";
import icons from "../../images/icons/sprite.svg";
import Slash from "./Slash";
import clsx from "clsx";
import styles from "./ModalEditTransactions.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { getCurrentUser } from "../../redux/auth/operations";
const useMedia = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 320px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};

const getCategoryById = (categoryId, categories) => {
  if (!categories || !categoryId) return null;
  return categories.find((category) => category.id === categoryId);
};

const EditModal = ({ closeModal, item }) => {
  // eslint-disable-next-line no-unused-vars
  const [isOnIncomeTab, setIsOnIncomeTab] = useState(
    item.type === "EXPENSE" ? false : true
  );
  const categories = useSelector(selectTransactionCategories);
  const { isTablet } = useMedia();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(
    item.transactionDate ? new Date(item.transactionDate) : new Date()
  );

  const initialValues = {
    amount: Math.abs(item.amount),
    comment: item.comment,
    category: getCategoryById(item.categoryId, categories),
  };
  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);

    const formattedDate =
      startDate instanceof Date
        ? startDate.toISOString().split("T")[0]
        : startDate;

    const transactionData = {
      id: item.id,
      transactionDate: formattedDate,
      type: isOnIncomeTab ? "INCOME" : "EXPENSE",
      comment: values.comment,
      amount: isOnIncomeTab ? values.amount : 0 - values.amount,
    };

    dispatch(editTransaction(transactionData))
      .unwrap()
      .then(() => {
        dispatch(getTransactions())
          .unwrap()
          .then(() => {
            dispatch(getCurrentUser());
            closeModal();
          });
      })
      .catch((error) => {
        console.error("Edit transaction error:", error);
        setStatus({ success: false, error: error });
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {isTablet ? (
          <button className={styles.closeButton} onClick={() => closeModal()}>
            <svg>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        ) : (
          <button
            className={styles.mobileCloseButton}
            onClick={() => closeModal()}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L15 15M1 15L15 1"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={editSchema}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <h2 className={styles.formTitle}>Edit Transaction</h2>

              <div className={styles.switcheWrapper}>
                <span className={clsx(isOnIncomeTab && styles.income)}>
                  Income
                </span>
                <span className={styles.slash}>
                  <Slash />
                </span>
                <span className={clsx(!isOnIncomeTab && styles.expense)}>
                  Expense
                </span>
              </div>

              <div className={styles.inputWrapper}>
                <div className={clsx(styles.inputField, styles.amount)}>
                  <Field
                    type="number"
                    name="amount"
                    min="1"
                    placeholder="0.00"
                  />
                  <ErrorMessage name="amount" component="p" />
                </div>

                <div className={clsx(styles.inputField, styles.date)}>
                  <ReactDatePicker
                    className="datePicker1"
                    dateFormat="dd.MM.yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    calendarStartDay={1}
                    maxDate={new Date()}
                  />
                  <FiCalendar className={styles.icon} />
                </div>

                <div className={clsx(styles.inputField, styles.comment)}>
                  <Field type="text" name="comment" placeholder="Comment" />
                  <ErrorMessage name="comment" component="p" />
                </div>
              </div>

              <div className={styles.buttonsWrapper}>
                <FormButton
                  type="submit"
                  text={"Save"}
                  variant={"multiColorButtton"}
                  isDisabled={isSubmitting}
                  hasLoading={true}
                />
                <FormButton
                  type={"button"}
                  text={"cancel"}
                  variant={"whiteButtton"}
                  handlerFunction={() => closeModal()}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditModal;
