import { ErrorMessage, Field } from "formik";
import ProgressBar from "../progressBar/ProgressBar";
import clsx from "clsx";
import styles from "./InputFormField.module.css";

const InputFormField = ({
  icon: Icon,
  type,
  name,
  placeholder,
  passwordValue,
  confirmValue,
}) => {
  return (
    <div className={styles.inputGroup}>
      <Icon
        className={clsx(
          styles.inputIcon,
          name === "confirmPassword" && styles.inputIconLast
        )}
      />
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        required
      />
      <ErrorMessage className={styles.error} name={name} component="span" />
      {name === "confirmPassword" && (
        <ProgressBar
          className={styles.progressBarComponent}
          password={passwordValue}
          confirmPassword={confirmValue}
        />
      )}
    </div>
  );
};

export default InputFormField;
