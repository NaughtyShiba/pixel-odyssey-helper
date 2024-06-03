import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const subscribe = (callback: (e: MediaQueryListEvent) => void) => {
    matchMedia(query).addEventListener("change", callback);
    return () => matchMedia(query).removeEventListener("change", callback);
  };

  const getSnapshot = () => matchMedia(query).matches;

  return useSyncExternalStore(subscribe, getSnapshot);
}
