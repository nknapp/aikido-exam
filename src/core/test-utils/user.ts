import { userEvent } from "@testing-library/user-event";
import type { UserEvent } from "@testing-library/user-event";

export let user: UserEvent = null!;

beforeEach(() => {
  user = userEvent.setup();
});
