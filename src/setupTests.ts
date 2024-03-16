// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "$core/test-utils/mock-api";
import { customMatchers } from "$core/test-utils/matchers";
import { setupMockApi } from "$core/test-utils/mock-api.ts";

vi.mock("scripts/config");
vi.mock("@/core/player/AudioPlayer");

setupMockApi();
expect.extend(customMatchers);
