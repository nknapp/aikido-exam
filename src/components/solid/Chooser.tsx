import { type Component, createSignal } from "solid-js";
import type { DojoDetails } from "$core/model/Dojo.ts";
import { CheckButton } from "@/components/solid/CheckButton.tsx";
import { t } from "@/i18n";

export const Chooser: Component<{ dojo: DojoDetails }> = (props) => {
  const [selection, setSelection] = createSignal<Record<string, boolean>>({});

  function setSelected(name: string, value: boolean) {
    setSelection((selection) => ({ ...selection, [name]: value }));
  }

  function isSelected(name: string) {
    return selection()[name];
  }

  return (
    <div class={"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-4 "}>
      {Object.entries(props.dojo.exams).map(([name, exam]) => {
        return (
          <CheckButton
            value={isSelected(name)}
            text={t(exam.labelKey)}
            onChange={(newValue) => setSelected(name, newValue)}
          />
        );
      })}
    </div>
  );
};
