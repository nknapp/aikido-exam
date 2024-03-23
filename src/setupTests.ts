import "@testing-library/jest-dom";
import { customMatchers } from "$core/test-utils/matchers";
import { setupMockApi } from "$core/test-utils/mock-api";

vi.mock("scripts/config");
vi.mock("$core/utils/logger");

beforeEach(() => {
  vi.clearAllMocks();
});

setupMockApi();
expect.extend(customMatchers);
