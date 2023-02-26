import { Attack, Defence, Direction, Execution } from "../exam-tables/audio-files";

export type Definition = [Execution, Attack, Defence, Direction?];
export class Technique {
  definition: [Execution, Attack, Defence, Direction?];
  constructor(definition: [Execution, Attack, Defence, Direction?]) {
    this.definition = definition;
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
  get direction(): Direction | null {
    return this.definition[3] ?? null;
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
    return new Technique([this.execution, this.attack, this.defence, direction]);
  }

  get [Symbol.toStringTag](): string {
    return this.definition.join(" ");
  }
}
