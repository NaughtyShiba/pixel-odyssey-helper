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

export function TotalItemsRequirementsTable() {
  const { selectedItem } = useItemSelection();
  const item = selectedItem ? items[selectedItem] : null;
  const craftAmount = useCraftAmount();
  const requirements = selectedItem
    ? calculateTotalRequiredItems(selectedItem, craftAmount.amount)
    : {};

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
          {Object.entries(requirements).map(([itemName, amount]) => (
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
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
