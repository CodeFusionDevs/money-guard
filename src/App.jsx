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
import { selectToken } from "./redux/auth/selectors";
import { updateToken, getCurrentUser } from "./redux/auth/operations";
import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";
import CurrencyTab from "./components/currencyTab/CurrencyTab";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    async function fetchUser() {
      if (token) {
        updateToken(token);
        await dispatch(getCurrentUser());
      }
    }
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/money-guard/"
          element={
            <PrivateRoutes
              Component={<DashboardPage />}
              To="/money-guard/login"
            />
          }
        >
          <Route index element={<TransactionsList />} />
          <Route path="statistics" element={<StatisticsDashboard />} />
          <Route path="currency" element={<CurrencyTab />} />
        </Route>
        <Route
          path="/money-guard/login"
          element={
            <RestrictedRoutes Component={<LoginPage />} To="/money-guard/" />
          }
        />
        <Route
          path="/money-guard/register"
          element={
            <RestrictedRoutes Component={<RegisterPage />} To="/money-guard/" />
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
