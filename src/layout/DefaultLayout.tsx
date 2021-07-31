import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import React from "react";
import logo from "src/assets/logo.svg";
import { Github } from "react-bootstrap-icons";
import { ReactComponent as LogoAikidoFoederation } from "src/assets/logo_Aikidofoederation_schwarz.svg";

export const DefaultLayout: React.FC = ({ children }) => {
  console.log(logo);
  const { t } = useTranslation();
  return (
    <>
      <Navbar bg={"primary"} expand="md">
        <Container>
          <Navbar.Brand>
            <img width="30" height="30" src={logo} alt={t("app.title")} />{" "}
            {t("app.title")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Aikido Föderation" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.aikido-foederation.de/">
                  <LogoAikidoFoederation height={"1rem"} /> Homepage
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.aikido-foederation.de/wp-content/uploads/AFD-Pruefungsordnung-052014.pdf">
                  Prüfungsordnung
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                title="Github"
                href={"https://github.com/nknapp/aikido-exam"}
              >
                <Github />
              </Nav.Link>
            </Nav>

            <Navbar.Text>© Nils Knappmeier (2021)</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
