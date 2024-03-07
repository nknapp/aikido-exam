import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { ExamSelector, type Option } from "@/components/solid/TechniqueChooser/ExamSelector.tsx";
import { screen } from "solid-testing-library";
import { createSignal } from "solid-js";
import { user } from "$core/test-utils/user.ts";
import { getCheckButton } from "@/components/solid/CheckButton.test-helper.ts";
import { simulateSsrEnvironment } from "$core/test-utils/simulateSsrEnvironment.test-helper.ts";

function renderExamSelector(options: Array<Option>) {
  const [value, setValue] = createSignal(new Set<string>());
  const result = renderSolid(() => <ExamSelector options={options} value={value()} onChange={setValue} />);
  return {
    ...result,
    value,
  };
}

describe("ExamSelector", () => {
  it("renders buttons", () => {
    const options: Option[] = [
      { id: "1", label: "Option 1" },
      { id: "1", label: "Option 2" },
    ];
    renderExamSelector(options);
    expect(screen.getByText("Option 1")).not.toBeNull();
    expect(screen.getByText("Option 2")).not.toBeNull();
  });

  it("value is initially empty", () => {
    const options: Option[] = [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
    ];
    const { value } = renderExamSelector(options);
    expect(value()).toEqual(new Set());
  });

  it("clicking a button selects that value", async () => {
    const options: Option[] = [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
    ];
    const { value } = renderExamSelector(options);
    await user.click(screen.getByText("Option 1"));
    expect(value()).toEqual(new Set(["1"]));
  });

  it("clicking the button again button deselects that value", async () => {
    const options: Option[] = [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
    ];
    const { value } = renderExamSelector(options);
    await user.click(screen.getByText("Option 1"));
    await user.click(screen.getByText("Option 1"));
    expect(value()).toEqual(new Set([]));
  });

  it("buttons are disabled on server rendering", async () => {
    simulateSsrEnvironment();
    const options: Option[] = [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
    ];
    const { value } = renderExamSelector(options);
    const { button, checkbox } = getCheckButton("Option 1");
    expect(button).toBeDisabled();
    expect(checkbox).toBeDisabled();
    await user.click(button);
    expect(value()).toEqual(new Set([]));
    await user.click(checkbox);
    expect(value()).toEqual(new Set([]));
  });
});
