import { type Component, createMemo, For } from "solid-js";
import { type Technique } from "$core/model";
import { withoutIrrelevantParts } from "$core/relevantTechniqueParts";
import { cls } from "$core/utils/cls.ts";
import type { WithoutIrrelevantPartsReturn } from "$core/relevantTechniqueParts/withoutIrrelevantParts.ts";
import { t } from "@/i18n";

interface ExamScrollProps {
  techniques: Technique[];
  currentTechnique: Technique;
  class: string;
}

export const ExamScroll: Component<ExamScrollProps> = (props) => {
  return (
    <div class={cls("overflow-scroll grid gap-2 snap-y shadow-lg", props.class)}>
      <div class={"bg-info-light snap-start border-info border p-2 rounded"}>{t("player.does.not.work")}</div>
      <For each={props.techniques}>
        {(technique, index) => {
          return (
            <Row
              technique={technique}
              previous={props.techniques[index() - 1]}
              active={techniqueId(technique) == techniqueId(props.currentTechnique)}
            />
          );
        }}
      </For>
    </div>
  );
};

const Row: Component<{ technique: Technique; previous?: Technique; active: boolean }> = (props) => {
  const relevant = createMemo(() => withoutIrrelevantParts(props.technique, props.previous));
  const color = (prop: keyof WithoutIrrelevantPartsReturn): string => {
    return relevant()[prop] ? "text-black font-bold" : "text-secondary";
  };

  return (
    <div
      id={techniqueId(props.technique)}
      class={cls(
        props.active && "bg-primary-light",
        "border-primary-light border p-2 rounded snap-mandatory",
        "snap-start",
      )}
    >
      <div class={cls(color("execution"), "text-sm h-6")}>{props.technique.execution}</div>
      <div class={cls(color("attack"), "text-sm h-6")}>{props.technique.attack}</div>
      <div class={cls(color("defence"), "text-xl h-8")}>{props.technique.defence}</div>
      <div class={cls(color("direction"), "text-sm h-6")}>{relevant().direction}</div>
    </div>
  );
};

function techniqueId(technique: Technique) {
  return `${technique.execution} ${technique.attack} ${technique.defence} ${technique.direction}`.replace(/\W/g, "_");
}
