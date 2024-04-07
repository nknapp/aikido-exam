import { type Component } from "solid-js";
import {
  type ButtonColor,
  type ButtonSize,
  createButtonClasses,
} from "@/components/solid/hooks/createButtonClasses.ts";
import { isReady } from "@/components/solid/hooks/isReady.tsx";
import { cls } from "$core/utils/cls.ts";

export interface CheckButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
  class?: string;
  hideLabel?: boolean;
  icon?: Component<{ class?: string }>;
}

export const CheckButton: Component<CheckButtonProps> = (props) => {
  const ready = isReady();
  const { buttonClasses, iconClasses } = createButtonClasses(() => ({
    ...props,
    highlighted: props.value,
    disabled: props.disabled || !ready(),
  }));

  return (
    <button
      class={buttonClasses()}
      onClick={() => props.onChange(!props.value)}
      aria-checked={props.value}
      disabled={!ready()}
    >
      {props.icon && <props.icon class={iconClasses()} />}
      <span class={cls(props.hideLabel && "sr-only")}>{props.label}</span>
    </button>
  );
};
