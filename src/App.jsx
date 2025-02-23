import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import HeaderLayout from "./layout/HeaderLayout";

function App() {
  return (
    <BrowserRouter>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
