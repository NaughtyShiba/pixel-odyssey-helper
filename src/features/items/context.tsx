import { createContext, useContext, useState } from "react";
import { ItemName } from "@/data/items.mjs";
import { ItemSelector } from "./components/item-selector";

type ItemSelectionContextProviderProps = {
  children: React.ReactNode;
};

const ItemSelectionContext = createContext<{ selectedItem: ItemName | null }>({
  selectedItem: null,
});

export function ItemSelectionProvider({
  children,
}: ItemSelectionContextProviderProps) {
  const [selectedItem, selectItem] = useState<ItemName | null>(null);

  return (
    <ItemSelectionContext.Provider value={{ selectedItem }}>
      <ItemSelector onChange={selectItem} className="flex-basis-1/2 w-1/2" />
      {children}
    </ItemSelectionContext.Provider>
  );
}

export const useItemSelection = () => {
  const context = useContext(ItemSelectionContext);

  if (context === undefined)
    throw new Error(
      "useItemSelection must be used within a ItemSelectionContext",
    );

  return context;
};
