import { type Component, type JSXElement } from "solid-js";
import { cls } from "$core/utils/cls.ts";

export type AlertType = "warning";

const colorClasses: Record<AlertType, string> = {
  warning: "bg-info-light border-info-dark",
};

export const Alert: Component<{ type: AlertType; children: JSXElement }> = (props) => {
  return <div class={cls("border p-2", colorClasses[props.type])}>{props.children}</div>;
};
