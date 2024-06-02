import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ItemName, items } from "@/data/items.mjs";
import { useState } from "react";
import { calculateTotalRequiredItems } from "../utils.mts";
import { Input } from "@/components/ui/input";

interface Props {
  selectedItem: ItemName | null;
}
export function TotalItemsRequirementsTable(props: Props) {
  const item = props.selectedItem ? items[props.selectedItem] : null;
  const [amount, setAmount] = useState(1);
  const requirements = props.selectedItem
    ? calculateTotalRequiredItems(props.selectedItem, amount)
    : {};

  if (!item || !item.craft || Object.keys(requirements).length === 0)
    return null;

  return (
    <section className="flex flex-col gap-1">
      <Input
        type="number"
        min="1"
        className="flex-basis-1/2 w-1/2"
        placeholder="Amount to craft (defaults to 1)"
        onChange={(e) => {
          const amount = parseInt(e.target.value);
          setAmount(Number.isFinite(amount) ? amount : 1);
        }}
      />
      <h3 className="text-sm text-muted-foreground">Craft requirements:</h3>
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
