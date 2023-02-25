import React, { useMemo, useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Reader } from "./components/Reader/Reader";
import { CreateExamButton } from "./components/ExamTableChooser/CreateExamButton";
import { NoTechniquesChosen } from "./components/Reader/NoTechniquesChosen";
import css from "./components/Reader/Reader.module.scss";
import { ShowExamTable } from "./components/ShowExamTable/ShowExamTable";
import { Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import { Technique } from "./model/Technique";
import { TechniqueList } from "./model/TechniqueList";

function App(): JSX.Element {
  const [techniques, setTechniques] = useState<Technique[]>([]);
  const examTable = useMemo(() => new TechniqueList(techniques), [techniques]);
  const [currentTechnique, setCurrentTechnique] = useState(-1);
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
              <Reader techniques={techniques} nextTechniqueChanged={setCurrentTechnique} />
            </div>
            <div className={"mt-4"}>
              <ShowExamTable techniques={examTable} currentTechnique={techniques[currentTechnique]} />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
}

export default App;
