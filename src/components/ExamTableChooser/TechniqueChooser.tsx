import { ExamTableChooser } from "./ExamTableChooser";
import React, { useCallback, useMemo, useState } from "react";
import { shuffleAndSelect } from "../../utils/shuffling/shuffle";
import { useDebouncedEffect } from "src/utils/hooks/useDebouncedEffect";
import { buildExamTable } from "../../utils/mapper/examtable";
import { ShowExamTable } from "../ShowExamTable/ShowExamTable";
import {
  filterTechniques,
  TechniqueFilters,
} from "../../utils/technique-filters";
import { ShowTechniqueFilters } from "./ShowTechniqueFilters";
import { ShowShuffleControls, ShuffleControls } from "./ShuffleControls";
import { Technique } from "../../model/Technique";

export interface ExamTableChooserProps {
  onChoice(techniques: Technique[]): void;
}

export const TechniqueChooser: React.FC<ExamTableChooserProps> = ({
  onChoice,
}) => {
  const [alltechniques, setAlltechniques] = useState<Technique[]>([]);
  const [techniques, settechniques] = useState<Technique[]>([]);
  const examTable = useMemo(() => buildExamTable(techniques), [techniques]);
  const [shuffleControls, setShuffleControls] = useState<ShuffleControls>({
    shouldShuffle: true,
    coverage: 100,
  });
  const [techniqueFilters, setTechniqueFilters] = useState<TechniqueFilters>({
    badKnees: false,
  });

  const updatetechniques = useCallback((chosentechniques) => {
    setAlltechniques(chosentechniques);
  }, []);

  useDebouncedEffect(
    useCallback(() => {
      let newtechniques = shuffleControls.shouldShuffle
        ? shuffleAndSelect(alltechniques, {
            coverage: shuffleControls.coverage / 100,
          })
        : alltechniques;
      newtechniques = filterTechniques(newtechniques, techniqueFilters);
      settechniques(newtechniques);
      onChoice(newtechniques);
    }, [shuffleControls, alltechniques, onChoice, techniqueFilters]),
    200
  );

  return (
    <>
      <ExamTableChooser onChoice={updatetechniques} />
      <hr />
      <ShowTechniqueFilters
        value={techniqueFilters}
        onChange={setTechniqueFilters}
      />
      <hr />
      <ShowShuffleControls
        value={shuffleControls}
        onChange={setShuffleControls}
        nrtechniques={techniques.length}
      />
      <hr />
      <ShowExamTable examTable={examTable} />
    </>
  );
};
