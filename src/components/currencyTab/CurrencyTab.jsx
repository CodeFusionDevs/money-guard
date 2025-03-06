import { useMediaQuery } from "react-responsive";
import styles from "./currencyTab.module.css";
import { useSelector } from "react-redux";
import {
  selectCurrency,
  selectIsLoading,
} from "../../redux/currency/selectors";
import { fetchCurrency } from "../../redux/currency/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CurrencyTab = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1279px)" });
  const currencyData = useSelector(selectCurrency);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch currency data once per hour
    const shouldFetchData = () => {
      // If currency is undefined or no date exists or an hour has passed since last fetch
      if (!currencyData || !currencyData.date) return true;

      const oneHourInMs = 60 * 60 * 1000;
      const currentTime = Date.now();
      const timeSinceLastFetch = currentTime - currencyData.date;

      return timeSinceLastFetch >= oneHourInMs;
    };

    if (shouldFetchData()) {
      async function fetchData() {
        const result = await dispatch(fetchCurrency());
        console.log(" Currency", result);
      }
      fetchData();
    }
  }, [dispatch, currencyData]);

  // Format currency values to 2 decimal places
  const formatCurrency = (value) => {
    if (!value) return "-";
    return Number(value).toFixed(2);
  };

  // Add debug logging to see what data we have
  console.log("Currency data in component:", currencyData);

  return (
    <>
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loading}>Loading currency data...</div>
        ) : (
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
                <td>
                  {currencyData && currencyData.usd
                    ? formatCurrency(currencyData.usd.buy)
                    : "-"}
                </td>
                <td>
                  {currencyData && currencyData.usd
                    ? formatCurrency(currencyData.usd.sell)
                    : "-"}
                </td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>
                  {currencyData && currencyData.eur
                    ? formatCurrency(currencyData.eur.buy)
                    : "-"}
                </td>
                <td>
                  {currencyData && currencyData.eur
                    ? formatCurrency(currencyData.eur.sell)
                    : "-"}
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {!isTablet && (
          <div className={styles.currencyPeaks}>
            <p>
              {currencyData && currencyData.usd
                ? formatCurrency(currencyData.usd.buy)
                : "-"}
            </p>
            <p>
              {currencyData && currencyData.eur
                ? formatCurrency(currencyData.eur.buy)
                : "-"}
            </p>
          </div>
        )}

        <div className={styles.currencyTableGraph}>
          {/* Vercel sıkıntı çıkarabilir */}
          <img src="src\components\currencyTab\chart.png" alt="volume" />
        </div>
      </div>
    </>
  );
};

export default CurrencyTab;
