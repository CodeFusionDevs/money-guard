import styled from "styled-components";

export const DinamicSidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 0;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 480px;
    padding-top: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;
export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 15px;
  }
`;
