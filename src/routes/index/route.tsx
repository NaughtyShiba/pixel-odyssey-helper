import { CraftRequirementsTable } from "@/features/craft/components/craft-requirements-table";
import { TotalItemsRequirementsTable } from "@/features/craft/components/total-items-requirements-table";
import { CraftContextProvider } from "@/features/craft/context";
import {
  ItemSelectionProvider,
  useItemSelection,
} from "@/features/items/context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { OptimalPerfectRefineTable } from "@/features/refine/components/optimal-perfect-refine-table";
import { RefineComparisonTable } from "@/features/refine/components/refine-comparison-table";
import { ItemsComparisonTable } from "@/features/items/components/compare-against";

type Tabs = "sources" | "refine" | "compare_refine" | "compare_against";

export default function IndexRoute() {
  const { selectedItem } = useItemSelection();
  const [tab, setTab] = useState<Tabs>("sources");

  return (
    <ItemSelectionProvider>
      <Tabs
        key={selectedItem}
        onValueChange={(tab) => setTab(tab as Tabs)}
        value={tab}
      >
        <TabsList>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="refine">Refine</TabsTrigger>
          <TabsTrigger value="compare_refine">
            Compare Perfect vs Imperfect
          </TabsTrigger>
          <TabsTrigger value="compare_against">Compare Against</TabsTrigger>
        </TabsList>
        <TabsContent value="sources" className="flex flex-col gap-2">
          <h2 className="text-2xl">Crafting</h2>
          <CraftContextProvider>
            <CraftRequirementsTable />
            <TotalItemsRequirementsTable />
          </CraftContextProvider>
          <h2 className="text-2xl">Drops</h2>
          <div></div>
          <h2 className="text-2xl">Shops</h2>
          <div></div>
        </TabsContent>
        <TabsContent value="refine" className="flex flex-col gap-2">
          <OptimalPerfectRefineTable />
        </TabsContent>
        <TabsContent value="compare_refine" className="flex flex-col gap-2">
          <RefineComparisonTable />
        </TabsContent>
        <TabsContent value="compare_against" className="flex flex-col gap-2">
          <ItemsComparisonTable />
        </TabsContent>
      </Tabs>
    </ItemSelectionProvider>
  );
}
