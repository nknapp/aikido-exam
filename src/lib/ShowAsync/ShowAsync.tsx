import { ReactNode, useEffect, useState } from "react";

interface ShowAsyncProps<T> {
  fallback: ReactNode;
  loader: () => Promise<T>;
  children: (value: T) => ReactNode;
}

export function ShowAsync<T>({ fallback, loader, children }: ShowAsyncProps<T>): ReactNode {
  const [value, setValue] = useState<T | null>(null);
  useEffect(() => {
    loader().then((resolvedValue) => {
      setValue(resolvedValue);
    });
  }, [loader]);
  if (value == null) {
    return fallback;
  }
  return children(value);
}
