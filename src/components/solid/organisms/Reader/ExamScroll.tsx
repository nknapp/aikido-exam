import { type Component, createMemo, For } from "solid-js";
import { buildTechniqueId, SINGLE_DIRECTION, type Technique } from "$core/model";
import { cls } from "$core/utils/cls.ts";
import { buildExamScroll, type ExamScrollEntry } from "$core/buildExamScroll";
import type { ExamScrollField } from "$core/buildExamScroll/buildExamScroll.ts";

interface ExamScrollProps {
  techniques: Technique[];
  lastTechnique: Technique | null;
  class: string;
}

export const ExamScroll: Component<ExamScrollProps> = (props) => {
  const model = createMemo(() => Array.from(buildExamScroll(props.techniques)));
  return (
    <ul class={cls("overflow-scroll grid gap-2 snap-y shadow-lg m-0", props.class)}>
      {/*<li class={"bg-info-light snap-start border-info border p-2 rounded"}>{t("player.does.not.work")}</li>*/}
      <For each={model()}>
        {(entry) => {
          return (
            <Row
              entry={entry}
              isCurrent={props.lastTechnique != null && entry.id == buildTechniqueId(props.lastTechnique)}
            />
          );
        }}
      </For>
    </ul>
  );
};

const Row: Component<{ entry: ExamScrollEntry; isCurrent: boolean }> = (props) => {
  return (
    <li
      id={props.entry.id}
      class={cls(
        props.isCurrent && "bg-primary-light",
        "border-primary-light border p-2 rounded snap-mandatory",
        "snap-start",
      )}
      aria-current={props.isCurrent}
    >
      <ShowField field={props.entry.execution} class={"text-sm h-6"} />
      <ShowField field={props.entry.attack} class={"text-sm h-6"} />
      <ShowField field={props.entry.defence} class={"text-xl h-8"} />
      <ShowField field={props.entry.direction} class={"text-sm h-6"} />
    </li>
  );
};

const ShowField: Component<{ field: ExamScrollField<string>; class?: string }> = (props) => {
  return (
    <div class={cls(props.field.relevant ? "text-black font-bold" : "text-secondary", props.class)}>
      {props.field.value !== SINGLE_DIRECTION && props.field.value}
    </div>
  );
};
