import { Announcement } from "../../utils/resolve-exam-tables";
import { ExamTableChooser } from "./ExamTableChooser";
import React, { useCallback, useMemo, useState } from "react";
import { shuffleAndSelect } from "../../utils/shuffling/shuffle";
import { useDebouncedEffect } from "src/utils/hooks/useDebouncedEffect";
import { buildExamTable } from "../../utils/mapper/examtable";
import { ShowExamTable } from "../ShowExamTable/ShowExamTable";
import { filterQueries, QueryFilters } from "../../utils/query-filters";
import { ShowQueryFilters } from "./ShowQueryFilters";
import { ShowShuffleControls, ShuffleControls } from "./ShuffleControls";

export interface ExamTableChooserProps {
  onChoice(queries: Announcement[]): void;
}

export const QueryChooser: React.FC<ExamTableChooserProps> = ({ onChoice }) => {
  const [allQueries, setAllQueries] = useState<Announcement[]>([]);
  const [queries, setQueries] = useState<Announcement[]>([]);
  const examTable = useMemo(() => buildExamTable(queries), [queries]);
  const [shuffleControls, setShuffleControls] = useState<ShuffleControls>({
    shouldShuffle: true,
    coverage: 100,
  });
  const [queryFilters, setQueryFilters] = useState<QueryFilters>({
    badKnees: false,
  });

  const updateQueries = useCallback((chosenQueries) => {
    setAllQueries(chosenQueries);
  }, []);

  useDebouncedEffect(
    useCallback(() => {
      let newQueries = shuffleControls.shouldShuffle
        ? shuffleAndSelect(allQueries, {
            coverage: shuffleControls.coverage / 100,
          })
        : allQueries;
      newQueries = filterQueries(newQueries, queryFilters);
      setQueries(newQueries);
      onChoice(newQueries);
    }, [shuffleControls, allQueries, onChoice, queryFilters]),
    200
  );

  return (
    <>
      <ExamTableChooser onChoice={updateQueries} />
      <hr />
      <ShowQueryFilters value={queryFilters} onChange={setQueryFilters} />
      <hr />
      <ShowShuffleControls
        value={shuffleControls}
        onChange={setShuffleControls}
        nrQueries={queries.length}
      />
      <hr />
      <ShowExamTable examTable={examTable} />
    </>
  );
};
