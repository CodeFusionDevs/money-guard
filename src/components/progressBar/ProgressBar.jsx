import { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ password, confirmPassword }) => {
  const [match, setMatch] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (confirmPassword.length === 0) {
      setProgress(0);
    } else if (confirmPassword <= password) {
      setProgress((confirmPassword.length / password.length) * 100);
      if (confirmPassword === password.slice(0, confirmPassword.length)) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    } else {
      setProgress(100);
      if (confirmPassword === password) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }
  }, [password, confirmPassword]);

  return (
    <>
      <div className={styles.progressBarBackground}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progress}%`,
            backgroundColor: !match
              ? "#ff4b5c"
              : progress < 99
              ? "#FFB627"
              : "#4caf50",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
