import { shuffleTechniques } from "./shuffleTechniques";
import { shuffleList } from "$core/shuffleTechniques/shuffleList";
import { createTechnique } from "$core/model/Technique.test-helper";

vi.mock("./shuffleList", () => ({
  shuffleList: vi.fn(),
}));

beforeEach(() => {
  if (!vi.isMockFunction(shuffleList)) {
    throw new Error("shuffle should be a mock");
  }
  shuffleList.mockImplementation((techniques) => techniques);
});

describe("shuffle", () => {
  const techniques = [
    createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
    createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
    createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
    createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
    createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
    createTechnique("tachi waza", "kata dori", "shiho nage", "omote"),
  ];

  it("shuffles and regroups techniques", () => {
    expect(shuffleTechniques(techniques, { coverage: 1 })).toEqual([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
      createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
      createTechnique("tachi waza", "kata dori", "shiho nage", "omote"),
      createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
    ]);
  });

  it("only returns the requested coverage of techniques", () => {
    expect(shuffleTechniques(techniques, { coverage: 0.8 })).toEqual([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
      createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
      createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
    ]);
  });
});
