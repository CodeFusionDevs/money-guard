import React from "react";
import { Header } from "../../components/Dashboard/Header/Header";
import { Main } from "../../components/Dashboard/Main/Main";
import { DashboardStyled } from "./DashboardPage.styled"; // Ensure this path is correct

const DashboardPage = () => {
  return (
    <DashboardStyled>
      <Header />
      <Main />
    </DashboardStyled>
  );
};

export default DashboardPage;
