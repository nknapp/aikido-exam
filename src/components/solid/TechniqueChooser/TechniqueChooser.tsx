import { type Component, createDeferred, createSignal } from "solid-js";
import type { ResolvedDojo } from "$core/model/Dojo.ts";
import { t } from "@/i18n";
import { ExamSheet } from "@/components/solid/TechniqueChooser/ExamSheet.tsx";
import { resolveExamTables } from "$core/resolveExamTables";
import { groupTechniques } from "$core/groupTechniques/groupTechniques.ts";
import { ChooserControlButtons, type Option } from "@/components/solid/TechniqueChooser/ChooserControlButtons.tsx";
import type { Exam } from "$core/model";
import { syncToStorage } from "@/components/solid/syncToStorage.ts";
import { isServer } from "solid-js/web";
import { type TechniqueFilters, techniquePredicate } from "$core/techniqueFilter/technique-filters.ts";
import { ChooserControlContainer } from "@/components/solid/TechniqueChooser/ChooserControlContainer.tsx";
import { ChooserControlFilters } from "@/components/solid/TechniqueChooser/ChooserControlFilters.tsx";
import { ChooserControlOrder, type OrderOptions } from "@/components/solid/TechniqueChooser/ChooserControlOrder.tsx";
import { shuffleTechniques } from "$core/shuffleTechniques";

export const TechniqueChooser: Component<{ dojo: ResolvedDojo }> = (props) => {
  const [examSelection, setExamSelection] = syncToStorage(createSignal(new Set<string>()), {
    name: "examSelection:" + props.dojo.info.id,
    storage: isServer ? global.localStorage : sessionStorage,
    serialize: (set) => JSON.stringify(Array.from(set)),
    deserialize: (data) => new Set(JSON.parse(data)),
  });

  const [selectedFilters, setSelectedFilters] = syncToStorage(createSignal<TechniqueFilters>({ kneeFriendly: false }), {
    name: "techniqueFilters:" + props.dojo.info.id,
    storage: isServer ? global.localStorage : sessionStorage,
  });

  const [order, setOrder] = syncToStorage(createSignal<OrderOptions>({ randomize: true, includePercent: 80 }), {
    name: "orderOptions::" + props.dojo.info.id,
    storage: isServer ? global.localStorage : sessionStorage,
  });

  const [refreshForced, setRefreshForced] = createSignal(false);
  function forceRefresh() {
    setRefreshForced((oldValue) => !oldValue);
  }
  const selectedTechniques = createDeferred(() => {
    // Make force refresh a dependency
    refreshForced();
    const exams = props.dojo.details.exams.filter((exam) => examSelection().has(exam.id));
    const allTechniques = resolveExamTables(exams);

    const filteredTechniques = allTechniques.filter(techniquePredicate(selectedFilters()));
    const orderedTechniques = order().randomize
      ? shuffleTechniques(filteredTechniques, { coverage: order().includePercent / 100 })
      : filteredTechniques;

    return groupTechniques(orderedTechniques, { orderExecutions: true });
  });

  return (
    <div>
      <ChooserControlContainer headerLabel={t("examChooser.exams.header")}>
        <ChooserControlButtons
          options={examsToOptions(props.dojo.details.exams)}
          value={examSelection()}
          onChange={setExamSelection}
        />
      </ChooserControlContainer>
      <ChooserControlContainer headerLabel={t("examChooser.filters.header")}>
        <ChooserControlFilters value={selectedFilters()} onChange={setSelectedFilters} />
      </ChooserControlContainer>
      <ChooserControlContainer headerLabel={t("examChooser.order.header")}>
        <ChooserControlOrder value={order()} onChange={setOrder} onForceRefresh={forceRefresh} />
      </ChooserControlContainer>
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
