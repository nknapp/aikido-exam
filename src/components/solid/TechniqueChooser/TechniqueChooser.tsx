import { type Component, createMemo, createSignal } from "solid-js";
import type { ResolvedDojo } from "$core/model/Dojo.ts";
import { t } from "@/i18n";
import { ExamSheet } from "@/components/solid/TechniqueChooser/ExamSheet.tsx";
import { resolveExamTables } from "$core/resolveExamTables";
import { groupTechniques } from "$core/groupTechniques/groupTechniques.ts";
import { MultipleChoiceButtons, type Option } from "@/components/solid/TechniqueChooser/MultipleChoiceButtons.tsx";
import type { Exam } from "$core/model";
import { syncToStorage } from "@/components/solid/syncToStorage.ts";
import { isServer } from "solid-js/web";
import { type TechniqueFilters, techniquePredicate } from "$core/techniqueFilter/technique-filters.ts";

export const TechniqueChooser: Component<{ dojo: ResolvedDojo }> = (props) => {
  const [examSelection, setExamSelection] = syncToStorage(createSignal(new Set<string>()), {
    name: "examSelection:" + props.dojo.info.id,
    storage: isServer ? global.localStorage : sessionStorage,
    serialize: (set) => JSON.stringify(Array.from(set)),
    deserialize: (data) => new Set(JSON.parse(data)),
  });

  const [selectedFilters, setSelectedFilters] = syncToStorage(createSignal(new Set<keyof TechniqueFilters>()), {
    name: "techniqueFilters:" + props.dojo.info.id,
    storage: isServer ? global.localStorage : sessionStorage,
    serialize: (set) => JSON.stringify(Array.from(set)),
    deserialize: (data) => new Set(JSON.parse(data)),
  });

  const selectedTechniques = createMemo(() => {
    const exams = props.dojo.details.exams.filter((exam) => examSelection().has(exam.id));
    const allTechniques = resolveExamTables(exams);

    const filteredTechniques = allTechniques.filter(
      techniquePredicate({
        badKnees: selectedFilters().has("badKnees"),
      }),
    );
    return groupTechniques(filteredTechniques, { canonicalExecutionOrder: true });
  });

  return (
    <div>
      <div>
        <header class="text-lg">{t("examChooser.exams.header")}</header>
        <MultipleChoiceButtons
          options={examsToOptions(props.dojo.details.exams)}
          value={examSelection()}
          onChange={setExamSelection}
        />
      </div>
      <div>
        <header class="text-lg">{t("examChooser.filters.header")}</header>
        <MultipleChoiceButtons options={filterOptions()} value={selectedFilters()} onChange={setSelectedFilters} />
      </div>
      <div>
        {examSelection().size > 0 && (
          <div class={"my-10"}>
            <ExamSheet techniques={selectedTechniques()} />
          </div>
        )}
      </div>
    </div>
  );
};

function examsToOptions(exams: Exam[]): Option[] {
  return exams.map((exam) => ({ id: exam.id, label: t(exam.labelKey) }));
}

function filterOptions(): Option[] {
  return [{ id: "badKnees", label: t("examChooser.filters.badKnees"), wide: true }] satisfies Array<{
    id: keyof TechniqueFilters;
    label: string;
    wide?: boolean;
  }>;
}
