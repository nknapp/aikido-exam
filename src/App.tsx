import React, { useMemo, useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Announcement } from "./utils/resolve-exam-tables";
import { Reader } from "./components/Reader/Reader";
import { CreateExamButton } from "./components/ExamTableChooser/CreateExamButton";
import { NoQuery } from "./components/Reader/NoQuery";
import css from "./components/Reader/Reader.module.scss";
import { ShowExamTable } from "./components/ShowExamTable/ShowExamTable";
import { buildExamTable } from "./utils/mapper/examtable";

function App(): JSX.Element {
  const [queries, setQueries] = useState<Announcement[]>([]);
  const examTable = useMemo(() => buildExamTable(queries), [queries]);
  const [currentQuery, setCurrentQuery] = useState(-1);
  return (
    <DefaultLayout
      navbuttons={
        queries.length > 0 && <CreateExamButton onChoice={setQueries} />
      }
    >
      <div className={"mt-1 no-print"}>
        {queries.length === 0 ? (
          <NoQuery className={css.queryDisplay} onQueryChoice={setQueries} />
        ) : (
          <Reader queries={queries} nextQueryChanged={setCurrentQuery} />
        )}
      </div>
      <div className={"mt-4"}>
        <ShowExamTable
          examTable={examTable}
          currentQuery={queries[currentQuery]}
        />
      </div>
    </DefaultLayout>
  );
}

export default App;
