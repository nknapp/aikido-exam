import { useEffect, useRef } from "react";
import { createImpress } from "src/utils/impressed";

export const Impress: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const impressElement = canvas.current;
    if (impressElement != null) {
      createImpress(impressElement);
    }
  }, []);

  return <canvas height={80} ref={canvas}></canvas>;
};
