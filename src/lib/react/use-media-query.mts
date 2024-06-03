import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const result = matchMedia(query);

  const subscribe = (callback: (e: MediaQueryListEvent) => void) => {
    result.addEventListener("change", callback);
    return () => result.removeEventListener("change", callback);
  };

  const getSnapshot = () => result.matches;

  return useSyncExternalStore(subscribe, getSnapshot);
}
