import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { screen } from "solid-testing-library";

describe("SimpleButton", () => {
  it("renders the label", () => {
    renderSolid(() => <SimpleButton label={"Print"} />);
    expect(screen.getByText("Print")).toBeInTheDocument();
  });

  it("renders label only for screen-readers, if hideLabel is set to true", () => {
    renderSolid(() => <SimpleButton label={"Print"} hideLabel={true} />);
    expect(screen.getByText("Print")).toHaveClass("sr-only");
  });

  it("renders children ", () => {
    renderSolid(() => <SimpleButton label={"Print"}>abc</SimpleButton>);
    expect(screen.getByText("abc")).toBeInTheDocument();
  });
});
