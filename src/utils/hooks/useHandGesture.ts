import { useEffect, useRef, useState } from "react";
import type { HandDetector } from "../handDetector/handDetector";

interface UseHandGestureArgs {
  active: boolean;
  playing: boolean;
  onPointGesture: () => void;
}

export function useHandGesture({ playing, active, onPointGesture }: UseHandGestureArgs): void {
  const handDetectorRef = useRef<HandDetector | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (active) {
      setLoading(true);
      const detectorModule = import("../handDetector/handDetector").then((module) => {
        setLoading(false);
        return module;
      });
      const handDetectorPromise = detectorModule.then(({ HandDetector }) => {
        const handDetector = new HandDetector();
        handDetectorRef.current = handDetector;
        return handDetector;
      });

      return () => {
        handDetectorPromise.then((handDetector) => {
          handDetectorRef.current = null;
          handDetector.shutdown();
        });
      };
    }
  }, [active]);

  useEffect(() => {
    const handDetector = handDetectorRef.current;
    if (handDetector != null) {
      if (!playing && active && !loading) {
        handDetector.waitForGesture("point").then(onPointGesture);
      }
    }
  }, [playing, active, onPointGesture, loading]);
}
