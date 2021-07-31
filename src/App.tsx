import React, { useState } from "react";
import "src/assets/styles/styles.scss";
import { DefaultLayout } from "./layout/DefaultLayout";
import { ExamTableChooser } from "./components/ExamTableChooser";
import { Announcement } from "./utils/resolve-exam-tables";
import { ShowQueries } from "./components/ShowQueries";
import { Reader } from "./components/Reader";

function App(): JSX.Element {
  const [queries, setQueries] = useState<Announcement[]>([]);
  const [currentQuery, setCurrentQuery] = useState(-1);
  return (
    <DefaultLayout>
      <div className={"mt-2"}>
        <ExamTableChooser onChoice={setQueries} />
      </div>
      <Reader queries={queries} onStartPlaying={setCurrentQuery} />
      <ShowQueries queries={queries} currentQuery={currentQuery} />
    </DefaultLayout>
  );
}

export default App;
