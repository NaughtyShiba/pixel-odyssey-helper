import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { items } from "@/data/items.mjs";
import { calculateOptimalPerfectRefine } from "@/features/refine/utils.mts";
import { createContext, useContext, useState } from "react";
import { useItemSelection } from "../items/context";

type CraftContextProviderProps = {
  children: React.ReactNode;
};

const CraftContext = createContext<{ amount: number }>({ amount: 1 });

export function CraftContextProvider({ children }: CraftContextProviderProps) {
  const [amount, setAmount] = useState(1);
  const { selectedItem } = useItemSelection();
  const item = selectedItem ? items[selectedItem] : null;

  return (
    <CraftContext.Provider value={{ amount }}>
      <section className="flex flex-col gap-2">
        {item?.craft ? (
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              id="amount"
              type="number"
              min="1"
              placeholder="Amount to craft (defaults to 1)"
              label="Amount to craft (defaults to 1)"
              value={amount}
              onChange={(e) => {
                const amount = parseInt(e.target.value);
                setAmount(Number.isFinite(amount) ? amount : 1);
              }}
            />
            {item.stats ? (
              <Button
                onClick={() => {
                  const res = calculateOptimalPerfectRefine({
                    levelOneStats: item.stats!,
                    type: "basic",
                  });
                  setAmount(res[10].totalItemsNeeded);
                }}
              >
                Amount required for P10 Refine
              </Button>
            ) : null}
          </div>
        ) : null}
        {children}
      </section>
    </CraftContext.Provider>
  );
}

export const useCraftAmount = () => {
  const context = useContext(CraftContext);

  if (context === undefined)
    throw new Error(
      "useCraftAmount must be used within a CraftContextProvider",
    );

  return context;
};
