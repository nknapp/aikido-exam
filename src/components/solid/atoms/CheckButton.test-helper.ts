import { screen } from "solid-testing-library";

export function getCheckButton(label: string): {
  button: HTMLButtonElement;
  isSelected(): boolean;
} {
  const button = screen.getByRole<HTMLButtonElement>("button", { name: label });
  const isSelected = () => {
    return button.getAttribute("aria-checked") === "true";
  };

  return { button, isSelected };
}
