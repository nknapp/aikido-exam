import { type Component, createEffect, createMemo, createSignal, For, type JSX, type Setter } from "solid-js";
import { buildTechniqueId, SINGLE_DIRECTION, type Technique } from "$core/model";
import { cls } from "$core/utils/cls.ts";
import { buildExamScroll, type ExamScrollEntry } from "$core/buildExamScroll";
import type { ExamScrollField } from "$core/buildExamScroll/buildExamScroll.ts";
import { t } from "@/i18n";
import { IconNextPlan } from "@/icons";
import { l } from "astro-i18n";

interface ExamScrollProps {
  techniques: Technique[];
  lastTechnique: Technique | null;
  nextTechnique: Technique | null;
  class?: string;
}

export const ExamScroll: Component<ExamScrollProps> = (props) => {
  const model = createMemo(() => Array.from(buildExamScroll(props.techniques)));
  return (
    <ul
      class={cls(
        "overflow-y-scroll grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 shadow-lg m-0 bg-white",
        props.class,
      )}
    >
      <For each={model()}>
        {(entry) => {
          return (
            <Row
              entry={entry}
              isLastTechnique={props.lastTechnique != null && entry.id == buildTechniqueId(props.lastTechnique)}
              isNextTechnique={props.nextTechnique != null && entry.id == buildTechniqueId(props.nextTechnique)}
            />
          );
        }}
      </For>
      <a
        href={l("/donations")}
        class={"border-info border bg-info-lightest h-32 flex flex-col items-center justify-center gap-4 text-black "}
      >
        <span>{t("donations.question")}</span>
        <span>{t("donations.action")}</span>
      </a>
    </ul>
  );
};

const Row: Component<{ entry: ExamScrollEntry; isLastTechnique: boolean; isNextTechnique: boolean }> = (props) => {
  const [element, setElement] = createSignal<HTMLLIElement>();

  createEffect(() => {
    if (props.isNextTechnique) {
      const el = element();
      if (el) {
        el.scrollIntoView?.({ block: "end", inline: "start", behavior: "smooth" });
      }
    }
  });

  return (
    <Box
      ref={setElement}
      id={props.entry.id}
      class={cls(props.isLastTechnique && "bg-primary-lightest outline-primary outline-4 -outline-offset-4")}
      ariaCurrent={props.isLastTechnique}
    >
      {props.isNextTechnique && (
        <div
          class={
            "absolute flex items-center top-0 right-0 rounded bg-primary-dark font-bold text-white p-1 origin-top-right text-xs"
          }
        >
          <IconNextPlan class={"fill-current scale-75"} /> {t("reader.upcoming-technique")}
        </div>
      )}
      <ShowField field={props.entry.execution} class={"text-sm h-6"} />
      <ShowField field={props.entry.attack} class={"text-sm h-6 z-10"} />
      <ShowField field={props.entry.defence} class={"text-xl h-8"} />
      <ShowField field={props.entry.direction} class={"text-sm h-6"} />
    </Box>
  );
};

const Box: Component<{
  children: JSX.Element;
  ref: Setter<HTMLLIElement | undefined>;
  class?: string;
  id?: string;
  ariaCurrent?: JSX.LiHTMLAttributes<HTMLLIElement>["aria-current"];
  noListItem?: boolean;
}> = (props) => {
  return (
    <li
      ref={props.ref}
      id={props.id}
      class={cls(
        props.class,
        "border-primary-light border p-2 pt-4 rounded snap-mandatory",
        "snap-start",
        "relative",
        "overflow-visible",
        "list-none",
        "h-32",
      )}
      aria-current={props.ariaCurrent}
      role={props.noListItem ? "presentation" : undefined}
    >
      {props.children}
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
