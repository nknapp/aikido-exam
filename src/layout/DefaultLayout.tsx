import { Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import React from "react";
import logo from "src/assets/logo.svg";

export const DefaultLayout: React.FC = ({ children }) => {
  console.log(logo);
  const { t } = useTranslation();
  return (
    <>
      <Navbar bg={"light"}>
        <Container>
          <Navbar.Brand>
            <img width="30" height="30" src={logo} alt={t("app.title")} />{" "}
            {t("app.title")}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
