import { Temporal } from "@js-temporal/polyfill";

export function durationInSeconds(iso8601duration: string): number {
  return Temporal.Duration.from(iso8601duration).total({ unit: "seconds" });
}
