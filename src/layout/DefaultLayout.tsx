import { Alert, Container, Form, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import React, { ReactNode } from "react";
import logo from "src/assets/logo.svg";
import { Square } from "react-bootstrap-icons";
import { Impress } from "src/components/Impress/Imress";

export const DefaultLayout: React.FC<{ hideNavbar?: boolean; navbuttons?: ReactNode; children: ReactNode }> = ({
  children,
  navbuttons,
  hideNavbar = false,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={"only-print"}>
        <div className={"d-flex justify-content-between"}>
          <div>{t("app.title")}</div>
          <div>{document.location.origin}</div>
        </div>
      </div>
      {!hideNavbar && (
        <Navbar expand="md" className={"no-print"}>
          <Container>
            <Navbar.Brand href="/">
              <img width="30" height="30" src={logo} alt={t("app.title")} /> {t("app.title")}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Form className={"form-inline ms-auto"}>{navbuttons}</Form>
              <Navbar.Text className={"ms-auto"}>© Nils Knappmeier (2024)</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      <Container>
        {children}

        <hr />
        <Alert variant={"info"} className={"no-print"}>
          <p>
            Die Inhalte dieser Seite basieren auf dem{" "}
            <a href={"https://www.aikido-foederation.de/wp-content/uploads/AFD-Pruefungsordnung-052014.pdf"}>
              Prüfungsprogramm
            </a>{" "}
            der <a href={"https://www.aikido-foederation.de/"}>Aikido-Föderation Deutschland</a> und des{" "}
            <a href="https://aikidodarmstadt.de">Aikido-Dojo Darmnstadt</a> Ich übernehme keine Garantie für die
            Richtigkeit und Aktualität der Daten. Fehler könnt ihr mir gerne über{" "}
            <a href={"https://github.com/nknapp/aikido-exam/issues"}>Github-Issues</a> oder per Mail schicken (siehe{" "}
            <a href="https://github.com/nknapp">Github-Profil</a>)
          </p>
          <hr />
          <p>Was ich noch einbauen will:</p>
          <ul>
            <li>
              Zeitbasiertes Auto-Play <Square />
            </li>
          </ul>
          <hr />
          <h6 style={{ fontSize: "12px" }}>Verantwortlich für die Inhalte dieser Seite ist</h6>
          <Impress />
          <p>
            Anonymous, cookieless tracking with <a href="https://plausible.io">plausible.io</a>
          </p>
        </Alert>
      </Container>
    </>
  );
};
