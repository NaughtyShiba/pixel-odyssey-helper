import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CraftRequirementsTable } from "@/features/craft/components/craft-requirements-table";
import { TotalItemsRequirementsTable } from "@/features/craft/components/total-items-requirements-table";
import { CraftContextProvider } from "@/features/craft/context";
import { OptimalPerfectRefineTable } from "@/features/refine/components/optimal-perfect-refine-table";
import { memo, useState } from "react";
import { useItemSelection } from "../context";

export const ItemsDetailsTabs = memo(function ItemsDetailsTabs() {
  const { selectedItem } = useItemSelection();
  const [tab, setTab] = useState<"craft" | "refine">("craft");

  return (
    <Tabs
      key={selectedItem}
      onValueChange={(tab) => setTab(tab as "craft" | "refine")}
      value={tab}
    >
      <TabsList>
        <TabsTrigger value="craft">Craft</TabsTrigger>
        <TabsTrigger value="refine">Refine</TabsTrigger>
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
    </Tabs>
  );
});
