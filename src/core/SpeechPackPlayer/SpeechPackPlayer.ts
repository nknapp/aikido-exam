import { type BaseTechnique, type SpeechFile } from "$core/model";
import { relevantTechniqueParts } from "$core/relevantTechniqueParts";
import { playSpeechFile } from "$core/playSpeechFile";

export class SpeechPackPlayer {
  private abortController: AbortController;
  private lastTechnique: BaseTechnique | undefined = undefined;

  constructor() {
    this.abortController = new AbortController();
  }

  async playTechnique(technique: BaseTechnique) {
    await this.playFiles(relevantTechniqueParts(technique, this.lastTechnique));
    if (!this.abortController.signal.aborted) {
      this.lastTechnique = technique;
    }
  }

  async playFiles(audioFiles: SpeechFile[]): Promise<void> {
    this.abortController.abort();
    const abortController = new AbortController();
    this.abortController = abortController;
    for (const file of audioFiles) {
      if (abortController.signal.aborted) return;
      await playSpeechFile(file, abortController.signal);
    }
  }

  async stop() {
    this.abortController.abort();
  }
}
