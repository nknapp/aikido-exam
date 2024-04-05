import { type Component, createDeferred, createSignal } from "solid-js";
import type { ResolvedDojo } from "$core/model/Dojo.ts";
import { t } from "@/i18n";
import { l } from "astro-i18n";
import { ExamSheet } from "@/components/solid/organisms/TechniqueChooser/ExamSheet.tsx";
import {
  ChooserControlButtons,
  type Option,
} from "@/components/solid/organisms/TechniqueChooser/ChooserControlButtons.tsx";
import type { Exam } from "$core/model";
import { syncToStorage } from "@/components/solid/hooks/syncToStorage.ts";
import { isServer } from "solid-js/web";
import { ChooserControlContainer } from "@/components/solid/organisms/TechniqueChooser/ChooserControlContainer.tsx";
import { ChooserControlFilters } from "@/components/solid/organisms/TechniqueChooser/ChooserControlFilters.tsx";
import {
  ChooserControlOrder,
  type ChoosableOrderOptions,
} from "@/components/solid/organisms/TechniqueChooser/ChooserControlOrder.tsx";
import { chooseTechniques, type TechniqueFilters } from "$core/chooseTechniques";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { IconPrint, IconSpeak } from "@/icons";
import { createTechniqueStore } from "$core/store";

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

  const [order, setOrder] = syncToStorage(
    createSignal<ChoosableOrderOptions>({ randomize: true, includePercent: 80 }),
    {
      name: "orderOptions:" + props.dojo.info.id,
      storage: isServer ? global.localStorage : sessionStorage,
    },
  );

  const [refreshForced, setRefreshForced] = createSignal(false);
  function forceRefresh() {
    setRefreshForced((oldValue) => !oldValue);
  }
  const selectedTechniques = createDeferred(() => {
    // Make force refresh a dependency, so that he "shuffle" button works
    refreshForced();
    return chooseTechniques(props.dojo.details.exams, {
      order: {
        ...order(),
        orderExecutions: true,
      },
      selectedExams: examSelection(),
      filters: selectedFilters(),
    });
  });

  const readLoud = async () => {
    const { save } = createTechniqueStore(props.dojo.info.id);
    await save(selectedTechniques());
    document.location.href = l(`/${props.dojo.info.id}/reader`);
  };

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
            <div class="flex justify-end gap-4">
              <SimpleButton
                size={"small"}
                color={"primary"}
                icon={IconSpeak}
                label={t("examChooser.read")}
                onClick={readLoud}
              />
              <SimpleButton
                size={"small"}
                color={"secondary"}
                icon={IconPrint}
                label={t("examChooser.print")}
                onClick={() => window.print()}
              />
            </div>
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
