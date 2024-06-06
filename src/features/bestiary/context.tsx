import { createContext, useContext, useState } from "react";
import { EnemySelector } from "./components/enemy-selector";
import { EnemiesIDs } from "./enemies.mts";

type EnemySelectionContextProviderProps = {
  children: React.ReactNode;
};

const EnemySelectionContext = createContext<{
  selectedEnemy: EnemiesIDs | null;
}>({
  selectedEnemy: null,
});

export function EnemySelectionProvider({
  children,
}: EnemySelectionContextProviderProps) {
  const [selectedEnemy, selectEnemy] = useState<EnemiesIDs | null>(null);

  return (
    <EnemySelectionContext.Provider value={{ selectedEnemy }}>
      <EnemySelector onChange={selectEnemy} className="flex-basis-1/2 w-1/2" />
      {children}
    </EnemySelectionContext.Provider>
  );
}

export const useEnemySelection = () => {
  const context = useContext(EnemySelectionContext);

  if (context === undefined)
    throw new Error(
      "useEnemySelection must be used within a EnemySelectionContext",
    );

  return context;
};
