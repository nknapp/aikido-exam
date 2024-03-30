import { type Component, createMemo, createSignal } from "solid-js";
import type { ResolvedDojo } from "$core/model/Dojo.ts";
import { t } from "@/i18n";
import { ExamSheet } from "@/components/solid/TechniqueChooser/ExamSheet.tsx";
import { resolveExamTables } from "$core/resolveExamTables";
import { groupTechniques } from "$core/groupTechniques/groupTechniques.ts";
import { ExamSelector, type Option } from "@/components/solid/TechniqueChooser/ExamSelector.tsx";
import type { Exam } from "$core/model";

export const TechniqueChooser: Component<{ dojo: ResolvedDojo }> = (props) => {
  const [examSelection, setExamSelection] = createSignal(new Set<string>());

  const selectedTechniques = createMemo(() => {
    const exams = Object.entries(props.dojo.details.exams)
      .filter(([key]) => examSelection().has(key))
      .map(([, value]) => value);
    const mergedTables = resolveExamTables(exams);
    return groupTechniques(mergedTables, { canonicalExecutionOrder: true });
  });

  return (
    <div>
      <div>
        <header class="text-lg">{t("examChooser.exams.header")}</header>
        <ExamSelector
          options={examsToOptions(props.dojo.details.exams)}
          value={examSelection()}
          onChange={setExamSelection}
        />
      </div>
      <div class={"my-10"}>
        <ExamSheet techniques={selectedTechniques()} />
      </div>
    </div>
  );
};

function examsToOptions(exams: Record<string, Exam>): Option[] {
  return Object.entries(exams).map(([id, exam]) => ({ id, label: t(exam.labelKey) }));
}
