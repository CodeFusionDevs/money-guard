import { Form, Formik } from "formik";
import { MdOutlineMailOutline, MdLock } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { registerSchema } from "../../validations/RegistrationFormVal/index";
import FormButton from "../../components/common/FormButton/FormButton";
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo/Logo";
import InputFormField from "../../components/InputFormField/InputFormField";
import { motion } from "framer-motion";
import styles from "./RegistrationForm.module.css";
import { signup } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, actions) => {
    const { username, email, password } = values;
    dispatch(signup({ username, email, password }))
      .unwrap()
      .then(navigate("/dashboard"));

    actions.resetForm();
  };

  return (
    <div className={styles.backdrop}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className={styles.modal}>
          <Logo />
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form className={styles.form}>
                <div className={styles.inputs}>
                  <InputFormField
                    icon={IoPerson}
                    type="text"
                    name="username"
                    placeholder="Name"
                  />
                  <InputFormField
                    icon={MdOutlineMailOutline}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                  />
                  <InputFormField
                    icon={MdLock}
                    type="password"
                    name="password"
                    placeholder="Password"
                    passwordValue={values.password}
                  />
                  <InputFormField
                    icon={MdLock}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    confirmValue={values.confirmPassword}
                    passwordValue={values.password}
                  />
                </div>
                <div className={styles.btns}>
                  <FormButton
                    type="submit"
                    text={"Register"}
                    variant={"multiColorButtton"}
                  />
                  <Link to="/login">
                    <FormButton
                      type="button"
                      text={"login"}
                      variant={"whiteButtton"}
                    />
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;
