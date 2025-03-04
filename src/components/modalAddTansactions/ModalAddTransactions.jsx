import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCalendar } from "react-icons/fi";
import ReactDatePicker from "react-datepicker";
import FormButton from "../common/FormButton/FormButton";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ModalAddTransactions.module.css";
import icons from "../../images/icons/sprite.svg";
import * as Yup from "yup";
import { selectTransactionCategories } from "../../redux/transactions/selectors";
import { useSelector, useDispatch } from "react-redux";
import { createTransaction } from "../../redux/transactions/operations";
import { customStyles } from "./customStyles";

const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const categories = useSelector(selectTransactionCategories);

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
    type: category.type,
  }));

  const [isOnIncomeTab, setIsOnIncomeTab] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  const initialValues = {
    amount: "",
    comment: "",
    categoryId: "",
    transactionDate: startDate,
    type: isOnIncomeTab ? "INCOME" : "EXPENSE",
  };

  const addTrnValidSchema = (isOnIncomeTab) => {
    return isOnIncomeTab
      ? Yup.object({
          amount: Yup.string().required("Required* "),
          comment: Yup.string().required("Required*"),
        })
      : Yup.object({
          amount: Yup.string().required("Required*"),
          comment: Yup.string().required("Required*"),
          categoryId: Yup.string().required("Required*"),
        });
  };

  const handleSubmit = (values) => {
    if (!isOnIncomeTab) {
      values.amount = values.amount * -1;
    }
    if (isOnIncomeTab) {
      values.categoryId = categories[10].id;
    }
    dispatch(createTransaction(values));
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setIsOnIncomeTab(true);
      setStartDate(new Date());
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.wrapper}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>

        <Formik
          initialValues={initialValues}
          validationSchema={addTrnValidSchema(isOnIncomeTab)}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <h2 className={styles.formTitle}>Add Transaction</h2>

              {/* Switch Income/Expense */}
              <div className={styles.switcheWrapper}>
                <span className={`${isOnIncomeTab && styles.income}`}>
                  Income
                </span>
                <input
                  type="checkbox"
                  id="switcherButton"
                  onChange={() => {
                    setIsOnIncomeTab(!isOnIncomeTab);
                    setFieldValue(
                      "type",
                      !isOnIncomeTab ? "INCOME" : "EXPENSE"
                    );
                  }}
                  checked={!isOnIncomeTab}
                />
                <label htmlFor="switcherButton"></label>
                <span className={`${!isOnIncomeTab ? styles.expense : null}`}>
                  Expense
                </span>
              </div>

              {/* Kategori Alanı */}
              {!isOnIncomeTab && (
                <div className={`${styles.inputField} ${styles.category}`}>
                  <Select
                    onChange={(selectedOption) =>
                      setFieldValue(
                        "categoryId",
                        selectedOption ? selectedOption.value : null
                      )
                    }
                    name="categoryId"
                    options={categoryOptions}
                    placeholder="Select category"
                    styles={customStyles}
                  />

                  <ErrorMessage name="categoryId" component="p" />
                </div>
              )}

              <div className={styles.aaa}>
                {/* Tutar Alanı */}
                <div className={`${styles.inputField} ${styles.amount}`}>
                  <Field
                    type="number"
                    name="amount"
                    min="1"
                    placeholder="0.00"
                  />
                  <ErrorMessage name="amount" component="p" />
                </div>

                {/* Tarih Alanı */}
                <div className={`${styles.inputField} ${styles.date}`}>
                  <ReactDatePicker
                    dateFormat="dd.MM.yyyy"
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setFieldValue("transactionDate", date);
                    }}
                    maxDate={new Date()}
                  />
                  <FiCalendar className={styles.icon} />
                </div>
              </div>
              {/* Yorum Alanı */}
              <div className={`${styles.inputField} ${styles.comment}`}>
                <Field type="text" name="comment" placeholder="Comment" />
                <ErrorMessage name="comment" component="p" />
              </div>

              <div className={styles.btns}>
                <FormButton
                  type="submit"
                  text={"ADD"}
                  variant={"multiColorButtton"}
                />
                <FormButton
                  type="button"
                  text={"Cancel"}
                  variant={"whiteButtton"}
                  onClick={onClose}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Modal;
