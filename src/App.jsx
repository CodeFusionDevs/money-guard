import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/registration/RegistrationPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import TransactionsList from "./components/transactionsList/TransactionsList";
import StatisticsDashboard from "./components/statisticsDashboard/StatisticsDashboard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectToken } from "./redux/auth/selectors";
import {
  getCategories,
  getTransactions,
} from "./redux/transactions/operations";
import { updateToken, clearToken } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getTransactions());
      dispatch(getCategories());

      updateToken(token);
    } else {
      clearToken();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<TransactionsList />} />
          <Route path="statistics" element={<StatisticsDashboard />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
