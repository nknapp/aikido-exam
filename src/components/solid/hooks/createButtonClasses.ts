import { createMemo, type Accessor } from "solid-js";
import { cls } from "$core/utils/cls.ts";

export const buttonColors = ["primary", "secondary"] as const;
export type ButtonColor = (typeof buttonColors)[number];

export const buttonSizes = ["normal", "small"] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export interface ButtonClassProps {
  size?: ButtonSize;
  color?: ButtonColor;
  highlighted?: boolean;
}

const sizeClasses: Record<NonNullable<ButtonClassProps["size"]>, string> = {
  normal: "p-4",
  small: "p-2 text-sm",
};

const colorClasses: Record<NonNullable<ButtonClassProps["color"]>, string> = {
  primary: "border-primary text-primary-dark outline-primary hover:bg-primary-lightest",
  secondary: "border-secondary text-secondary-dark outline-secondary  hover:bg-secondary-lightest",
};

const highlightClasses = "outline outline-4 -outline-offset-4 active:outline-1 active:outline-offset-0";
const highlightedColorClasses: Record<NonNullable<ButtonClassProps["color"]>, string> = {
  primary: "text-primary-dark outline-primary bg-primary-lightest hover:bg-primary-light",
  secondary: "text-secondary-dark outline-secondary bg-secondary-lightest hover:bg-secondary-light",
};

const iconSize: Record<NonNullable<ButtonClassProps["size"]>, string> = {
  normal: "",
  small: "scale-80 origin-center",
};

const iconColor: Record<NonNullable<ButtonClassProps["color"]>, string> = {
  primary: "fill-current",
  secondary: "fill-current",
};

export const createButtonClasses = (props: Accessor<ButtonClassProps>) => {
  const color = createMemo(() => props().color ?? "primary");
  const size = createMemo(() => props().size ?? "normal");
  const highlighted = createMemo(() => props().highlighted ?? false);
  return {
    buttonClasses: createMemo(() => {
      return cls(
        "flex items-center gap-2 border rounded whitespace-nowrap truncate print:p-1 transition-all duration-100",
        "active:outline",
        "disabled:grayscale disabled:opacity-50",
        highlighted() && highlightClasses,
        highlighted() ? highlightedColorClasses[color()] : colorClasses[color()],
        sizeClasses[size()],
      );
    }),
    iconClasses: createMemo(() => {
      return cls(iconSize[size()], iconColor[color()]);
    }),
  };
};
