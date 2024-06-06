import { items } from "@/data/items.mjs";
import { CraftRequirementsTable } from "@/features/craft/components/craft-requirements-table";
import { TotalItemsRequirementsTable } from "@/features/craft/components/total-items-requirements-table";
import { CraftContextProvider } from "@/features/craft/context";
import { useItemSelection } from "@/features/items/context";

export function CraftDetails() {
  const { selectedItem } = useItemSelection();
  const item = selectedItem ? items[selectedItem] : null;

  if (!item?.craft) return null;

  return (
    <>
      <h2 className="text-2xl">Crafting</h2>
      <CraftContextProvider>
        <CraftRequirementsTable />
        <TotalItemsRequirementsTable />
      </CraftContextProvider>
    </>
  );
}
