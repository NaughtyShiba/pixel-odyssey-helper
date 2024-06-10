import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { items } from "@/data/items.mjs";
import { enemies } from "@/features/bestiary/enemies.mjs";
import { useEnemySelection } from "../context";

export function EnemyDropsTable() {
  const { selectedEnemy } = useEnemySelection();

  const drops = selectedEnemy ? enemies[selectedEnemy].drops : [];

  if (drops.length === 0) return;

  return (
    <>
      <h2 className="text-2xl">Drops</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Chance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drops.map((item) => (
            <TableRow key={item.item}>
              <TableCell className="flex gap-2 items-center">
                {items[item.item].image ? (
                  <img src={items[item.item].image!} className="h-8 w-8" />
                ) : null}
                <span>{items[item.item].label}</span>
              </TableCell>
              <TableCell>{item.chance}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
