import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ItemName, items } from "@/data/items.mjs";
import { calculateTotalRequiredItems } from "../utils.mts";
import { useCraftAmount } from "../context";
import { useItemSelection } from "@/features/items/context";

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
            <TableHead>Amount</TableHead>
            <TableHead>Item</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(requirements).map(([itemName, amount]) => (
            <TableRow key={itemName}>
              <TableCell>{amount}</TableCell>
              <TableCell>{items[itemName as ItemName].label}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
