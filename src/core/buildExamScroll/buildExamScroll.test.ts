import { buildExamScroll, type ExamScrollEntry } from "$core/buildExamScroll/buildExamScroll.ts";
import { createTechnique } from "$core/model/Technique.test-helper.ts";
import { relevantTechniqueProperties } from "$core/relevantTechniqueParts/relevantTechniqueProperties.ts";
import { buildTechniqueId } from "$core/model";

describe("buildExamScroll", () => {
  it("returns empty scroll for empty array", () => {
    expect([...buildExamScroll([])]).toHaveLength(0);
  });

  it("returns field values of each technique", () => {
    expect([
      ...buildExamScroll([
        createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"),
        createTechnique("hanmi handachi waza", "ai hanmi katate dori", "nikyo", "ura"),
      ]),
    ]).toEqual([
      {
        id: expect.any(String),
        execution: { relevant: true, value: "tachi waza" },
        attack: { relevant: true, value: "chudan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
      {
        id: expect.any(String),
        execution: { relevant: true, value: "hanmi handachi waza" },
        attack: { relevant: true, value: "ai hanmi katate dori" },
        defence: { relevant: true, value: "nikyo" },
        direction: { relevant: true, value: "ura" },
      },
    ] satisfies ExamScrollEntry[]);
  });

  it("uses all props for first technique", () => {
    expect([...buildExamScroll([createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote")])]).toEqual([
      {
        id: expect.any(String),
        execution: { relevant: true, value: "tachi waza" },
        attack: { relevant: true, value: "chudan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
    ] satisfies ExamScrollEntry[]);

    expect(relevantTechniqueProperties(createTechnique("suwari waza", "kata dori", "ikkyo", "ura"), undefined)).toEqual(
      ["execution", "attack", "defence", "direction"],
    );
  });

  it("uses only direction if everything else is equal", () => {
    expect([
      ...buildExamScroll([
        createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"),
        createTechnique("tachi waza", "chudan tsuki", "ikkyo", "ura"),
      ]),
    ]).toEqual([
      {
        id: expect.any(String),
        execution: { relevant: true, value: "tachi waza" },
        attack: { relevant: true, value: "chudan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
      {
        id: expect.any(String),
        execution: { relevant: false, value: "tachi waza" },
        attack: { relevant: false, value: "chudan tsuki" },
        defence: { relevant: false, value: "ikkyo" },
        direction: { relevant: true, value: "ura" },
      },
    ] satisfies ExamScrollEntry[]);
  });

  it("uses direction and defence, if execution and attack is equal", () => {
    expect([
      ...buildExamScroll([
        createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"),
        createTechnique("tachi waza", "chudan tsuki", "nikyo", "omote"),
      ]),
    ]).toEqual([
      {
        id: expect.any(String),
        execution: { relevant: true, value: "tachi waza" },
        attack: { relevant: true, value: "chudan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
      {
        id: expect.any(String),
        execution: { relevant: false, value: "tachi waza" },
        attack: { relevant: false, value: "chudan tsuki" },
        defence: { relevant: true, value: "nikyo" },
        direction: { relevant: true, value: "omote" },
      },
    ] satisfies ExamScrollEntry[]);
  });

  it("uses attack, direction and defence, if execution is equal", () => {
    expect([
      ...buildExamScroll([
        createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"),
        createTechnique("tachi waza", "jodan tsuki", "ikkyo", "omote"),
      ]),
    ]).toEqual([
      {
        id: expect.any(String),
        execution: { relevant: true, value: "tachi waza" },
        attack: { relevant: true, value: "chudan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
      {
        id: expect.any(String),
        execution: { relevant: false, value: "tachi waza" },
        attack: { relevant: true, value: "jodan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
    ] satisfies ExamScrollEntry[]);
  });

  it("uses execution, attack, direction and defence, if execution is different", () => {
    expect([
      ...buildExamScroll([
        createTechnique("suwari waza", "chudan tsuki", "ikkyo", "omote"),
        createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"),
      ]),
    ]).toEqual([
      {
        id: expect.any(String),
        execution: { relevant: true, value: "suwari waza" },
        attack: { relevant: true, value: "chudan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
      {
        id: expect.any(String),
        execution: { relevant: true, value: "tachi waza" },
        attack: { relevant: true, value: "chudan tsuki" },
        defence: { relevant: true, value: "ikkyo" },
        direction: { relevant: true, value: "omote" },
      },
    ] satisfies ExamScrollEntry[]);
  });

  it("omits the value for 'single-direction'", () => {
    expect([...buildExamScroll([createTechnique("suwari waza", "chudan tsuki", "ikkyo", "single-direction")])]).toEqual(
      [
        {
          id: expect.any(String),
          execution: { relevant: true, value: "suwari waza" },
          attack: { relevant: true, value: "chudan tsuki" },
          defence: { relevant: true, value: "ikkyo" },
          direction: { relevant: false, value: "single-direction" },
        },
      ] satisfies ExamScrollEntry[],
    );
  });

  it("adds the id to each technique", () => {
    const technique = createTechnique("suwari waza", "chudan tsuki", "ikkyo", "single-direction");
    const examScrollEntry = Array.from(buildExamScroll([technique]))[0];
    expect(examScrollEntry.id).toEqual(buildTechniqueId(technique));
  });
});
