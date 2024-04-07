import { type Component, createMemo, For } from "solid-js";
import { buildTechniqueId, type Technique } from "$core/model";
import { cls } from "$core/utils/cls.ts";
import { t } from "@/i18n";
import { buildExamScroll, type ExamScrollEntry } from "$core/buildExamScroll";
import type { ExamScrollField } from "$core/buildExamScroll/buildExamScroll.ts";

interface ExamScrollProps {
  techniques: Technique[];
  currentTechnique: Technique;
  class: string;
}

export const ExamScroll: Component<ExamScrollProps> = (props) => {
  const model = createMemo(() => Array.from(buildExamScroll(props.techniques)));
  return (
    <div class={cls("overflow-scroll grid gap-2 snap-y shadow-lg", props.class)}>
      <div class={"bg-info-light snap-start border-info border p-2 rounded"}>{t("player.does.not.work")}</div>
      <For each={model()}>
        {(entry) => {
          return <Row entry={entry} active={entry.id == buildTechniqueId(props.currentTechnique)} />;
        }}
      </For>
    </div>
  );
};

const Row: Component<{ entry: ExamScrollEntry; active: boolean }> = (props) => {
  return (
    <div
      id={props.entry.id}
      class={cls(
        props.active && "bg-primary-light",
        "border-primary-light border p-2 rounded snap-mandatory",
        "snap-start",
      )}
    >
      <ShowField field={props.entry.execution} class={"text-sm h-6"} />
      <ShowField field={props.entry.attack} class={"text-sm h-6"} />
      <ShowField field={props.entry.defence} class={"text-xl h-8"} />
      <ShowField field={props.entry.direction} class={"text-sm h-6"} />
    </div>
  );
};

const ShowField: Component<{ field: ExamScrollField<string>; class?: string }> = (props) => {
  return (
    <div class={cls(props.field.relevant ? "text-black font-bold" : "text-secondary", props.class)}>
      {props.field.value}
    </div>
  );
};
