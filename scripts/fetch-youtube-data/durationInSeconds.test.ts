import { describe, expect, it } from "vitest";
import { durationInSeconds } from "./durationInSeconds";

describe("parseDuration", () => {
  it.each([
    { duration: "PT24S", seconds: 24 },
    { duration: "PT70S", seconds: 70 },
    { duration: "PT1M10S", seconds: 70 },
  ])("$duration is  $seconds seconds long", ({ duration, seconds }) => {
    expect(durationInSeconds(duration)).toEqual(seconds);
  });
});
