import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./statisticsChart.module.css";
import {
  selectStatistics,
  selectIsLoading,
} from "../../redux/statistics/selectors";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsChart = () => {
  const statistics = useSelector(selectStatistics);
  const isLoading = useSelector(selectIsLoading);

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

  const balance = incomeSummary - expenseSummary;

  const chartData = categoriesData.length > 0 ? categoriesData.slice(1) : [];

  const data = {
    labels: [],
    datasets: [
      {
        data: chartData.map((category) => category.total),
        backgroundColor: chartData.map(
          (category) => categoryColors[category.name] || "#808080"
        ),
        borderColor: chartData.map(() => "rgba(0,0,0, 0.5)"),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const categoryName = chartData[index]?.name || "";
            const value = context.raw || 0;
            return `${categoryName}: ${value.toFixed(2)}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  const formatBalance = (number) => {
    if (!number && number !== 0) return "₺0.00";
    const prefix = number >= 0 ? "₺" : "-₺";
    return `${prefix}${Math.abs(number)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
  };

  return (
    <div className={styles.container}>
      {chartData.length > 0 ? (
        <div className={styles.chartWrapper}>
          <Doughnut data={data} options={options} />
          <div className={styles.balanceContainer}>
            <div className={styles.balanceAmount}>{formatBalance(balance)}</div>
          </div>
        </div>
      ) : (
        <div className={styles.noData}>No data available</div>
      )}
    </div>
  );
};

export default StatisticsChart;
