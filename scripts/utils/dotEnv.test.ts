import { describe, expect, it } from "vitest";
import { parseDotEnv } from "./dotEnv";

describe("parseDotEnv", () => {
  it("empty string resolves to empty object", () => {
    expect(parseDotEnv("")).toEqual({});
  });

  it("single line resolves to object with one entry", () => {
    expect(parseDotEnv("KEY=value")).toEqual({ KEY: "value" });
  });

  it("strips newlines from start and end", () => {
    expect(parseDotEnv(" \n KEY=value \n\t ")).toEqual({ KEY: "value" });
  });

  it("error if a line is does not contain an equal sign", () => {
    expect(() => parseDotEnv("KEYvalue")).toThrow(new Error("Syntax error in line 0"));
  });

  it("multiple lines", () => {
    const input = `
KEY1=value1
KEY2=value2
        `;
    expect(parseDotEnv(input)).toEqual({ KEY1: "value1", KEY2: "value2" });
  });

  it("indented", () => {
    const input = `
        KEY1=value1
        KEY2=value2
        `;
    expect(parseDotEnv(input)).toEqual({ KEY1: "value1", KEY2: "value2" });
  });

  it("line number in errors", () => {
    expect(() => parseDotEnv(" \n KEYvalue \n\t ")).toThrow(new Error("Syntax error in line 1"));
  });

  it("removes comments", () => {
    const input = `
        KEY1=value1 # comment
        KEY2=value2
        `;
    expect(parseDotEnv(input)).toEqual({ KEY1: "value1", KEY2: "value2" });
  });
});
