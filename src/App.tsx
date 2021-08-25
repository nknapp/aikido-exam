import React, { useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Announcement } from "./utils/resolve-exam-tables";
import { ShowQueries } from "./components/ShowQueries";
import { Reader } from "./components/Reader/Reader";
import { CreateExamButton } from "./components/ExamTableChooser/CreateExamButton";
import { NoQuery } from "./components/Reader/NoQuery";
import css from "./components/Reader/Reader.module.scss";

function App(): JSX.Element {
  const [queries, setQueries] = useState<Announcement[]>([]);
  const [currentQuery, setCurrentQuery] = useState(-1);
  return (
    <DefaultLayout
      navbuttons={
        queries.length > 0 && <CreateExamButton onChoice={setQueries} />
      }
    >
      <div className={"mt-1"}>
        {queries.length === 0 ? (
          <NoQuery className={css.queryDisplay} onQueryChoice={setQueries} />
        ) : (
          <Reader queries={queries} nextQueryChanged={setCurrentQuery} />
        )}
      </div>
      <div className={"mt-4"}>
        <ShowQueries queries={queries} currentQuery={currentQuery} />
      </div>
    </DefaultLayout>
  );
}

export default App;
