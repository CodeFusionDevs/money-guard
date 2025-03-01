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

const Modal = ({ isOpen, onClose }) => {
  const [isOnIncomeTab, setIsOnIncomeTab] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  const initialValues = {
    amount: "",
    comment: "",
    category: "",
    date: startDate,
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
          category: Yup.string().required("Required*"),
        });
  };

  const handleSubmit = (values) => {
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
          {({ isSubmitting, setFieldValue }) => (
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
                  onChange={() => setIsOnIncomeTab(!isOnIncomeTab)}
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
                        "category",
                        selectedOption ? selectedOption.value : null
                      )
                    }
                    name="category"
                    options={[]} // Kategori seçeneklerini buraya ekleyebilirsiniz
                    styles={{}} // Özelleştirmeleri buraya ekleyebilirsiniz
                  />
                  <ErrorMessage name="category" component="p" />
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
                    onChange={(date) => setStartDate(date)}
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
