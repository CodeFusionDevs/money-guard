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
import {
  updateToken,
  clearToken,
  getCurrentUser,
} from "./redux/auth/operations";
import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      console.log("token exists", token);
      updateToken(token);
    } else {
      console.log("token does not exist");
      clearToken();
    }
    dispatch(getCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoutes Component={<DashboardPage />} To="/login" />}
        >
          <Route index element={<TransactionsList />} />
          <Route path="statistics" element={<StatisticsDashboard />} />
        </Route>
        <Route
          path="/login"
          element={<RestrictedRoutes Component={<LoginPage />} To="/" />}
        />
        <Route
          path="/register"
          element={<RestrictedRoutes Component={<RegisterPage />} To="/" />}
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
