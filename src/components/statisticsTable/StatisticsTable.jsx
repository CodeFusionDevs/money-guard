import { useSelector } from "react-redux";
import styles from "./StatisticsTable.module.css";
import {
  selectStatistics,
  selectIsLoading,
} from "../../redux/statistics/selectors";

const StatisticsTable = () => {
  const statistics = useSelector(selectStatistics);
  const isLoading = useSelector(selectIsLoading);
  const formatNumber = (number) => {
    if (!number && number !== 0) return "0.00";
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const categoryColors = {
    "Main expenses": "#FFD700", // Yellow
    Products: "#FFCCCB", // Light pink
    Car: "#FFA07A", // Light salmon
    "Self care": "#D8BFD8", // Thistle
    "Child care": "#ADD8E6", // Light blue
    "Household products": "#4682B4", // Steel blue
    Education: "#AFEEEE", // Pale turquoise
    Leisure: "#00FA9A", // Medium spring green
    "Other expenses": "#00CED1", // Dark turquoise
  };

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  const categoriesData = statistics.categoriesSummary || [];
  const expenseSummary = statistics.expenseSummary || 0;
  const incomeSummary = statistics.incomeSummary || 0;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tableHeader}>
          <div className={styles.categoryHeader}>Category</div>
          <div className={styles.sumHeader}>Sum</div>
        </div>

        <div className={styles.tableBody}>
          {categoriesData
            .filter((category) => category.name !== "INCOME")
            .map((category) => (
              <div key={category.name} className={styles.tableRow}>
                <div className={styles.categoryCell}>
                  <div
                    className={styles.colorIndicator}
                    style={{
                      backgroundColor:
                        categoryColors[category.name] || "#808080",
                    }}
                  ></div>
                  {category.name}
                </div>
                <div className={styles.sumCell}>
                  {formatNumber(category.total)}
                </div>
              </div>
            ))}
        </div>

        <div className={styles.tableSummary}>
          <div className={styles.summaryRow}>
            <div className={styles.summaryLabel}>Expenses:</div>
            <div className={styles.expensesValue}>
              {formatNumber(expenseSummary)}
            </div>
          </div>
          <div className={styles.summaryRow}>
            <div className={styles.summaryLabel}>Income:</div>
            <div className={styles.incomeValue}>
              {formatNumber(incomeSummary)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsTable;
