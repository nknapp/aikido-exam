export const SINGLE_DIRECTION = "single-direction";

export const directions = ["omote", "ura"] as const;

export type Direction = (typeof directions)[number] | typeof SINGLE_DIRECTION;
