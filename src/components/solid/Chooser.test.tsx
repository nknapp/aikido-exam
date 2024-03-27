import { cleanup, render, screen } from "solid-testing-library";
import { ExamChooser } from "@/components/solid/ExamChooser.tsx";
import type { ResolvedDojo } from "$core/model/Dojo.ts";
import { createExam } from "$core/model/Exam.test-helper.ts";

afterEach(cleanup);

describe("Chooser.test.tsx", async () => {
  it("renders all choices", async () => {
    const dojo: ResolvedDojo = {
      info: {
        logo: "logo.png",
        name: "logo",
        id: "my-dojo",
      },
      details: {
        exams: {
          kyu5: createExam({ labelKey: "chooser.button.kyu5" }),
          kyu4: createExam({ labelKey: "chooser.button.kyu4" }),
          kyu3: createExam({ labelKey: "chooser.button.kyu3" }),
        },
      },
    };
    render(() => <ExamChooser dojo={dojo} />);
    expect(screen.getByText("5th Kyu")).not.toBeNull();
    expect(screen.getByText("4th Kyu")).not.toBeNull();
    expect(screen.getByText("3rd Kyu")).not.toBeNull();
  });
});
