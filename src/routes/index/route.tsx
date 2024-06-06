import {
  ItemSelectionProvider,
  useItemSelection,
} from "@/features/items/context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { OptimalPerfectRefineTable } from "@/features/refine/components/optimal-perfect-refine-table";
import { RefineComparisonTable } from "@/features/refine/components/refine-comparison-table";
import { ItemsComparisonTable } from "@/features/items/components/compare-against";
import { ItemsDropTable } from "@/features/items/components/drop-table";
import { CraftDetails } from "@/features/craft/components/details";

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
          <CraftDetails />
          <ItemsDropTable />
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
