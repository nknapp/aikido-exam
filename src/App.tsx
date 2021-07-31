import React, { useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { ExamTableChooser } from "./components/ExamTableChooser";
import { Announcement } from "./utils/resolve-exam-tables";
import { ShowQueries } from "./components/ShowQueries";
import { Reader } from "./components/Reader/Reader";

function App(): JSX.Element {
  const [queries, setQueries] = useState<Announcement[]>([]);
  const [currentQuery, setCurrentQuery] = useState(-1);
  return (
    <DefaultLayout>
      <div className={"mt-2 mb-3"}>
        <ExamTableChooser onChoice={setQueries} />
      </div>
      <Reader queries={queries} nextQueryChanged={setCurrentQuery} />
      <div className={"mt-3"}>
        <ShowQueries queries={queries} currentQuery={currentQuery} />
      </div>
    </DefaultLayout>
  );
}

export default App;
