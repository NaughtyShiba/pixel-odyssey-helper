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
import { calculateTotalRequiredItems } from "../utils.mts";
import { memo, useMemo } from "react";

export const TotalItemsRequirementsTable = memo(
  function TotalItemsRequirementsTable() {
    const { selectedItem } = useItemSelection();
    const item = selectedItem ? items[selectedItem] : null;
    const craftAmount = useCraftAmount();
    const requirements = useMemo(
      () =>
        selectedItem
          ? calculateTotalRequiredItems(selectedItem, craftAmount.amount)
          : {},
      [craftAmount.amount, selectedItem],
    );

    if (!item || !item.craft || Object.keys(requirements).length === 0)
      return null;

    return (
      <section className="flex flex-col gap-1">
        <h3 className="text-sm text-muted-foreground">Total Items required:</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRows requirements={requirements} />
          </TableBody>
        </Table>
      </section>
    );
  },
);

interface TableRowsProps {
  requirements: Record<string, number>;
}
const TableRows = memo(function TableRows(props: TableRowsProps) {
  return useMemo(
    () =>
      Object.entries(props.requirements).map(([itemName, amount]) => (
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
          <TableCell>{amount}</TableCell>
        </TableRow>
      )),
    [props.requirements],
  );
});
