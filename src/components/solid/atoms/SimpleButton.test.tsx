import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { showMe } from "@/debug/showMe.ts";

describe("SimpleButton", () => {
  it("...", () => {
    renderSolid(() => <SimpleButton label={"Print"} />);
    showMe();
  });
});
