import {
  Attack,
  Defence,
  Direction,
  Execution,
} from "../exam-tables/audio-files";

export type Definition = [Execution, Attack, Defence, Direction?];
export class Technique {
  definition: [Execution, Attack, Defence, Direction?];
  constructor(definition: [Execution, Attack, Defence, Direction?]) {
    this.definition = definition;
  }
}
