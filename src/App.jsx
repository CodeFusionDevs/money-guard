import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import HeaderLayout from "./layout/HeaderLayout";
import RegisterPage from "./pages/register/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

// Sayfalar eklenecek

function App() {
  return (
    <BrowserRouter>
      <HeaderLayout />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
