import { type Component, createMemo, createSignal, onMount } from "solid-js";

export const CheckButton: Component<{
  value: boolean;
  onChange: (value: boolean) => void;
  text: string;
  class?: string;
}> = (props) => {
  const [ready, setReady] = createSignal(false);
  onMount(() => {
    setReady(true);
  });

  const classes = createMemo(() =>
    [
      "flex items-center gap-2 border border-primary rounded p-4 whitespace-nowrap print:p-1 ",
      props.value ? "bg-primary-light outline-2 outline-primary outline" : "print:hidden bg-white",
      props.class ?? "",
    ].join(" "),
  );

  return (
    <button
      class={classes()}
      disabled={!ready()}
      onClick={() => props.onChange(!props.value)}
      aria-checked={props.value}
    >
      {props.text}
    </button>
  );
};
