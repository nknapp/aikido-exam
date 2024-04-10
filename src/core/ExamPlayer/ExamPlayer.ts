import type { Technique } from "$core/model";
import { SpeechPackPlayer } from "$core/SpeechPackPlayer";

interface ExamPlayerOptions {
  onStart?(): void;
  onStop?(): void;
  onUpdateNextTechnique?(technique: Technique | null): void;
  onUpdateLastTechnique?(technique: Technique | null): void;
}

export class ExamPlayer {
  private readonly techniques: Array<Technique>;
  private readonly options: ExamPlayerOptions;
  private alive: boolean = true;
  private speechPackPlayer = new SpeechPackPlayer();
  private nextIndex: number;
  private lastIndex: number;

  constructor(techniques: Technique[], options: ExamPlayerOptions = {}) {
    this.techniques = techniques;
    this.options = options;
    this.nextIndex = 0;
    this.lastIndex = -1;
    this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex]);
  }

  async playNext() {
    this.options.onStart?.();
    this.lastIndex = this.nextIndex;
    this.options.onUpdateLastTechnique?.(this.techniques[this.lastIndex]);
    await this.speechPackPlayer.playTechnique(this.techniques[this.nextIndex]);
    this.options.onStop?.();
    this.nextIndex++;
    this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex]);
  }

  async stop() {
    await this.speechPackPlayer.stop();
  }

  async skipNext() {
    this.nextIndex++;
    this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex]);
  }

  async skipPrevious() {
    this.nextIndex--;
    this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex]);
  }

  destroy() {
    this.alive = false;
  }
}
