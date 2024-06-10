import { assert } from "@/lib/assert/assert.mjs";
import { ReactNode, createContext, useContext, useMemo } from "react";

export type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
};

const initialState: ThemeProviderState = {
  theme: "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}
export function ThemeProvider({
  children,
  theme = "dark",
}: ThemeProviderProps) {
  return (
    <ThemeProviderContext.Provider value={useMemo(() => ({ theme }), [theme])}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  assert(context !== undefined, "useTheme must be used within a ThemeProvider");

  return context.theme;
};
