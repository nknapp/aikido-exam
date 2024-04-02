import "@testing-library/jest-dom";
import { customMatchers } from "$core/test-utils/matchers";
import { setupMockApi } from "$core/test-utils/mock-api";

vi.mock("scripts/config");
vi.mock("$core/utils/logger");
vi.mock("$core/utils/shuffleList");
vi.mock("@/i18n/index");
// This mock creates a version of the solid-js module in which
// the "onMount" constant can be mocked. This is only possible, because
// we create a new object here.
vi.mock("solid-js", async (importOriginal) => {
  return {
    ...((await importOriginal()) as Record<string, unknown>),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  sessionStorage.clear();
});

setupMockApi();
expect.extend(customMatchers);
