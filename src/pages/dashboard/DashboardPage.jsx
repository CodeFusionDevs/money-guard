import styles from "./DashboardPage.module.css";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import { selectUser } from "../../redux/auth/selectors";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
import HeaderLayout from "../../layout/HeaderLayout";
import BallanceTab from "../../components/ballanceTab/BallanceTab";
import CurrencyTab from "../../components/currencyTab/CurrencyTab";
import { useMediaQuery } from "react-responsive";

const DashboardPage = () => {
  // const user = useSelector(selectUser);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // console.log("In DashboardPage user", user);
  // console.log("In DashboardPage isLoggedIn", isLoggedIn);
  // console.log("In DashboardPage user.name", user.username);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.container}>
      <HeaderLayout />
      <div className={styles.DARKbackground}></div>
      <svg
        className={styles.SVGbackground}
        width="100%"
        height="100%"
        viewBox="0 0 1280 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_15_402)">
          <ellipse
            cx="1144.5"
            cy="727.5"
            rx="446.5"
            ry="450.5"
            fill="url(#paint0_linear_15_402)"
            fillOpacity="0.6"
          />
        </g>
        <g filter="url(#filter1_f_15_402)">
          <ellipse cx="844" cy="863.5" rx="165" ry="166.5" fill="#6D1C77" />
        </g>
        <g filter="url(#filter2_f_15_402)">
          <ellipse
            cx="146.5"
            cy="208.5"
            rx="369.5"
            ry="372.5"
            fill="url(#paint1_linear_15_402)"
            fillOpacity="0.6"
          />
        </g>
        <g filter="url(#filter3_f_15_402)">
          <ellipse
            cx="1310.5"
            cy="334.482"
            rx="181.5"
            ry="183.053"
            fill="#302E8E"
          />
        </g>
        <g filter="url(#filter4_f_15_402)">
          <ellipse
            cx="184"
            cy="652"
            rx="380"
            ry="383"
            fill="url(#paint2_linear_15_402)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_15_402"
            x="298"
            y="-123"
            width="1693"
            height="1701"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_15_402"
            />
          </filter>
          <filter
            id="filter1_f_15_402"
            x="379"
            y="397"
            width="930"
            height="933"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_15_402"
            />
          </filter>
          <filter
            id="filter2_f_15_402"
            x="-623"
            y="-564"
            width="1539"
            height="1545"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_15_402"
            />
          </filter>
          <filter
            id="filter3_f_15_402"
            x="829"
            y="-148.571"
            width="963"
            height="966.105"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_15_402"
            />
          </filter>
          <filter
            id="filter4_f_15_402"
            x="-596"
            y="-131"
            width="1560"
            height="1566"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_15_402"
            />
          </filter>
          <linearGradient
            id="paint0_linear_15_402"
            x1="1417.25"
            y1="572.703"
            x2="1057.46"
            y2="1003.51"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0346922" stopColor="#6D54EB" />
            <stop offset="0.90055" stopColor="#652392" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_15_402"
            x1="372.215"
            y1="80.5044"
            x2="74.76"
            y2="436.967"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0346922" stopColor="#6D54EB" />
            <stop offset="0.90055" stopColor="#652392" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_15_402"
            x1="416.129"
            y1="520.396"
            x2="227.179"
            y2="885.54"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.446314" stopColor="#341FA0" />
            <stop offset="0.885707" stopColor="#652392" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContainerTabANDBalance}>
            <div className={styles.leftContainerTabs}>
              <div className={styles.homeIcon}>
                <div className={styles.homeIconImg}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 0C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.895431 17.1046 0 16 0H2ZM7.8 10.1176V14H4.8V8.82353H3L9 3L15 8.82353H13.2V14H10.2V10.1176H7.8Z"
                      fill="#734AEF"
                    />
                  </svg>
                </div>
                {isMobile ? null : <p>Home</p>}
              </div>
              <div className={styles.statisticsIcon}>
                <div className={styles.statisticsIconImg}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 0C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.895431 17.1046 0 16 0H2ZM14.7273 7.66667C15.4273 7.66667 16 7.06667 16 6.33333C16 5.6 15.4273 5 14.7273 5C14.0273 5 13.4545 5.6 13.4545 6.33333C13.4545 6.45333 13.4673 6.56667 13.4991 6.67333L11.24 9.04667C11.1382 9.01333 11.0236 9 10.9091 9C10.7945 9 10.68 9.01333 10.5782 9.04667L8.95545 7.34667C8.98727 7.24 9 7.12 9 7C9 6.26667 8.42727 5.66667 7.72727 5.66667C7.02727 5.66667 6.45455 6.26667 6.45455 7C6.45455 7.12 6.46727 7.24 6.49909 7.34667L3.59727 10.38C3.49545 10.3467 3.38727 10.3333 3.27273 10.3333C2.57273 10.3333 2 10.9333 2 11.6667C2 12.4 2.57273 13 3.27273 13C3.97273 13 4.54545 12.4 4.54545 11.6667C4.54545 11.5467 4.53273 11.4333 4.50091 11.3267L7.39636 8.28667C7.49818 8.32 7.61273 8.33333 7.72727 8.33333C7.84182 8.33333 7.95636 8.32 8.05818 8.28667L9.68091 9.98667C9.64909 10.0933 9.63636 10.2133 9.63636 10.3333C9.63636 11.0667 10.2091 11.6667 10.9091 11.6667C11.6091 11.6667 12.1818 11.0667 12.1818 10.3333C12.1818 10.2133 12.1691 10.0933 12.1373 9.98667L14.4027 7.62C14.5045 7.65333 14.6127 7.66667 14.7273 7.66667Z"
                      fill="white"
                      fillOpacity="0.4"
                    />
                  </svg>
                </div>
                {isMobile ? null : <p>Statistics</p>}
              </div>
              {isMobile ? (
                <div className={styles.currencyIcon}>
                  <div className={styles.currencyIconImg}>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 0C2.68629 0 0 2.68629 0 6V32C0 35.3137 2.68629 38 6 38H32C35.3137 38 38 35.3137 38 32V6C38 2.68629 35.3137 0 32 0H6ZM15.7523 15.5989C15.7523 16.7809 16.6607 17.5399 19.4852 18.2741C22.3096 19.0082 25.3332 20.2151 25.3332 23.7489C25.3332 26.2996 23.4046 27.7056 20.9783 28.166V30.8412H17.2455V28.1411C14.8565 27.631 12.8159 26.1005 12.6666 23.3756H15.4039C15.5408 24.8438 16.5487 25.9885 19.1119 25.9885C21.8617 25.9885 22.4714 24.6198 22.4714 23.7613C22.4714 22.6041 21.8493 21.5092 18.7386 20.7626C15.2671 19.9289 12.8905 18.498 12.8905 15.6238C12.8905 13.2223 14.8316 11.6546 17.2455 11.132V8.44434H20.9783V11.1693C23.5788 11.8039 24.8853 13.7698 24.9724 15.91H22.2225C22.1479 14.3546 21.3267 13.297 19.1119 13.297C17.0091 13.297 15.7523 14.2426 15.7523 15.5989Z"
                        fill="white"
                        fillOpacity="0.4"
                      />
                    </svg>
                  </div>
                </div>
              ) : null}
            </div>
            <div className={styles.leftContainerBallance}>
              <BallanceTab />
            </div>
          </div>
          <div className={styles.leftContainerCurrency}>
            <CurrencyTab />
          </div>
        </div>
        <div className={styles.verticalStroke}></div>
        <div className={styles.rightContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
