export const executions = [
  "suwari waza",
  "hanmi handachi waza",
  "tachi waza",
  "tanto dori",
  "jo nage",
  "jo dori",
  "tachi dori",
] as const;

export type Execution = (typeof executions)[number];
