import { useEffect } from "react";

export function useMediaSessionActionHandler(
  action: string,
  callback: () => void
): void {
  useEffect(() => {
    navigator.mediaSession.setActionHandler(action, callback);
    return () => navigator.mediaSession.setActionHandler(action, null);
  }, [action, callback]);
}
