import { type Component } from "solid-js";
import { type ButtonColor, type ButtonSize, createButtonClasses } from "@/components/solid/hooks/createButtonClasses";
import { ButtonIcon } from "@/components/solid/atoms/ButtonIcon.tsx";
import { cls } from "$core/utils/cls.ts";

export { buttonColors, buttonSizes } from "@/components/solid/hooks/createButtonClasses";

export interface SimpleButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: Component<{ class?: string }> | string;
  label: string;
  href: string;
  hideLabel?: boolean;
}

export const LinkButton: Component<SimpleButtonProps> = (props) => {
  const { buttonClasses, iconClasses } = createButtonClasses(() => ({
    ...props,
  }));

  return (
    <a href={props.href} class={buttonClasses()}>
      {props.icon && <ButtonIcon icon={props.icon} class={iconClasses()} />}
      <span class={cls(props.hideLabel && "sr-only")}>{props.label}</span>
    </a>
  );
};
