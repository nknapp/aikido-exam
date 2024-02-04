import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "src/components/logo/Logo";
import css from "./index.module.scss";
import { DefaultLayout } from "src/layout/DefaultLayout";

function cssVar(name: string, value: string | number): React.CSSProperties {
  return {
    [name]: value,
  } as React.CSSProperties;
}

export const Component = () => {
  return (
    <DefaultLayout hideNavbar={location.pathname === "/"}>
      <div className={css.homepage}>
        <p className={css.subheader}>Besser vorbereitet auf deine</p>
        <h1 className={css.header}>Aikido-Prüfung</h1>

        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.reason}></div>
        <div className={css.action}>
          <Link className={css.actionButton} to={"/chooser"}>
            Gleich anfangen
          </Link>
        </div>
        <div className={css.teaser} style={{ ...cssVar("--columns", 3) }}>
          <div className={css.teaserItem}>
            <p>
              Im Training üben wir Techniken und Prinzipien. Die Techniken werden in der Prüfung abgefragt. Dabei muss
              es manchmal schnell gehen. Du musst sofort wissen, welche Technik du machst. Das kann man üben:
            </p>
          </div>
          <div className={css.teaserItem}>
            <h4>Prüfungslisten erzeugen</h4>
            <p>
              Mit <b>Aikido-Prüfung</b> kannst du dir zufällige Listen aus deinen Prüfungen erzeugen. Damit kannst du
              dich beim freien Training abfragen lassen.
            </p>
          </div>
          <div className={css.teaserItem}>
            <h4>Vorlesen lassen</h4>
            <p>
              <b>Aikido-Prüfung</b> kann die Techniken vorlesen, die ausgewählt hast. Du musst nur auf "Play" drücken.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
