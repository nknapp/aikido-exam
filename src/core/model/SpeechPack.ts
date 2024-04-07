import type { Attack, Execution, Defence, Direction, SINGLE_DIRECTION } from "$core/model/index.ts";

export type SpeechFile = Exclude<Execution | Attack | Defence | Direction, typeof SINGLE_DIRECTION>;
export type SpeechPack = Record<SpeechFile, string | URL>;
