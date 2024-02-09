import { Label, load, ObjectDetection, Prediction, startVideo, stopVideo } from "handtrackjs";

export class HandDetector {
  private nextTimeout: ReturnType<typeof setTimeout> | null = null;
  private videoElement: HTMLVideoElement = document.createElement("video");
  private readonly startVideoPromise: Promise<void>;
  private readonly modelPromise: Promise<ObjectDetection>;
  private pendingPredictions: Promise<Prediction[]> = Promise.resolve([]);

  constructor() {
    this.videoElement.setAttribute("data-usage", "handTracker");
    document.body.append(this.videoElement);
    this.startVideoPromise = startVideo(this.videoElement).then((result) => {
      if (!this.startVideoPromise) {
        throw new Error(result.msg);
      }
    });
    this.modelPromise = load({ scoreThreshold: 0.6 });
  }

  async detect(gesture: Label): Promise<boolean> {
    const [, model] = await Promise.all([this.startVideoPromise, this.modelPromise]);
    this.pendingPredictions = model.detect(this.videoElement);
    const predictions = await this.pendingPredictions;
    return predictions.findIndex((prediction) => prediction.label === gesture) >= 0;
  }

  async waitForGesture(gesture: Label): Promise<void> {
    this.stop();
    return new Promise((resolve, reject) => {
      const handler = () => {
        this.detect(gesture)
          .then((found) => {
            if (found) {
              resolve();
            } else {
              setTimeout(handler, 10);
            }
          })
          .catch(reject);
      };
      this.nextTimeout = setTimeout(handler, 10);
    });
  }

  stop(): void {
    if (this.nextTimeout != null) {
      clearTimeout(this.nextTimeout);
      this.nextTimeout = null;
    }
  }

  shutdown(): void {
    this.stop();
    Promise.all([this.pendingPredictions, this.modelPromise]).then(([, model]) => {
      model.dispose();
    });
    this.startVideoPromise.then(() => stopVideo(this.videoElement));
    this.videoElement.remove();
  }
}
