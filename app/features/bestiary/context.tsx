import { assert } from "@/lib/assert/assert.mjs";
import { Maybe } from "@/lib/fn/maybe.mjs";
import { createContext, useContext } from "react";
import { EnemySelector } from "./components/enemy-selector";
import { EnemiesIDs } from "./enemies.mts";
import { useSafeSearchParams } from "@/lib/use-search-params/hooks.mjs";
import { null_, string, union } from "valibot";

type EnemySelectionContextProviderProps = {
  children: React.ReactNode;
};

const EnemySelectionContext = createContext<{
  selectedEnemy: Maybe<EnemiesIDs>;
}>({
  selectedEnemy: null,
});

export function EnemySelectionProvider({
  children,
}: EnemySelectionContextProviderProps) {
  const [selectedEnemy, selectEnemy] = useSafeSearchParams({
    key: "selectedEnemy",
    defaultValue: null,
    validation: union([string(), null_()]),
  });

  return (
    <EnemySelectionContext.Provider value={{ selectedEnemy }}>
      <EnemySelector onChange={selectEnemy} className="flex-basis-1/2 w-1/2" />
      {children}
    </EnemySelectionContext.Provider>
  );
}

export const useEnemySelection = () => {
  const context = useContext(EnemySelectionContext);

  assert(
    context !== undefined,
    "useEnemySelection must be used within a EnemySelectionContext",
  );

  return context;
};
