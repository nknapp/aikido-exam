import { Alert, Container, Form, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import React, { ReactNode } from "react";
import logo from "src/assets/logo.svg";
import { CheckSquare, Square } from "react-bootstrap-icons";

export const DefaultLayout: React.FC<{ navbuttons: ReactNode }> = ({
  children,
  navbuttons,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand>
            <img width="30" height="30" src={logo} alt={t("app.title")} />{" "}
            {t("app.title")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Form className={"form-inline ms-auto"}>{navbuttons}</Form>
            <Navbar.Text className={"ms-auto"}>
              © Nils Knappmeier (2021)
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {children}

        <hr />
        <Alert variant={"info"}>
          <p>
            Die Inhalte dieser Seite basieren auf dem{" "}
            <a
              href={
                "https://www.aikido-foederation.de/wp-content/uploads/AFD-Pruefungsordnung-052014.pdf"
              }
            >
              Prüfungsprogramm
            </a>{" "}
            der{" "}
            <a href={"https://www.aikido-foederation.de/"}>
              Aikido-Föderation Deutschland
            </a>
            . Ich übernehme keine Garantie für die Richtigkeit und Aktualität
            der Daten. Fehler könnt ihr mir gerne über{" "}
            <a href={"https://github.com/nknapp/aikido-exam/issues"}>
              Github-Issues
            </a>{" "}
            oder per Mail schicken (siehe{" "}
            <a href="https://github.com/nknapp">Github-Profil</a>)
          </p>
          <hr />
          <p>Was ich noch einbauen will:</p>
          <ul>
            <li>
              Zufallsauswahl der Techniken <CheckSquare />
            </li>
            <li>
              Zeitbasiertes Auto-Play <Square />
            </li>
          </ul>
          <hr />
          <p style={{ fontSize: "70%" }}>
            <strong>Verantwortlich für die Inhalte dieser Seite ist</strong>
            <br />
            Nils Knappmeier
            <br />
            Maria-Sevenich-Weg 11
            <br />
            64289 Darmstadt
            <br />
          </p>
        </Alert>
      </Container>
    </>
  );
};
