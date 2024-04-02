import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { CheckButton } from "@/components/solid/CheckButton.tsx";
import { getCheckButton } from "@/components/solid/CheckButton.test-helper.ts";

describe("CheckButton.test-helper", () => {
  it("returns button", () => {
    renderSolid(() => <CheckButton value={true} onChange={() => {}} text={"text"} />);
    const { button } = getCheckButton("text");
    expect(button).toHaveTextContent("text");
  });

  it("'isSelected' for value=true", () => {
    renderSolid(() => <CheckButton value={true} onChange={() => {}} text={"text"} />);
    const { isSelected } = getCheckButton("text");
    expect(isSelected()).toBe(true);
  });

  it("'isSelected' for value=false", () => {
    renderSolid(() => <CheckButton value={false} onChange={() => {}} text={"text"} />);
    const { isSelected } = getCheckButton("text");
    expect(isSelected()).toBe(false);
  });
});
