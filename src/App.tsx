import React, { useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Reader } from "./components/Reader/Reader";
import { CreateExamButton } from "./components/ExamTableChooser/CreateExamButton";
import { NoTechniquesChosen } from "./components/Reader/NoTechniquesChosen";
import css from "./components/Reader/Reader.module.scss";
import { ShowExamTable } from "./components/ShowExamTable/ShowExamTable";
import { Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import { TechniqueList } from "./model/TechniqueList";

function App(): JSX.Element {
  const [techniques, setTechniques] = useState<TechniqueList>(new TechniqueList());
  const [currentTechniqueIndex, setCurrentTechniqueIndex] = useState(-1);
  return (
    <DefaultLayout
      navbuttons={
        techniques.length > 0 && (
          <>
            <CreateExamButton onChoice={setTechniques} />
            <Button className={"ms-2"} variant={"outline-secondary"} onClick={() => window.print()}>
              <Printer /> Print
            </Button>
          </>
        )
      }
    >
      <div className={"mt-1"}>
        {techniques.length === 0 ? (
          <NoTechniquesChosen className={css.techniqueDisplay} onTechniqueChoice={setTechniques} />
        ) : (
          <>
            <div className={"no-print"}>
              <Reader techniques={techniques.techniques} nextTechniqueChanged={setCurrentTechniqueIndex} />
            </div>
            <div className={"mt-4"}>
              <ShowExamTable techniques={techniques} currentTechnique={techniques.at(currentTechniqueIndex)} />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
}

export default App;
