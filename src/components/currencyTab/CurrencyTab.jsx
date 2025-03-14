import { useMediaQuery } from "react-responsive";
import styles from "./CurrencyTab.module.css";
import { useSelector } from "react-redux";
import {
  selectCurrency,
  selectIsLoading,
} from "../../redux/currency/selectors";
import { fetchCurrency } from "../../redux/currency/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// Import the chart image
import chartImage from "../../assets/images/chart.png";

const CurrencyTab = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1279px)" });
  const currencyData = useSelector(selectCurrency);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const shouldFetchData = () => {
      if (!currencyData || !currencyData.date) return true;

      const oneHourInMs = 60 * 60 * 1000;
      const currentTime = Date.now();
      const timeSinceLastFetch = currentTime - currencyData.date;

      return timeSinceLastFetch >= oneHourInMs;
    };

    if (shouldFetchData()) {
      async function fetchData() {
        // eslint-disable-next-line no-unused-vars
        const result = await dispatch(fetchCurrency());
      }
      fetchData();
    }
  }, [dispatch, currencyData]);

  const formatCurrency = (value) => {
    if (!value) return "-";
    return Number(value).toFixed(2);
  };

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
          <img src={chartImage} alt="volume" />
        </div>
      </div>
    </>
  );
};

export default CurrencyTab;
