import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toggleLogOutModal } from "../../../redux2/modal/slice.js";
// import Modal from "../../Modals/LogOutModal/Modal.jsx"; // Ensure this path is correct
// import Logout from "../../Logout/Logout.jsx"; // Ensure this path is correct
import exit from "../../../assets/icons/exit.svg";
import {
  Div,
  HeaderDiv,
  Box,
  ExitButton,
  ExitOutline,
  HeaderContainer,
  Logo,
  LogoBox,
  LogoName,
  Name,
  Stick,
  ExitText,
} from "./Header.styled.js";
import logo from "../../../assets/icons/logo.svg";
import { selectUser } from "../../../redux2/auth/selectors.js";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buttonRef = useRef(null);

  const user = useSelector(selectUser);
  const username = user.email ? user.email.split("@")[0] : "";

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <Div>
      <HeaderContainer>
        <HeaderDiv>
          <LogoBox onClick={goToHome} ref={buttonRef}>
            <Logo src={logo} alt="logo" />
            <LogoName>Money Guard</LogoName>
          </LogoBox>
          <Box>
            <Name>{username}</Name>
            <Stick />
            <ExitButton
              id="exit"
              type="button"
              onClick={() => dispatch(toggleLogOutModal())}
            >
              <ExitOutline src={exit} alt="exit" />
            </ExitButton>
            <ExitText>Exit</ExitText>
          </Box>
        </HeaderDiv>
      </HeaderContainer>
    </Div>
  );
};
