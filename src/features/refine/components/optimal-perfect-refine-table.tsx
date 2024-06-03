import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Type, items } from "@/data/items.mjs";
import { calculateOptimalPerfectRefine } from "../utils.mts";
import { useItemSelection } from "@/features/items/context";

const refinableItemTypes: Type[] = [
  "combat_equipment",
  "combat_necklace",
  "ring",
  "skill_necklace",
  "tool",
];

export function OptimalPerfectRefineTable() {
  const { selectedItem } = useItemSelection();
  const item = selectedItem ? items[selectedItem] : null;

  const optimalRefine =
    item?.type && item?.stats
      ? calculateOptimalPerfectRefine({
          type: item.type,
          levelOneStats: item.stats,
        })
      : {};
  if (item?.type && !refinableItemTypes.includes(item.type))
    return <div>Item is not refinable</div>;
  if (!item || Object.keys(optimalRefine).length === 0) return null;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={3}>Refine Info</TableHead>
          <TableHead colSpan={Object.keys(item.stats!).length}>Stats</TableHead>
        </TableRow>
        <TableRow>
          <TableHead>Target Level</TableHead>
          <TableHead>Sacrificed Item Level</TableHead>
          <TableHead>Total Level 1 Items needed</TableHead>
          {Object.keys(item.stats!).map((stat) => (
            <TableHead key={stat}>{stat}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(optimalRefine).map(([targetLevel, info]) => (
          <TableRow key={targetLevel}>
            <TableCell>{targetLevel}</TableCell>
            <TableCell>{info.minimumSourceItemLevelNeeded}</TableCell>
            <TableCell>{info.totalItemsNeeded}</TableCell>
            {Object.values(info.stats).map((stat) => (
              <TableCell key={stat}>{stat}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
