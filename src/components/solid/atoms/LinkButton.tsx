import { type Component } from "solid-js";
import { type ButtonColor, type ButtonSize, createButtonClasses } from "@/components/solid/hooks/createButtonClasses";
import { ButtonIcon } from "@/components/solid/atoms/ButtonIcon.tsx";
import { cls } from "$core/utils/cls.ts";

export { buttonColors, buttonSizes } from "@/components/solid/hooks/createButtonClasses";

export interface LinkButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: Component<{ class?: string }> | string;
  label: string;
  href: string;
  hideLabel?: boolean;
  class?: string;
  qrCode?: "print" | "screen";
}

export const LinkButton: Component<LinkButtonProps> = (props) => {
  const { buttonClasses, iconClasses } = createButtonClasses(() => ({
    ...props,
  }));

  return (
    <span>
      <a href={props.href} class={cls(buttonClasses(), "print:hidden")}>
        {props.icon && <ButtonIcon icon={props.icon} class={iconClasses()} />}
        <span class={cls(props.hideLabel && "sr-only")}>{props.label}</span>
      </a>
      <img
        alt={"hidden print:inline"}
        src={"https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" + encodeURIComponent(props.href)}
      />
    </span>
  );
};
