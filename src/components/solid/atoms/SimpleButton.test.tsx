import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { screen } from "solid-testing-library";

describe("SimpleButton", () => {
  it("...", () => {
    renderSolid(() => <SimpleButton label={"Print"} />);
    expect(screen.getByText("Print")).toBeInTheDocument();
  });
});
