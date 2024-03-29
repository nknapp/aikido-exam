import { type Component, createMemo, createSignal } from "solid-js";
import type { ResolvedDojo } from "$core/model/Dojo.ts";
import { CheckButton } from "@/components/solid/CheckButton.tsx";
import { t } from "@/i18n";
import { ExamSheet } from "@/components/solid/ExamChooser/ExamSheet.tsx";
import { resolveExamTables } from "$core/resolveExamTables";
import { groupTechniques } from "$core/groupTechniques/groupTechniques.ts";

export const ExamChooser: Component<{ dojo: ResolvedDojo }> = (props) => {
  const [selection, setSelection] = createSignal<Record<string, boolean>>({});

  const selectedTable = createMemo(() => {
    const exams = Object.entries(props.dojo.details.exams)
      .filter(([key]) => selection()[key])
      .map(([, value]) => value);
    const mergedTables = resolveExamTables(exams);
    return groupTechniques(mergedTables, { canonicalExecutionOrder: true });
  });
  function setSelected(name: string, value: boolean) {
    setSelection((selection) => ({ ...selection, [name]: value }));
  }

  function isSelected(name: string) {
    return selection()[name];
  }

  return (
    <div>
      <div class={"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-4 "}>
        {Object.entries(props.dojo.details.exams).map(([name, exam]) => {
          return (
            <CheckButton
              value={isSelected(name)}
              text={t(exam.labelKey)}
              onChange={(newValue) => setSelected(name, newValue)}
            />
          );
        })}
      </div>
      <div class={"my-10"}>
        <ExamSheet techniques={selectedTable()} />
      </div>
    </div>
  );
};
