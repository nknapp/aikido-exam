import { type Component } from "solid-js";

import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";
import {} from "solid-js";

export interface Option {
  id: string;
  label: string;
  wide?: boolean;
}

export interface ExamSelectorProps {
  options: Option[];
  value: Set<string>;
  onChange: (newValue: Set<string>) => void;
}

export const ChooserControlButtons: Component<ExamSelectorProps> = (props) => {
  function setValue(id: string, selected: boolean) {
    const newValue = new Set(props.value);
    if (selected) {
      newValue.add(id);
    } else {
      newValue.delete(id);
    }
    props.onChange(newValue);
  }

  return props.options.map(({ id, label, wide }) => {
    return (
      <CheckButton
        class={wide ? "col-span-2" : ""}
        value={props.value.has(id)}
        text={label}
        onChange={(selected) => setValue(id, selected)}
      />
    );
  });
};
