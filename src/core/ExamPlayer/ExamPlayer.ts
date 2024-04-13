import type { Technique } from "$core/model";
import { SpeechPackPlayer } from "$core/SpeechPackPlayer";

interface ExamPlayerOptions {
  onStart?(): void;
  onStop?(): void;
  onAutoPlay?(enabled: boolean): void;
  // It seems reasonable to outsource the waiting part to
  // the calling party, because it can then implement
  // visual feedback that is synchronized with the waiting period.
  waitSeconds?(seconds: number): Promise<void>;

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
  private autoPlayEnabled: boolean;

  constructor(techniques: Technique[], options: ExamPlayerOptions = {}) {
    this.techniques = techniques;
    this.options = options;
    this.nextIndex = 0;
    this.lastIndex = -1;
    this.autoPlayEnabled = false;
    this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex]);
  }

  async play() {
    await this.playNext();
    if (this.autoPlayEnabled && this.techniques[this.nextIndex] != null) {
      await this.options.waitSeconds?.(20);
      await this.play();
    }
  }

  private async playNext() {
    this.options.onStart?.();
    try {
      this.updateLastFromNext();
      const nextTechnique = this.getNextTechnique();
      if (nextTechnique == null) return;
      await this.speechPackPlayer.playTechnique(nextTechnique);
    } finally {
      this.options.onStop?.();
    }
    await this.skipNext();
  }

  private updateLastFromNext() {
    this.options.onUpdateLastTechnique?.(this.getNextTechnique());
    this.lastIndex = this.nextIndex;
  }

  private getNextTechnique(): Technique | null {
    return this.techniques[this.nextIndex];
  }

  async stop() {
    await this.speechPackPlayer.stop();
  }

  setAutoPlay(enabled: boolean) {
    this.autoPlayEnabled = enabled;
    this.options.onAutoPlay?.(enabled);
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
