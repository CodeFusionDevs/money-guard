import clsx from "clsx";
import styles from "./FormButton.module.css";
import { Triangle } from "react-loader-spinner";
import { selectIsRefreshing } from "../../../redux/auth/selectors";
import { selectIsLoading } from "../../../redux/transactions/selectors";
import { selectIsLoading as selectIsLoadingStatistics } from "../../../redux/statistics/selectors";
import { useSelector } from "react-redux";

const FormButton = ({
  type,
  text,
  handlerFunction,
  variant,
  isDisabled = false,
  onClick,
  hasLoading = false,
}) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const isLoadingStatistics = useSelector(selectIsLoadingStatistics);

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
      {hasLoading && (isRefreshing || isLoading || isLoadingStatistics) ? (
        <Triangle height={30} width={30} color="#000" />
      ) : (
        text
      )}
    </button>
  );
};

export default FormButton;
