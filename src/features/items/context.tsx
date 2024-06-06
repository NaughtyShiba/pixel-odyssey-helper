import { ItemName } from "@/data/items.mjs";
import { Maybe } from "@/lib/fn/maybe.mjs";
import { createContext, useContext, useState } from "react";
import { ItemSelector } from "./components/item-selector";

type ItemSelectionContextProviderProps = {
  children: React.ReactNode;
};

const ItemSelectionContext = createContext<{ selectedItem: Maybe<ItemName> }>({
  selectedItem: null,
});

export function ItemSelectionProvider({
  children,
}: ItemSelectionContextProviderProps) {
  const [selectedItem, selectItem] = useState<Maybe<ItemName>>(null);

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
