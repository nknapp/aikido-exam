import { type Component, createSignal } from "solid-js";
import type { DojoDetails } from "$core/model/Dojo.ts";
import { CheckButton } from "@/components/solid/CheckButton.tsx";

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
      {Object.keys(props.dojo.exams).map((name) => {
        return (
          <CheckButton value={isSelected(name)} text={name} onChange={(newValue) => setSelected(name, newValue)} />
        );
      })}
    </div>
  );
};
