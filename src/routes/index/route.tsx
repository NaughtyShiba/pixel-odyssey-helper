import { CraftRequirementsTable } from "@/features/craft/components/craft-requirements-table";
import { TotalItemsRequirementsTable } from "@/features/craft/components/total-items-requirements-table";
import { CraftContextProvider } from "@/features/craft/context";
import { ItemSelectionProvider } from "@/features/items/context";

export default function CraftInfoRoute() {
  return (
    <ItemSelectionProvider>
      <CraftContextProvider>
        <CraftRequirementsTable />
        <TotalItemsRequirementsTable />
      </CraftContextProvider>
    </ItemSelectionProvider>
  );
}
