import type { Component } from "solid-js";
import { cls } from "$core/utils/cls.ts";

interface ButtonIconProps {
  icon: Component<{ class?: string }> | string;
  class?: string;
}

export const ButtonIcon: Component<ButtonIconProps> = (props) => {
  return typeof props.icon === "string" ? (
    <img src={props.icon} class={cls("h-6", props.class)} alt="" />
  ) : (
    <props.icon class={props.class} />
  );
};
