import { useEffect, useState } from "react";

export function useCountDown(run: boolean, startFrom: null | number, waitMillis: number, onDone: () => void) {
  const [counter, setCounter] = useState<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    if (run && startFrom != null && startFrom > 0) {
      let myCounter = startFrom;
      setCounter(startFrom);
      setProgressPercent(0);
      const interval = setInterval(() => {
        myCounter--;
        setProgressPercent(Math.ceil(((startFrom - myCounter) / startFrom) * 100));
        setCounter(myCounter);
        if (myCounter <= 0) {
          clearInterval(interval);
          onDone();
        }
      }, waitMillis);
      return () => {
        clearInterval(interval);
      };
    }
  }, [run, startFrom, onDone, waitMillis]);

  return {
    counter,
    progressPercent,
  };
}
