import type { Component } from "solid-js";

export const CheckButton: Component<{ value: boolean; onChange: (value: boolean) => void; text: string }> = (props) => {
  return (
    <button
      class="flex items-center gap-2 border border-primary rounded p-4 bg-primary-light whitespace-nowrap"
      onClick={() => props.onChange(!props.value)}
    >
      <input type={"checkbox"} checked={props.value} /> {props.text}
    </button>
  );
};
