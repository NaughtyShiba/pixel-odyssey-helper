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

export default function IndexRoute() {
  const { selectedItem } = useItemSelection();
  const [tab, setTab] = useState<"craft" | "refine" | "compare_refine">(
    "craft",
  );

  return (
    <ItemSelectionProvider>
      <Tabs
        key={selectedItem}
        onValueChange={(tab) =>
          setTab(tab as "craft" | "refine" | "compare_refine")
        }
        value={tab}
      >
        <TabsList>
          <TabsTrigger value="craft">Craft</TabsTrigger>
          <TabsTrigger value="refine">Refine</TabsTrigger>
          <TabsTrigger value="compare_refine">
            Compare Perfect vs Imperfect
          </TabsTrigger>
        </TabsList>
        <TabsContent value="craft" className="flex flex-col gap-2">
          <CraftContextProvider>
            <CraftRequirementsTable />
            <TotalItemsRequirementsTable />
          </CraftContextProvider>
        </TabsContent>
        <TabsContent value="refine" className="flex flex-col gap-2">
          <OptimalPerfectRefineTable />
        </TabsContent>
        <TabsContent value="compare_refine" className="flex flex-col gap-2">
          <RefineComparisonTable />
        </TabsContent>
      </Tabs>
    </ItemSelectionProvider>
  );
}
