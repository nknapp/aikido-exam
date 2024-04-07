import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { CheckButton } from "./CheckButton.tsx";
import { getCheckButton } from "./CheckButton.test-helper.ts";

describe("CheckButton.test-helper", () => {
  it("returns button", () => {
    renderSolid(() => <CheckButton value={true} onChange={() => {}} label={"text"} />);
    const { button } = getCheckButton("text");
    expect(button).toHaveTextContent("text");
  });

  it("'isSelected' for value=true", () => {
    renderSolid(() => <CheckButton value={true} onChange={() => {}} label={"text"} />);
    const { isSelected } = getCheckButton("text");
    expect(isSelected()).toBe(true);
  });

  it("'isSelected' for value=false", () => {
    renderSolid(() => <CheckButton value={false} onChange={() => {}} label={"text"} />);
    const { isSelected } = getCheckButton("text");
    expect(isSelected()).toBe(false);
  });
});
