import styles from "./dashboardPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import HeaderLayout from "../../layout/HeaderLayout";

const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log("In DashboardPage user", user);
  console.log("In DashboardPage isLoggedIn", isLoggedIn);
  console.log("In DashboardPage user.name", user.username);
  return (
    <div className={styles.container}>
      <HeaderLayout />
      <h1>DashboardPage</h1>
      {isLoggedIn && <p>Welcome, {user.username}.</p>}
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/register")}>Go to Register</button>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default DashboardPage;
