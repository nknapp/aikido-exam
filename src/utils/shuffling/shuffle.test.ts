import { shuffleAndSelect } from "./shuffle";
import shuffle from "lodash/shuffle";
import { Technique } from "../../model/Technique";
import { TechniqueList } from "../../model/TechniqueList";

vi.mock("lodash/shuffle", () => {
  return {
    __esModule: true,
    default: vi.fn(),
  };
});

beforeEach(() => {
  if (!vi.isMockFunction(shuffle)) {
    throw new Error("shuffle should be a mock");
  }
  shuffle.mockImplementation((techniques) => techniques);
});

describe("shuffle", () => {
  const techniques: TechniqueList = new TechniqueList([
    new Technique(["tachi waza", "kata dori", "shiho nage", "ura"]),
    new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"]),
    new Technique(["tachi waza", "kata dori", "irimi nage", "ura"]),
    new Technique(["suwari waza", "katate ryote dori", "shiho nage", "ura"]),
    new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"]),
    new Technique(["tachi waza", "kata dori", "shiho nage", "omote"]),
  ]);

  it("shuffles and regroups techniques", () => {
    expect(shuffleAndSelect(techniques, { coverage: 1 })).toEqual(
      new TechniqueList([
        new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"]),
        new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"]),
        new Technique(["suwari waza", "katate ryote dori", "shiho nage", "ura"]),
        new Technique(["tachi waza", "kata dori", "shiho nage", "ura"]),
        new Technique(["tachi waza", "kata dori", "shiho nage", "omote"]),
        new Technique(["tachi waza", "kata dori", "irimi nage", "ura"]),
      ]),
    );
  });

  it("only returns the requested coverage of techniques", () => {
    expect(shuffleAndSelect(techniques, { coverage: 0.8 })).toEqual(
      new TechniqueList([
        new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"]),
        new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"]),
        new Technique(["suwari waza", "katate ryote dori", "shiho nage", "ura"]),
        new Technique(["tachi waza", "kata dori", "shiho nage", "ura"]),
        new Technique(["tachi waza", "kata dori", "irimi nage", "ura"]),
      ]),
    );
  });
});
