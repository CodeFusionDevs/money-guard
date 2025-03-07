import { useState } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";
import styles from "./statisticsDashboard.module.css";
import StatisticsTable from "../statisticsTable/StatisticsTable";
import StatisticsChart from "../statisticsChart/StatisticsChart";
import { getStatistics } from "../../redux/statistics/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const monthOptions = [
    { value: null, label: "All" },
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 6 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i),
  }));

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      height: "50px",
      backgroundColor: "transparent",
      borderRadius: "8px",
      border: "1px solid var(--white-600)",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid var(--white-400)",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgba(83, 61, 186, 0.9)"
        : "transparent",
      color: "var(--white)",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(106, 70, 165, 0.9)",
      },
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      width: "100%",
      height: "157px",
      backdropFilter: "blur(100px)",
      boxShadow: "0 4px 60px 0 rgba(0, 0, 0, 0.25)",
      background:
        "linear-gradient(360deg, rgba(83, 61, 186, 0.7) 0%, rgba(80, 48, 154, 0.7) 35.94%, rgba(106, 70, 165, 0.7) 61.04%, rgba(133, 93, 175, 0.7) 100%)",
      border: "none",
      zIndex: 10,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "157px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(255, 255, 255, 0.1)",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "2px",
      },
      padding: "0",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--white)",
      fontSize: "16px",
      fontFamily: "var(--font-family)",
      fontWeight: "400",
    }),
    input: (provided) => ({
      ...provided,
      color: "var(--white)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--white-600)",
      "&:hover": {
        color: "var(--white)",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  useEffect(() => {
    dispatch(getStatistics({ month: selectedMonth, year: selectedYear }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, selectedYear]);

  return (
    <div className={styles.container}>
      <div className={styles.statisticsChart}>
        <h1>Statistics</h1>
        <div className={styles.statisticsChartContainer}>
          <StatisticsChart />
        </div>
      </div>
      <div className={styles.filterAndTableContainer}>
        <Formik
          initialValues={{
            month: monthOptions.find(
              (option) => option.value === selectedMonth
            ),
            year: yearOptions.find((option) => option.value === selectedYear),
          }}
          enableReinitialize
        >
          {({ values, setFieldValue }) => (
            <Form className={styles.statisticsFiltersContainer}>
              <div className={styles.statisticsFilterYear}>
                <Select
                  name="year"
                  value={values.year}
                  onChange={(option) => {
                    setFieldValue("year", option);
                    setSelectedYear(option.value);
                  }}
                  options={yearOptions}
                  styles={customSelectStyles}
                  isSearchable={false}
                  classNamePrefix="react-select"
                />
              </div>
              <div className={styles.statisticsFilterMonth}>
                <Select
                  name="month"
                  value={values.month}
                  onChange={(option) => {
                    setFieldValue("month", option);
                    setSelectedMonth(option.value);
                  }}
                  options={monthOptions}
                  styles={customSelectStyles}
                  isSearchable={false}
                  classNamePrefix="react-select"
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className={styles.statisticsTableContainer}>
          <StatisticsTable />
        </div>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
