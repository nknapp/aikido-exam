import { cleanup, render, screen } from "solid-testing-library";
import { TechniqueChooser } from "./TechniqueChooser.tsx";
import type { DojoDetails, DojoInfo, ResolvedDojo } from "$core/model/Dojo.ts";
import { createExam } from "$core/model/Exam.test-helper.ts";
import { user } from "$core/test-utils/user.ts";
import { getCheckButton } from "@/components/solid/CheckButton.test-helper.ts";
import { showMe } from "@/debug/showMe.ts";

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

    const { button, checkbox } = getCheckButton("5th Kyu");
    expect(checkbox).not.toBeChecked();
    await user.click(button);
    expect(checkbox).toBeChecked();
  });

  it("clicking an selected exam deselects it", async () => {
    const dojo = createResolvedDojo({
      details: createDojoDetails({
        exams: [createExam({ labelKey: "chooser.button.kyu5" })],
      }),
    });
    render(() => <TechniqueChooser dojo={dojo} />);
    const { button, checkbox } = getCheckButton("5th Kyu");
    expect(checkbox).not.toBeChecked();
    await user.click(button);
    await user.click(button);
    expect(checkbox).not.toBeChecked();
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
    showMe();
    expect(screen.queryAllByText(/suwari waza|hanmi handachi waza/).map((el) => el.textContent)).toEqual([
      "suwari waza",
      "hanmi handachi waza",
    ]);
  });
  it("only shows selected exams", async () => {
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
});
