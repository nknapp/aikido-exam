import React, { useMemo, useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Reader } from "./components/Reader/Reader";
import { CreateExamButton } from "./components/ExamTableChooser/CreateExamButton";
import { NoTechniquesChosen } from "./components/Reader/NoTechniquesChosen";
import css from "./components/Reader/Reader.module.scss";
import { ShowExamTable } from "./components/ShowExamTable/ShowExamTable";
import { buildExamTable } from "./utils/mapper/examtable";
import { Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import { Technique } from "./model/Technique";

function App(): JSX.Element {
  const [techniques, settechniques] = useState<Technique[]>([]);
  const examTable = useMemo(() => buildExamTable(techniques), [techniques]);
  const [currentTechnique, setCurrentTechnique] = useState(-1);
  return (
    <DefaultLayout
      navbuttons={
        techniques.length > 0 && (
          <>
            <CreateExamButton onChoice={settechniques} />
            <Button
              className={"ms-2"}
              variant={"outline-secondary"}
              onClick={() => window.print()}
            >
              <Printer /> Print
            </Button>
          </>
        )
      }
    >
      <div className={"mt-1"}>
        {techniques.length === 0 ? (
          <NoTechniquesChosen
            className={css.techniqueDisplay}
            onTechniqueChoice={settechniques}
          />
        ) : (
          <>
            <div className={"no-print"}>
              <Reader
                techniques={techniques}
                nextTechniqueChanged={setCurrentTechnique}
              />
            </div>
            <div className={"mt-4"}>
              <ShowExamTable
                examTable={examTable}
                currentTechnique={techniques[currentTechnique]}
              />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
}

export default App;
