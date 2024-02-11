import { useState } from "react";
import { Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import { CreateExamButton } from "src/components/ExamTableChooser/CreateExamButton";
import { NoTechniquesChosen } from "src/components/Reader/NoTechniquesChosen";
import { Reader } from "src/components/Reader/Reader";
import { ShowExamTable } from "src/components/ShowExamTable/ShowExamTable";
import { DefaultLayout } from "src/layout/DefaultLayout";
import css from "src/components/Reader/Reader.module.scss";
import { useTechniqueList } from "src/store/techniqueList";

export const Component: React.FC = () => {
  const [techniques, setTechniques] = useTechniqueList();
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
};
