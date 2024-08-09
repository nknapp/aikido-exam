import { type Component, createMemo, type JSX } from "solid-js";
import { type ButtonColor, type ButtonSize, createButtonClasses } from "@/components/solid/hooks/createButtonClasses";
import { isReady } from "@/components/solid/hooks/isReady.tsx";
import { cls } from "$core/utils/cls.ts";

export { buttonColors, buttonSizes } from "@/components/solid/hooks/createButtonClasses";

export interface SimpleButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  icon?: Component<{ class?: string }>;
  hideLabel?: boolean;
  label: string;
  onClick?(event: MouseEvent): void;
  children?: JSX.Element;
  class?: string;
}

export const SimpleButton: Component<SimpleButtonProps> = (props) => {
  const ready = isReady();
  const disabled = createMemo(() => !ready || props.disabled);
  const { buttonClasses, iconClasses } = createButtonClasses(() => props);

  return (
    <button class={buttonClasses()} onClick={(event) => props.onClick?.(event)} disabled={disabled()}>
      {props.icon && <props.icon class={iconClasses()} />}
      <span class={cls(props.hideLabel && "sr-only")}>{props.label}</span>
      {props.children}
    </button>
  );
};
