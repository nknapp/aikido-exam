export const executions = [
  "suwari waza",
  "hanmi handachi waza",
  "tachi waza",
  "tanto dori",
  "jo dori",
  "jo nage",
  "tachi dori",
] as const;

export type Execution = (typeof executions)[number];
