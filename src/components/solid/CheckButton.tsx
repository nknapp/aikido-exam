import type { Component } from "solid-js";

export const CheckButton: Component<{ value: boolean; onChange: (value: boolean) => void; text: string }> = (props) => {
  return (
    <button
      classList={{
        "flex items-center gap-2 border border-primary rounded p-4 bg-primary-light whitespace-nowrap print:p-1": true,
        "print:hidden": !props.value,
      }}
      onClick={() => props.onChange(!props.value)}
    >
      <input class="print:hidden" type={"checkbox"} checked={props.value} /> {props.text}
    </button>
  );
};
