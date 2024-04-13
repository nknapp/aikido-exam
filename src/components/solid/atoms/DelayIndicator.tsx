import { type Component, createSignal } from "solid-js";
import { cls } from "$core/utils/cls.ts";

export interface DelayControl {
  animateDelay(seconds: number): Promise<void>;
}

interface DelayIndicatorProps {
  setDelayControl: (fn: DelayControl) => void;
  disabled: boolean;
}

export const DelayIndicator: Component<DelayIndicatorProps> = (props) => {
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
    animation.cancel();
    el.style.width = "0";
  }
  props.setDelayControl({ animateDelay });

  return (
    <div class={cls("w-full h-1", props.disabled ? "bg-secondary-lightest" : "bg-primary-lightest")}>
      <div class={"bg-primary h-full w-0"} ref={setElement}></div>
    </div>
  );
};
