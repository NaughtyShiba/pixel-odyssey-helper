import { ItemSelectionProvider } from "@/features/items/context";
import { OptimalPerfectRefineTable } from "@/features/refine/components/optimal-perfect-refine-table";

export default function RefineInfoRoute() {
  return (
    <ItemSelectionProvider>
      <OptimalPerfectRefineTable />
    </ItemSelectionProvider>
  );
}
