import { ExamTableChooser } from "./ExamTableChooser";
import React, { useCallback, useMemo, useState } from "react";
import { shuffleAndSelect } from "../../utils/shuffling/shuffle";
import { useDebouncedEffect } from "src/utils/hooks/useDebouncedEffect";
import { ShowExamTable } from "../ShowExamTable/ShowExamTable";
import { filterTechniques, TechniqueFilters } from "../../utils/technique-filters";
import { ShowTechniqueFilters } from "./ShowTechniqueFilters";
import { ShowShuffleControls, ShuffleControls } from "./ShuffleControls";
import { Technique } from "../../model/Technique";
import { TechniqueList } from "../../model/TechniqueList";

export interface ExamTableChooserProps {
  onChoice(techniques: Technique[]): void;
}

export const TechniqueChooser: React.FC<ExamTableChooserProps> = ({ onChoice }) => {
  const [allTechniques, setAllTechniques] = useState<Technique[]>([]);

  const [techniques, setTechniques] = useState<Technique[]>([]);
  const examTable = useMemo(() => new TechniqueList(techniques), [techniques]);

  const [shuffleControls, setShuffleControls] = useState<ShuffleControls>({
    shouldShuffle: true,
    coverage: 100,
  });
  const [techniqueFilters, setTechniqueFilters] = useState<TechniqueFilters>({
    badKnees: false,
  });

  const updatetechniques = useCallback((chosentechniques) => {
    setAllTechniques(chosentechniques);
  }, []);

  useDebouncedEffect(
    useCallback(() => {
      let newTechniques = shuffleControls.shouldShuffle
        ? shuffleAndSelect(allTechniques, {
            coverage: shuffleControls.coverage / 100,
          })
        : allTechniques;
      newTechniques = filterTechniques(newTechniques, techniqueFilters);
      setTechniques(newTechniques);
      onChoice(newTechniques);
    }, [shuffleControls, allTechniques, onChoice, techniqueFilters]),
    200
  );

  return (
    <>
      <ExamTableChooser onChoice={updatetechniques} />
      <hr />
      <ShowTechniqueFilters value={techniqueFilters} onChange={setTechniqueFilters} />
      <hr />
      <ShowShuffleControls value={shuffleControls} onChange={setShuffleControls} nrtechniques={techniques.length} />
      <hr />
      <ShowExamTable techniques={examTable} />
    </>
  );
};
