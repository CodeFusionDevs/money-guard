import clsx from "clsx";
import styles from "./Logo.module.css";

const Logo = ({ type }) => {
  return (
    <div className={clsx(styles.logo, type === "header" && styles.headerLogo)}>
      <img
        src="../../../../public/money-guard.svg"
        alt="Money Guard Logo"
      />
      <h2 className={styles.textLogo}>Money Guard</h2>
    </div>
  );
};

export default Logo;
