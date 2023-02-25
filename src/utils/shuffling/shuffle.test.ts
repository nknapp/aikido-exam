import { shuffleAndSelect } from "./shuffle";
import { Technique } from "../resolve-exam-tables";
import shuffle from "lodash/shuffle";

const mockShuffle = shuffle as jest.MockedFunction<typeof shuffle>;

jest.mock("lodash/shuffle", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

beforeEach(() => {
  mockShuffle.mockImplementation((queries) => queries);
});

describe("shuffle", () => {
  const queries: Technique[] = [
    ["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"],
    ["tachi waza", "kata dori", "shiho nage", "ura"],
    ["tachi waza", "kata dori", "irimi nage", "ura"],
    ["suwari waza", "katate ryote dori", "shiho nage", "ura"],
    ["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"],
    ["tachi waza", "kata dori", "shiho nage", "omote"],
  ];

  it("shuffles and regroups queries", () => {
    expect(shuffleAndSelect(queries, { coverage: 1 })).toEqual([
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"],
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"],
      ["suwari waza", "katate ryote dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "shiho nage", "omote"],
      ["tachi waza", "kata dori", "irimi nage", "ura"],
    ]);
  });

  it("only returns the requested coverage of queries", () => {
    expect(shuffleAndSelect(queries, { coverage: 0.8 })).toEqual([
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"],
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"],
      ["suwari waza", "katate ryote dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "irimi nage", "ura"],
    ]);
  });
});
