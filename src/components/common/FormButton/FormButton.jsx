import clsx from "clsx";
import styles from "./FormButton.module.css";

const FormButton = ({
  type,
  text,
  handlerFunction,
  variant,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={type !== "submit" ? onClick || handlerFunction : undefined}
      className={clsx(
        styles.formButton,
        variant === "multiColorButtton" && styles.multiColorButtton,
        variant === "whiteButtton" && styles.whiteButtton,
        variant === "btn_delete" && [
          styles.multiColorButtton,
          styles.btn_delete,
        ],
        variant === "btn_cancel" && [styles.whiteButtton, styles.btn_cancel]
      )}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default FormButton;
