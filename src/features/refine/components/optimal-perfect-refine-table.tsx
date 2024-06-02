import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Type, items, ItemName } from "@/data/items.mjs";
import { useMemo } from "react";
import { calculateOptimalPerfectRefine } from "../utils.mts";

const refinableItemTypes: Type[] = [
  "combat_equipment",
  "combat_necklace",
  "ring",
  "skill_necklace",
  "tool",
];

interface Props {
  selectedItem: ItemName | null;
}
export function OptimalPerfectRefineTable(props: Props) {
  const item = props.selectedItem ? items[props.selectedItem] : null;

  const optimalRefine = useMemo(
    () =>
      item?.type && item?.stats
        ? calculateOptimalPerfectRefine({
            type: item.type,
            levelOneStats: Object.values(item.stats),
          })
        : {},
    [item],
  );
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
            {info.stats.map((stat) => (
              <TableCell key={stat}>{stat}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
