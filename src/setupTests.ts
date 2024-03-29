import "@testing-library/jest-dom";
import { customMatchers } from "$core/test-utils/matchers";
import { setupMockApi } from "$core/test-utils/mock-api";

vi.mock("scripts/config");
vi.mock("$core/utils/logger");
vi.mock("$core/utils/shuffleList");
vi.mock("@/i18n/index");

beforeEach(() => {
  vi.clearAllMocks();
});

setupMockApi();
expect.extend(customMatchers);
