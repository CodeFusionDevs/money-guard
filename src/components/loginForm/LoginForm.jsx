import { Form, Formik } from "formik";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLock } from "react-icons/md";

import { useDispatch } from "react-redux";
import { loginSchema } from "../../validations/LoginFormVal/index";
import FormButton from "../common/FormButton/FormButton";
import { NavLink } from "react-router-dom";
import Logo from "../../components/common/Logo/Logo";
import InputFormField from "../InputFormField/InputFormField";
import { motion } from "framer-motion";
import styles from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    console.log("Login credentials:", values);
    dispatch(login(values)).unwrap().then(navigate("/"));
    actions.resetForm();
  };

  return (
    <div className={styles.backdrop}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className={styles.modal}>
          <Logo />
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form className={styles.form}>
              <div className={styles.inputs}>
                <InputFormField
                  icon={MdOutlineMailOutline}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <InputFormField
                  icon={MdLock}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className={styles.btns}>
                <FormButton
                  type="submit"
                  text={"LogIn"}
                  variant={"multiColorButtton"}
                />
                <NavLink to="/register">
                  <FormButton
                    type="button"
                    text={"Register"}
                    variant={"whiteButtton"}
                  />
                </NavLink>
              </div>
            </Form>
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
