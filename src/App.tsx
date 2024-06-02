import { useState } from "react";
import "./style.css";
import { CraftRequirementsCombobox } from "./features/craft-requirements/combobox";
import { OptimalPerfectRefineTable } from "./features/refine/components/optimal-perfect-refine-table";
import { CraftRequirementsTable } from "./features/craft/components/craft-requirements-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { TotalItemsRequirementsTable } from "./features/craft/components/total-items-requirements-table";
import { ItemName } from "./data/items.mts";
import { ModeToggle } from "./features/theme/components/mode-toggle";

function App() {
  const [selectedItem, selectItem] = useState<ItemName | null>(null);
  const [tab, setTab] = useState<"craft" | "refine">("craft");

  return (
    <>
      <nav className="flex justify-end">
        <ModeToggle />
      </nav>
      <div className="flex gap-4 flex-col">
        <div className="flex flex-row gap-2">
          <CraftRequirementsCombobox
            onChange={selectItem}
            className="flex-basis-1/2 w-1/2"
          />
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
    </>
  );
}

export default App;
