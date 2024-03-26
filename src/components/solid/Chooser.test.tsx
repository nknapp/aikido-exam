import { cleanup, render, screen } from "solid-testing-library";
import { ExamChooser } from "@/components/solid/ExamChooser.tsx";
import type { DojoDetails } from "$core/model/Dojo.ts";
import { createExam } from "$core/model/Exam.test-helper.ts";

afterEach(cleanup);

describe("Chooser.test.tsx", async () => {
  it("renders all choices", () => {
    const dojo: DojoDetails = {
      exams: {
        kyu5: createExam({ labelKey: "chooser.button.kyu5" }),
        kyu4: createExam({ labelKey: "chooser.button.kyu4" }),
        kyu3: createExam({ labelKey: "chooser.button.kyu3" }),
      },
    };
    render(() => <ExamChooser dojo={dojo} />);
    expect(screen.getByText("chooser.button.kyu5")).not.toBeNull();
    expect(screen.getByText("chooser.button.kyu4")).not.toBeNull();
    expect(screen.getByText("chooser.button.kyu3")).not.toBeNull();
  });
});
