import { useEnemySelection } from "../context";
import { enemies } from "@/features/bestiary/enemies.mjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { items } from "@/data/items.mjs";

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
                {/* <img src={item.image} className="h-8 w-8" /> */}
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
