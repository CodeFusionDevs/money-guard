import styles from "./dashboardPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";

const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log("In DashboardPage", user);
  return (
    <div className={styles.container}>
      <h1>DashboardPage</h1>
      <p>Welcome, {user.name}.</p>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/register")}>Go to Register</button>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default DashboardPage;
