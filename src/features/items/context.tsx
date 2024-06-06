import { ItemName } from "@/data/items.mjs";
import { Maybe } from "@/lib/fn/maybe.mjs";
import { createContext, useContext } from "react";
import { ItemSelector } from "./components/item-selector";
import { useSafeSearchParams } from "@/lib/use-search-params/hooks.mjs";
import { null_, string, union } from "valibot";

type ItemSelectionContextProviderProps = {
  children: React.ReactNode;
};

const ItemSelectionContext = createContext<{ selectedItem: Maybe<ItemName> }>({
  selectedItem: null,
});

export function ItemSelectionProvider({
  children,
}: ItemSelectionContextProviderProps) {
  const [selectedItem, setSelectedItem] = useSafeSearchParams({
    key: "selectedItem",
    defaultValue: null,
    validation: union([string(), null_()]),
  });

  return (
    <ItemSelectionContext.Provider value={{ selectedItem } as any}>
      <ItemSelector
        defaultValue={selectedItem as any}
        onChange={(selectedItem) => setSelectedItem(selectedItem)}
        className="flex-basis-1/2 w-1/2"
      />
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
