import { type Component } from "solid-js";
import {
  type ButtonColor,
  type ButtonSize,
  createButtonClasses,
} from "@/components/solid/hooks/createButtonClasses.ts";
import { isReady } from "@/components/solid/hooks/isReady.tsx";

export interface CheckButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  value: boolean;
  onChange: (value: boolean) => void;
  /**
   *  @deprecated Use "label" instead
   */
  text?: string;
  label?: string;
  class?: string;
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
      {props.label ?? props.text}
    </button>
  );
};
