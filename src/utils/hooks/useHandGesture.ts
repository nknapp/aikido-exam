import { useEffect, useRef } from "react";
import { HandDetector } from "../handDetector/handDetector";

interface UseHandGestureArgs {
  active: boolean;
  playing: boolean;
  onPointGesture: () => void;
}

export function useHandGesture({ playing, active, onPointGesture }: UseHandGestureArgs): void {
  const handDetectorRef = useRef<HandDetector | null>(null);
  useEffect(() => {
    if (active) {
      const handDetector = new HandDetector();
      handDetectorRef.current = handDetector;
      return () => {
        handDetectorRef.current = null;
        handDetector.shutdown();
      };
    }
  }, [active]);

  useEffect(() => {
    const handDetector = handDetectorRef.current;
    if (handDetector != null) {
      if (!playing && active) {
        handDetector.waitForGesture("point").then(onPointGesture);
      }
    }
  }, [playing, active, onPointGesture]);
}
