import { useMemo, useState } from "react";
import "./style.css";
import { CraftRequirementsCombobox } from "./features/craft-requirements/combobox";
import { calculateTotalRequiredItems } from "./features/craft/utils.mts";
import { Input } from "./components/ui/input";
import { items } from "./data/items.mts";
import { OptimalPerfectRefineTable } from "./features/refine/components/optimal-perfect-refine-table";

function App() {
  const [selectedItem, selectItem] = useState("");
  const item = items[selectedItem];
  const [amount, setAmount] = useState(1);
  const requirements = useMemo(
    () =>
      selectedItem ? calculateTotalRequiredItems(selectedItem, amount) : {},
    [selectedItem, amount],
  );

  return (
    <>
      <div className="flex gap-4 flex-col">
        <div className="flex flex-row gap-2">
          <CraftRequirementsCombobox
            onChange={selectItem}
            className="flex-basis-1/2 w-1/2"
          />
          <Input
            type="numer"
            min="1"
            className="flex-basis-1/2 w-1/2"
            placeholder="Amount to craft (defaults to 1)"
            onChange={(e) => {
              const amount = parseInt(e.target.value);
              setAmount(Number.isFinite(amount) ? amount : 1);
            }}
          />
        </div>
        {item?.craft ? (
          <div className="flex flex-col gap-1">
            <div>Craft requirements:</div>
            <ul className="space-y-1">
              {Object.entries(item.craft).map((item) => (
                <li key={item[0]}>
                  {item[1] * amount}x {items[item[0]].label}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {item?.craft ? (
          <div className="flex flex-col gap-1">
            <div>Total Required items:</div>
            <ul className="space-y-1">
              {Object.entries(requirements).map((item) => (
                <li key={item[0]}>
                  {item[1]}x {items[item[0]].label}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <OptimalPerfectRefineTable selectedItem={selectedItem} />
      </div>
    </>
  );
}

export default App;
