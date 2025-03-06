import { useMediaQuery } from "react-responsive";
import styles from "./currencyTab.module.css";

const CurrencyTab = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1279px)" });

  return (
    <div className={styles.container}>
      <table className={styles.currencyTable}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      {!isTablet && (
        <>
          <p>Volume</p>
          <p>Volume</p>
        </>
      )}

      <div className={styles.currencyTableGraph}>
        {/* Vercel sıkıntı çıkarabilir */}
        <img src="src\components\currencyTab\chart.png" alt="volume" />
      </div>
    </div>
  );
};

export default CurrencyTab;
