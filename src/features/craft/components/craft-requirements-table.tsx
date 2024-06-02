import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ItemName, items } from "@/data/items.mjs";

interface Props {
  selectedItem: ItemName | null;
}
export function CraftRequirementsTable(props: Props) {
  const item = props.selectedItem ? items[props.selectedItem] : null;

  if (item && !item.craft) return <div>Item is not craftable</div>;
  if (!item || !item.craft) return null;

  return (
    <section className="flex flex-col gap-1">
      <h3 className="text-sm text-muted-foreground">Craft requirements:</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Item</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(item.craft).map(([itemName, amount]) => (
            <TableRow key={itemName}>
              <TableCell>{amount}</TableCell>
              <TableCell>{itemName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
