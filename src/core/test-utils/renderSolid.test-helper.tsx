import { render } from "solid-testing-library";
import { type JSX } from "solid-js";

export function renderSolid(ui: () => JSX.Element) {
  return render(ui);
}
