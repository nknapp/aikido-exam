import { type Component, createMemo } from "solid-js";
import { type ButtonColor, type ButtonSize, createButtonClasses } from "@/components/solid/hooks/createButtonClasses";
import { isReady } from "@/components/solid/hooks/isReady.tsx";

export { buttonColors, buttonSizes } from "@/components/solid/hooks/createButtonClasses";

export interface SimpleButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  icon?: Component<{ class?: string }>;
  label?: string;
  onClick?(event: MouseEvent): void;
}

export const SimpleButton: Component<SimpleButtonProps> = (props) => {
  const ready = isReady();
  const disabled = createMemo(() => !ready || props.disabled);
  const { buttonClasses, iconClasses } = createButtonClasses(() => ({
    ...props,
  }));

  return (
    <button class={buttonClasses()} onClick={(event) => props.onClick?.(event)} disabled={disabled()}>
      {props.icon && <props.icon class={iconClasses()} />}
      {props.label}
    </button>
  );
};
