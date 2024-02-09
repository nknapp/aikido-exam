declare module "handtrackjs" {
  export function load(params?: ModelParams): Promise<ObjectDetection>;

  export function startVideo(video: HTMLVideoElement): Promise<{
    status: boolean;
    msg: string;
  }>;

  export function stopVideo(video: HTMLVideoElement): Promise<void>;

  export interface ModelParams {
    flipHorizontal?: boolean; // flip e.g for video
    maxNumBoxes?: number; // maximum number of boxes to detect
    iouThreshold?: number; // ioU threshold for non-max suppression
    scoreThreshold?: number; // confidence threshold for predictions.
  }

  export type Label = "closed" | "open" | "point" | "face";

  export interface Prediction {
    class: number;
    label: Label;
    score: string;
    bbox: [number, number, number, number];
  }

  type MediaSource = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;

  export class ObjectDetection {
    load(): Promise<void>;

    detect(input: MediaSource): Promise<Prediction[]>;

    getFPS(): number;

    setModelParameters(params: ModelParams): void;

    getModelParameters(): ModelParams;

    renderPredictions(
      predictions: Prediction[],
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D,
      mediasource: HTMLMediaElement,
    ): void;

    dispose(): void;
  }
}
