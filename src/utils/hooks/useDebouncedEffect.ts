import { useEffect } from "react";

export function useDebouncedEffect(fn: () => void, waitMillis: number): void {
  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        fn();
      }
    }, waitMillis);
    return () => {
      mounted = false;
    };
  }, [fn, waitMillis]);
}
