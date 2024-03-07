import { type Component, createSignal, onMount } from "solid-js";

export const CheckButton: Component<{ value: boolean; onChange: (value: boolean) => void; text: string }> = (props) => {
  const [ready, setReady] = createSignal(false);
  onMount(() => {
    setReady(true);
  });

  return (
    <button
      classList={{
        "flex items-center gap-2 border border-primary rounded p-4 bg-primary-light whitespace-nowrap print:p-1": true,
        "print:hidden": !props.value,
      }}
      disabled={!ready()}
      onClick={() => props.onChange(!props.value)}
    >
      <input class="print:hidden" type={"checkbox"} checked={props.value} disabled={!ready()} /> {props.text}
    </button>
  );
};
