import { screen, within } from "solid-testing-library";

export function getCheckButton(label: string) {
  const button = screen.getByText(label);
  const checkbox = within(button).getByRole("checkbox");
  return { button, checkbox };
}
