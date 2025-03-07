import clsx from "clsx";
import styles from "./Logo.module.css";
import logo from "../../../assets/images/money-guard.svg";

const Logo = ({ type }) => {
  return (
    <div className={clsx(styles.logo, type === "header" && styles.headerLogo)}>
      <img src={logo} alt="Money Guard Logo" />
      <h2 className={styles.textLogo}>Money Guard</h2>
    </div>
  );
};

export default Logo;
