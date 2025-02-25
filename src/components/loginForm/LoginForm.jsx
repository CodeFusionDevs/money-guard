import { Form, Formik } from "formik";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLock } from "react-icons/md";

import { useDispatch } from "react-redux";
import { loginSchema } from "../../validations/LoginFormVal/index";
import FormButton from "../common/FormButton/FormButton";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo/Logo";
import InputFormField from "../InputFormField/InputFormField";
import { motion } from "framer-motion";
import styles from "./LoginForm.module.css";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(signInThunk(values));
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
                <Link to="/register">
                  <FormButton
                    type="button"
                    text={"Register"}
                    variant={"whiteButtton"}
                  />
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
