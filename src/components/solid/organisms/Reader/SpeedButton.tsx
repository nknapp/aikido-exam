import { type Component, createMemo, For } from "solid-js";
import {
  type ButtonColor,
  type ButtonSize,
  createButtonClasses,
} from "@/components/solid/hooks/createButtonClasses.ts";
import { IconSpeed } from "@/icons";

const speeds = ["slow", "normal", "fast"] as const;
export type Speed = (typeof speeds)[number];

export interface SpeedButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  icon?: Component<{ class?: string }>;
  value: Speed;
  onChange(value: Speed): void;
}

export const SpeedButton: Component<SpeedButtonProps> = (props) => {
  const { buttonClasses, iconClasses } = createButtonClasses(() => props);

  const speedIndex = createMemo(() => speeds.indexOf(props.value));
  function next() {
    const nextIndex = (speedIndex() + 1) % speeds.length;
    props.onChange(speeds[nextIndex]);
  }

  return (
    <button class={buttonClasses()} onClick={next} disabled={props.disabled}>
      <IconSpeed class={iconClasses()} />
      <div class={"grid grid-cols-3 w-24 gap-1 h-6"}>
        <For each={speeds}>
          {(speed, index) => {
            return (
              <div
                class={speedIndex() < index() ? "border-primary border" : "bg-primary border-primary-dark border-1"}
              ></div>
            );
          }}
        </For>
      </div>
    </button>
  );
};
