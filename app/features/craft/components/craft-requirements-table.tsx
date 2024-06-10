import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ItemName, items } from "@/data/items.mjs";
import { useItemSelection } from "@/features/items/context";
import { useCraftAmount } from "../context";
import { memo, useMemo } from "react";

export const CraftRequirementsTable = memo(function CraftRequirementsTable() {
  const { selectedItem } = useItemSelection();
  const item = selectedItem ? items[selectedItem] : null;
  const craftAmount = useCraftAmount();

  if (item && !item.craft) return <div>Item is not craftable</div>;
  if (!item || !item.craft) return null;

  return (
    <section className="flex flex-col gap-1">
      <h3 className="text-sm text-muted-foreground">Craft requirements:</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRows craft={item.craft} craftAmount={craftAmount.amount} />
        </TableBody>
      </Table>
    </section>
  );
});

interface TableRowsProps {
  craft: Partial<Record<ItemName, number>>;
  craftAmount: number;
}
const TableRows = memo(function TableRows(props: TableRowsProps) {
  return useMemo(
    () =>
      Object.entries(props.craft).map(([itemName, amount]) => (
        <TableRow key={itemName}>
          <TableCell className="flex gap-2 items-center">
            {items[itemName as ItemName].image ? (
              <img
                src={items[itemName as ItemName].image!}
                className="h-8 w-8"
              />
            ) : null}
            <span>{items[itemName as ItemName].label}</span>
          </TableCell>
          <TableCell>{amount! * props.craftAmount}</TableCell>
        </TableRow>
      )),
    [props.craft, props.craftAmount],
  );
});
