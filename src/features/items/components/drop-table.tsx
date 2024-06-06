import { filterObject } from "@/lib/fn/object.mjs";
import { useItemSelection } from "../context";
import { Enemy, enemies } from "@/features/bestiary/enemies.mjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ItemsDropTable() {
  const { selectedItem } = useItemSelection();
  const enemiesDroppingItem = filterObject(enemies, (_, enemy: Enemy) => {
    return Boolean(enemy.drops.find(({ item }) => item === selectedItem));
  });

  if (Object.values(enemiesDroppingItem).length === 0) return;

  return (
    <>
      <h2 className="text-2xl">Drops</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Enemy</TableHead>
            <TableHead>Chance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.values(enemiesDroppingItem).map((enemy) => (
            <TableRow key={enemy.name}>
              <TableCell className="flex gap-2 items-center">
                <img src={enemy.image} className="h-8 w-8" />
                <span>{enemy.name}</span>
              </TableCell>
              <TableCell>
                {enemy.drops.find((d) => d.item === selectedItem)?.chance}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
