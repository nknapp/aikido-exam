import { Attack } from "./Attack";
import { Execution } from "./Execution";
import { Defence } from "./Defence";
import { Direction, SINGLE_DIRECTION } from "./Direction";

export type SpeechFile = Exclude<Execution | Attack | Defence | Direction, typeof SINGLE_DIRECTION>;
export type SpeechPack = Record<SpeechFile, string>;
