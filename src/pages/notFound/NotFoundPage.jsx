import FormButton from "../../components/common/FormButton/FormButton";
import styles from "./NotFoundPage.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <DotLottieReact
      src="https://lottie.host/1313594c-db25-44bb-92e1-44614d2174b6/oqVb7lOYG2.lottie"
      loop
      autoplay
    />
        <p className={styles.error}>
          The page you're seeking is no longer here.
        </p>
      </div>

      <Link to="/login">
        <FormButton type="button" text={"Home"} variant={"multiColorButtton"} />
      </Link>
    </div>
  );
};

export default NotFound;
