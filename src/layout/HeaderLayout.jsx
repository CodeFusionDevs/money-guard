import styles from "./headerLayout.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { logout } from "../redux/auth/operations";
import { useDispatch } from "react-redux";

const HeaderLayout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 25 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_848)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0686 3.08869C15.4052 2.69093 13.7419 1.89542 12.4944 0.702148C11.2469 1.89542 9.58351 2.69093 7.92017 3.08869C8.336 6.6685 9.58351 9.05504 12.4944 11.0438C15.4052 9.05504 17.0686 6.6685 17.0686 3.08869Z"
              fill="#FFB627"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4051 17.8989L3.76172 4.77295V11.1371L12.9101 21.081L15.4051 17.8989Z"
              fill="#FBFBFB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.653 16.7058L21.6431 11.1372V5.1709L13.7422 13.9215L16.653 16.7058Z"
              fill="#FBFBFB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0688 18.6945V22.2743L21.643 17.1035V13.5237L17.0688 18.6945Z"
              fill="#FBFBFB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33592 18.6945L3.76172 13.5237V17.1035L8.33592 22.2743V18.6945Z"
              fill="#FBFBFB"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_848">
              <rect
                width="23.4894"
                height="22.4681"
                fill="white"
                transform="translate(0.95752)"
              />
            </clipPath>
          </defs>
        </svg>
        <p>Money Guard</p>
      </div>
      <div className={styles.menu}>
        <p>{user.username}</p>
        <div className={styles.menuButton}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_15_277)">
              <path
                d="M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z"
                fill="white"
                fillOpacity="0.6"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_277">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            onClick={() => dispatch(logout())}
          >
            Exit
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
