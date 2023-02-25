import React, { useMemo, useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Reader } from "./components/Reader/Reader";
import { CreateExamButton } from "./components/ExamTableChooser/CreateExamButton";
import { NoQuery } from "./components/Reader/NoQuery";
import css from "./components/Reader/Reader.module.scss";
import { ShowExamTable } from "./components/ShowExamTable/ShowExamTable";
import { buildExamTable } from "./utils/mapper/examtable";
import { Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import { Technique } from "./model/Technique";

function App(): JSX.Element {
  const [queries, setQueries] = useState<Technique[]>([]);
  const examTable = useMemo(() => buildExamTable(queries), [queries]);
  const [currentQuery, setCurrentQuery] = useState(-1);
  return (
    <DefaultLayout
      navbuttons={
        queries.length > 0 && (
          <>
            <CreateExamButton onChoice={setQueries} />
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
        {queries.length === 0 ? (
          <NoQuery className={css.queryDisplay} onQueryChoice={setQueries} />
        ) : (
          <>
            <div className={"no-print"}>
              <Reader queries={queries} nextQueryChanged={setCurrentQuery} />
            </div>
            <div className={"mt-4"}>
              <ShowExamTable
                examTable={examTable}
                currentQuery={queries[currentQuery]}
              />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
}

export default App;
