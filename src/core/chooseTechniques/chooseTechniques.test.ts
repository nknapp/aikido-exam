import { chooseTechniques } from "$core/chooseTechniques/chooseTechniques.ts";
import { createExam } from "$core/model/Exam.test-helper.ts";
import { buildExamTable } from "$core/buildExamTable";
import { createTechnique, tqs } from "$core/model/Technique.test-helper.ts";
import { assertMock } from "$core/test-utils/assertMock.ts";
import { shuffleList } from "$core/utils/shuffleList.ts";
import type { Technique } from "$core/model";

const SUWARI_IKKYO_OMOTE = createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote");
const SUWARI_IKKYO_URA = createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura");
const HANMI_IKKYO_OMOTE = createTechnique("hanmi handachi waza", "ai hanmi katate dori", "ikkyo", "omote");
const HANMI_IKKYO_URA = createTechnique("hanmi handachi waza", "ai hanmi katate dori", "ikkyo", "ura");
const TACHI_IKKYO_OMOTE = createTechnique("tachi waza", "ai hanmi katate dori", "ikkyo", "omote");
const TACHI_IKKYO_URA = createTechnique("tachi waza", "ai hanmi katate dori", "ikkyo", "ura");
const exams = [
  createExam({
    id: "kyu5",
    techniques: buildExamTable([SUWARI_IKKYO_OMOTE, SUWARI_IKKYO_URA]),
  }),
  createExam({
    id: "kyu4",
    techniques: buildExamTable([HANMI_IKKYO_OMOTE, HANMI_IKKYO_URA]),
  }),
  createExam({
    id: "kyu3",
    techniques: buildExamTable([TACHI_IKKYO_OMOTE, TACHI_IKKYO_URA]),
  }),
];

describe("chooseTechniques", () => {
  beforeEach(() => {
    assertMock(shuffleList);
    shuffleList.mockImplementation((list: Technique[]) => {
      return list.toReversed();
    });
  });

  it("returns an empty array if called without any option", () => {
    expect(chooseTechniques(exams, {})).toHaveLength(0);
  });

  it("returns all techniques from the selected exams", () => {
    expect(tqs(chooseTechniques(exams, { selectedExams: new Set(["kyu5", "kyu4"]) }))).toEqual(
      tqs([SUWARI_IKKYO_OMOTE, SUWARI_IKKYO_URA, HANMI_IKKYO_OMOTE, HANMI_IKKYO_URA]),
    );
  });

  it("applies filters", () => {
    expect(
      tqs(
        chooseTechniques(exams, {
          selectedExams: new Set(["kyu5", "kyu4", "kyu3"]),
          filters: {
            kneeFriendly: true,
          },
        }),
      ),
    ).toEqual(tqs([TACHI_IKKYO_OMOTE, TACHI_IKKYO_URA]));
  });

  it("applies randomization", () => {
    expect(
      tqs(
        chooseTechniques(exams, {
          selectedExams: new Set(["kyu5", "kyu4", "kyu3"]),
          order: {
            randomize: true,
          },
        }),
      ),
    ).toEqual(
      tqs([
        SUWARI_IKKYO_OMOTE,
        SUWARI_IKKYO_URA,
        HANMI_IKKYO_OMOTE,
        HANMI_IKKYO_URA,
        TACHI_IKKYO_OMOTE,
        TACHI_IKKYO_URA,
      ]).toReversed(),
    );
  });

  it("applies cutoff after randomization", () => {
    expect(
      tqs(
        chooseTechniques(exams, {
          selectedExams: new Set(["kyu5", "kyu4", "kyu3"]),
          order: {
            randomize: true,
            includePercent: 50,
          },
        }),
      ),
    ).toEqual(tqs([TACHI_IKKYO_URA, TACHI_IKKYO_OMOTE, HANMI_IKKYO_URA]));
  });

  it("groups techniques by execution", () => {
    const exams = [
      createExam({
        id: "kyu5",
        techniques: buildExamTable([SUWARI_IKKYO_OMOTE, HANMI_IKKYO_OMOTE]),
      }),
      createExam({
        id: "kyu4",
        techniques: buildExamTable([SUWARI_IKKYO_URA, HANMI_IKKYO_URA]),
      }),
    ];
    expect(
      tqs(
        chooseTechniques(exams, {
          selectedExams: new Set(["kyu5", "kyu4"]),
        }),
      ),
    ).toEqual(tqs([SUWARI_IKKYO_OMOTE, SUWARI_IKKYO_URA, HANMI_IKKYO_OMOTE, HANMI_IKKYO_URA]));
  });

  it("groups techniques by execution when randomized", () => {
    const exams = [
      createExam({
        id: "kyu5",
        techniques: buildExamTable([SUWARI_IKKYO_OMOTE, HANMI_IKKYO_OMOTE]),
      }),
      createExam({
        id: "kyu4",
        techniques: buildExamTable([SUWARI_IKKYO_URA, HANMI_IKKYO_URA]),
      }),
    ];
    expect(
      tqs(
        chooseTechniques(exams, {
          selectedExams: new Set(["kyu5", "kyu4"]),
          order: {
            randomize: true,
            includePercent: 100,
            orderExecutions: true,
          },
        }),
      ),
    ).toEqual(tqs([SUWARI_IKKYO_URA, SUWARI_IKKYO_OMOTE, HANMI_IKKYO_URA, HANMI_IKKYO_OMOTE]));
  });
});
