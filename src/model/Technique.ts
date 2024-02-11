import { Metadata } from "src/exam-tables/baseTypes";
import { Attack, Defence, Direction, Execution } from "../exam-tables/audio-files";

export type Definition = [Execution, Attack, Defence, Direction];
export class Technique {
  definition: [Execution, Attack, Defence, Direction];
  metadata: Metadata;
  constructor(definition: [Execution, Attack, Defence, Direction], metadata: Metadata) {
    this.definition = definition;
    this.metadata = metadata;
  }

  get execution(): Execution {
    return this.definition[0];
  }

  get attack(): Attack {
    return this.definition[1];
  }

  get defence(): Defence {
    return this.definition[2];
  }
  get direction(): Direction {
    return this.definition[3];
  }

  matches(execution: Execution, attack: Attack, defence?: Defence, direction?: Direction): boolean {
    return (
      execution === this.execution &&
      attack === this.attack &&
      (defence == null || defence === this.defence) &&
      (direction == null || direction === this.direction)
    );
  }

  withDirection(direction: Direction): Technique {
    return new Technique([this.execution, this.attack, this.defence, direction], this.metadata);
  }

  get [Symbol.toStringTag](): string {
    return this.definition.join(" ");
  }

  toJson(): unknown {
    return {
      definition: this.definition,
      metadata: this.metadata,
    };
  }

  static fromJson(json: unknown): Technique {
    const j = json as Technique;
    return new Technique(j.definition, j.metadata);
  }
}
