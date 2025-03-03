import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
`;
export const HeaderContainer = styled.header`
  max-width: 1280px;
  width: 100%;
  padding: 0 16px;
  background: transparent;
  display: flex;
  justify-content: center;
`;

export const HeaderDiv = styled(Div)`
  width: 320px;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 28px;
    height: 80px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
    height: 80px;
    margin: 0 auto;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;

    width: 1280px;
  }
`;

export const LogoBox = styled.button`
  padding: 16px 16px 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 400ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-right: auto;
`;

export const Logo = styled.img`
  width: 17.106px;
  height: 17.106px;
  @media (min-width: 768px) {
    width: 23.489px;
    height: 22.468px;
  }
`;

export const LogoName = styled.span`
  color: var(--white);
  font-size: 12.84px;
  @media (min-width: 768px) {
    font-size: 17.097px;
  }
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    margin-left: auto;
  }
`;

export const Name = styled.p`
  color: var(--white-60);
  text-align: right;
  font-size: 16px;
  margin: 0;
  margin-right: 8px;
`;

export const Stick = styled.div`
  height: 30px;
  width: 1px;
  background-color: var(--white-60);
  margin-right: 12px;
  margin-left: 4px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 400ms;
  margin-left: 0;
  padding: 0;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 767px) {
    padding: 28px 0;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 26px;
  }
`;

export const ExitOutline = styled.img`
  width: 18px;
  height: 18px;
  padding: 0;
`;
export const ExitText = styled.p`
  color: var(--white-60);
  text-align: right;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
