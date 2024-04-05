import { screen } from "solid-testing-library";

export function getCheckButton(label: string): {
  button: HTMLButtonElement;
  isSelected(): boolean;
} {
  const button = screen.getByText<HTMLButtonElement>(label);
  const isSelected = () => {
    return button.getAttribute("aria-checked") === "true";
  };

  return { button, isSelected };
}
