import { type Component, createSignal } from "solid-js";

export interface DelayControl {
  animateDelay(seconds: number): Promise<void>;
}

export const DelayIndicator: Component<{ setDelayControl: (fn: DelayControl) => void }> = (props) => {
  const [element, setElement] = createSignal<HTMLElement>();

  async function animateDelay(seconds: number) {
    const el = element();
    if (el == null) return;
    const animation = el.animate([{ width: "0%" }, { width: "100%" }], {
      fill: "forwards",
      easing: "linear",
      duration: seconds * 1000,
    });
    await animation.finished;
  }
  props.setDelayControl({ animateDelay });
  return (
    <div class={"w-full h-1 bg-primary-lightest"}>
      <div class={"bg-primary h-full"} ref={setElement}></div>
    </div>
  );
};
