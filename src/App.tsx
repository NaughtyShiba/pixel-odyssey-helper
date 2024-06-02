import { useState } from "react";
import "./style.css";
import { ItemSelector } from "./features/items/components/item-selector";
import { OptimalPerfectRefineTable } from "./features/refine/components/optimal-perfect-refine-table";
import { CraftRequirementsTable } from "./features/craft/components/craft-requirements-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { TotalItemsRequirementsTable } from "./features/craft/components/total-items-requirements-table";
import { ItemName } from "./data/items.mts";
import { ModeToggle } from "./features/theme/components/mode-toggle";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { AlertCircle } from "lucide-react";

export function App() {
  const [selectedItem, selectItem] = useState<ItemName | null>(null);
  const [tab, setTab] = useState<"craft" | "refine">("craft");

  return (
    <div className="flex gap-4 flex-col">
      <nav className="flex justify-end">
        <ModeToggle />
      </nav>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Still in beta</AlertTitle>
        <AlertDescription>
          Tool is still in a beta. If you notice anything off, ping
          @NaughtyShiba on discord
        </AlertDescription>
      </Alert>
      <div className="flex flex-row gap-2">
        <ItemSelector onChange={selectItem} className="flex-basis-1/2 w-1/2" />
      </div>
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
          <CraftRequirementsTable selectedItem={selectedItem} />
          <TotalItemsRequirementsTable selectedItem={selectedItem} />
        </TabsContent>
        <TabsContent value="refine" className="flex flex-col gap-2">
          <OptimalPerfectRefineTable selectedItem={selectedItem} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
