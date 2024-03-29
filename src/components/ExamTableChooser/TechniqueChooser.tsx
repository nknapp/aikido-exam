import { ExamTableChooser } from "./ExamTableChooser";
import React, { useCallback, useEffect, useState } from "react";
import { shuffleAndSelect } from "../../utils/shuffling/shuffle";
import { useDebouncedEffect } from "src/utils/hooks/useDebouncedEffect";
import { ShowExamTable } from "../ShowExamTable/ShowExamTable";
import { TechniqueFilters, techniquePredicate } from "../../utils/technique-filters";
import { ShowTechniqueFilters } from "./ShowTechniqueFilters";
import { ShowShuffleControls, ShuffleControls } from "./ShuffleControls";
import { TechniqueList } from "../../model/TechniqueList";
import { Alert } from "react-bootstrap";
import { DojoChooser } from "../DojoChooser";
import { useSelectedDojo } from "../../store/selectedDojo";

export interface ExamTableChooserProps {
  onChoice(techniques: TechniqueList): void;
}

export const TechniqueChooser: React.FC<ExamTableChooserProps> = ({ onChoice }) => {
  const [chosenTechniques, setChosenTechniques] = useState<TechniqueList>(new TechniqueList());
  const [result, setResult] = useState<TechniqueList>(new TechniqueList());
  const { selectedDojo, selectedDojoLazyData } = useSelectedDojo();

  useEffect(() => setResult(new TechniqueList()), [selectedDojo]);

  const [shuffleControls, setShuffleControls] = useState<ShuffleControls>({
    shouldShuffle: true,
    coverage: 100,
  });
  const [filters, setFilters] = useState<TechniqueFilters>({
    badKnees: false,
  });

  useDebouncedEffect(
    useCallback(() => {
      let newTechniques = shuffleControls.shouldShuffle
        ? shuffleAndSelect(chosenTechniques, {
            coverage: shuffleControls.coverage / 100,
          })
        : chosenTechniques;
      newTechniques = newTechniques.filter(techniquePredicate(filters));
      setResult(newTechniques);
      onChoice(newTechniques);
    }, [shuffleControls, chosenTechniques, onChoice, filters]),
    200,
  );

  return (
    <>
      <DojoChooser />
      <hr />
      <ExamTableChooser key={selectedDojo.name} onChoice={setChosenTechniques} />

      {selectedDojoLazyData.additionalText && (
        <Alert variant={"warning"}>
          <Alert.Heading>Hinweis</Alert.Heading>
          {selectedDojoLazyData.additionalText}
        </Alert>
      )}
      {selectedDojoLazyData.sourceLink && (
        <p>
          Quelle: <a href={selectedDojoLazyData.sourceLink}>{selectedDojoLazyData.sourceLink}</a>
        </p>
      )}
      <hr />
      <ShowTechniqueFilters value={filters} onChange={setFilters} />
      <hr />
      <ShowShuffleControls value={shuffleControls} onChange={setShuffleControls} techniqueCount={result.length} />
      <hr />
      <ShowExamTable techniques={result} />
    </>
  );
};
