import { cleanup, render, screen } from "solid-testing-library";
import { TechniqueChooser } from "./TechniqueChooser.tsx";
import type { DojoDetails, DojoInfo, ResolvedDojo } from "$core/model/Dojo.ts";
import { createExam } from "$core/model/Exam.test-helper.ts";
import { user } from "$core/test-utils/user.ts";
import { getCheckButton } from "@/components/solid/atoms/CheckButton.test-helper.ts";
import { waitFor } from "@testing-library/react";
import { delay } from "@/utils/delay.ts";
import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";

afterEach(cleanup);

function createDojoInfo(partialInfo: Partial<DojoInfo> = {}): DojoInfo {
  return {
    logo: "logo.png",
    name: "logo",
    id: "my-dojo",
    ...partialInfo,
  };
}

function createExams() {
  return [
    createExam({ labelKey: "chooser.button.kyu5" }),
    createExam({ labelKey: "chooser.button.kyu4" }),
    createExam({ labelKey: "chooser.button.kyu3" }),
  ];
}

function createDojoDetails(partialDetails: Partial<DojoDetails> = {}): DojoDetails {
  return {
    additionalText: "dojo.darmstadt.additionalText",
    sourceLink: "https://example.com/sourceLink",
    exams: createExams(),
    ...partialDetails,
  };
}

function createResolvedDojo(partialDojo: Partial<ResolvedDojo> = {}) {
  const dojo: ResolvedDojo = {
    info: createDojoInfo(),
    details: createDojoDetails(),
    ...partialDojo,
  };
  return dojo;
}

describe("Chooser.test.tsx", async () => {
  it("renders all exams", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [
          createExam({ labelKey: "chooser.button.kyu5" }),
          createExam({ labelKey: "chooser.button.kyu4" }),
          createExam({ labelKey: "chooser.button.kyu3" }),
        ],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);
    expect(screen.getByText("5th Kyu")).not.toBeNull();
    expect(screen.getByText("4th Kyu")).not.toBeNull();
    expect(screen.getByText("3rd Kyu")).not.toBeNull();
  });

  it("clicking an exam selects it", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [createExam({ labelKey: "chooser.button.kyu5" })],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);

    const { button, isSelected } = getCheckButton("5th Kyu");
    expect(isSelected()).toBe(false);
    await user.click(button);
    expect(isSelected()).toBe(true);
  });

  it("clicking an selected exam deselects it", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [createExam({ labelKey: "chooser.button.kyu5" })],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);
    const { button, isSelected } = getCheckButton("5th Kyu");
    expect(isSelected()).toBe(false);
    await user.click(button);
    await user.click(button);
    expect(isSelected()).toBe(false);
  });

  it("clicking an exam shows the techniques of that exam", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [
          createExam({
            labelKey: "chooser.button.kyu5",
            techniques: {
              "suwari waza": {
                "ai hanmi katate dori": {
                  ikkyo: { omote: {}, ura: {} },
                },
              },
            },
          }),
        ],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);
    await user.click(screen.getByText("5th Kyu"));

    expect(screen.getByText("suwari waza")).toBeInTheDocument();
    expect(screen.getByText("ai hanmi katate dori")).toBeInTheDocument();
    expect(screen.getByText("omote")).toBeInTheDocument();
    expect(screen.getByText("ura")).toBeInTheDocument();
  });

  it("does not show 'single-direction", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [
          createExam({
            labelKey: "chooser.button.kyu5",
            techniques: {
              "suwari waza": {
                "ai hanmi katate dori": {
                  "irimi nage": { "single-direction": {} },
                },
              },
            },
          }),
        ],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);
    await user.click(screen.getByText("5th Kyu"));
    expect(screen.queryByText("single-direction")).toBeNull();
  });

  it("orders executions", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [
          createExam({
            labelKey: "chooser.button.kyu5",
            techniques: {
              "hanmi handachi waza": {
                "ai hanmi katate dori": {
                  "irimi nage": { "single-direction": {} },
                },
              },
              "suwari waza": {
                "ai hanmi katate dori": {
                  "irimi nage": { "single-direction": {} },
                },
              },
            },
          }),
        ],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);
    await user.click(screen.getByText("5th Kyu"));
    expect(screen.queryAllByText(/suwari waza|hanmi handachi waza/).map((el) => el.textContent)).toEqual([
      "suwari waza",
      "hanmi handachi waza",
    ]);
  });

  it("only includes techniques of selected exams", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [
          createExam({
            labelKey: "chooser.button.kyu5",
            techniques: {
              "hanmi handachi waza": {
                "ai hanmi katate dori": {
                  "irimi nage": { "single-direction": {} },
                },
              },
              "suwari waza": {
                "ai hanmi katate dori": {
                  "irimi nage": { "single-direction": {} },
                },
              },
            },
          }),
        ],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);
    expect(screen.queryByText("suwari waza")).toBeNull();
  });

  it("persists the exam choice", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [
          createExam({ id: "kyu5", labelKey: "chooser.button.kyu5" }),
          createExam({ id: "kyu4", labelKey: "chooser.button.kyu4" }),
        ],
      }),
    });
    const { unmount } = render(() => <TechniqueChooser dojo={dojo} />);
    const { button, isSelected } = getCheckButton("5th Kyu");
    await user.click(button);
    expect(isSelected()).toBe(true);
    unmount();
    render(() => <TechniqueChooser dojo={dojo} />);
    await waitFor(() => {
      const { isSelected: isSelectedAfterReload } = getCheckButton("5th Kyu");
      expect(isSelectedAfterReload()).toBe(true);
    });
  });

  it("does not load exam choice for different dojo", async () => {
    function createTestDojo(id: string) {
      return createResolvedDojo({
        info: createDojoInfo({ id }),
        details: createDojoDetails({
          exams: [
            createExam({ id: "kyu5", labelKey: "chooser.button.kyu5" }),
            createExam({ id: "kyu4", labelKey: "chooser.button.kyu4" }),
          ],
        }),
      });
    }

    const dojo1 = createTestDojo("dojo1");
    const { unmount } = render(() => <TechniqueChooser dojo={dojo1} />);
    const { button, isSelected } = getCheckButton("5th Kyu");
    await user.click(button);
    expect(isSelected()).toBe(true);
    unmount();

    const dojo2 = createTestDojo("dojo2");

    renderSolid(() => <TechniqueChooser dojo={dojo2} />);
    await delay(100);
    const { isSelected: isSelectedAfterReload } = getCheckButton("5th Kyu");
    expect(isSelectedAfterReload()).toBe(false);
  });

  it("renders filters", () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [createExam({ id: "kyu5", labelKey: "chooser.button.kyu5" })],
      }),
    });
    renderSolid(() => <TechniqueChooser dojo={dojo} />);

    expect(screen.getByText("Knee friendly")).not.toBeNull();
  });

  it("clicking the knee-friendly filter hides suwari-waza and hanmi-handachi techniques", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [
          createExam({
            id: "kyu5",
            labelKey: "chooser.button.kyu5",
            techniques: {
              "suwari waza": { "ai hanmi katate dori": { ikkyo: { omote: {} } } },
              "hanmi handachi waza": { "ai hanmi katate dori": { ikkyo: { omote: {} } } },
              "tachi waza": { "ai hanmi katate dori": { ikkyo: { omote: {} } } },
            },
          }),
        ],
      }),
    });
    renderSolid(() => <TechniqueChooser dojo={dojo} />);
    await user.click(screen.getByText("5th Kyu"));
    expect(screen.getByText("suwari waza")).not.toBeNull();
    expect(screen.getByText("hanmi handachi waza")).not.toBeNull();
    expect(screen.getByText("tachi waza")).not.toBeNull();
    await user.click(screen.getByText("Knee friendly"));

    expect(screen.queryByText("suwari waza")).toBeNull();
    expect(screen.queryByText("hanmi handachi waza")).toBeNull();
    expect(screen.getByText("tachi waza")).not.toBeNull();
  });
});
