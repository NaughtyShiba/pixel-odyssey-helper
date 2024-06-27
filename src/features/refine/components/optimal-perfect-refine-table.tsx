import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ItemType } from "@/data/items.mjs";
import { items } from "@/data/items.mjs";
import { useItemSelection } from "@/features/items/context";
import { stats } from "@/features/stats/const.mjs";
import { StatType } from "@/features/stats/types.mjs";
import { calculateOptimalPerfectRefine } from "../utils.mts";

const refinableItemTypes: ItemType[] = [
  "combat_equipment",
  "combat_necklace",
  "ring",
  "skill_necklace",
  "tool",
  "gloves",
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
    <Table key={selectedItem}>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={3}>Refine Info</TableHead>
          <TableHead colSpan={Object.keys(item.stats!).length}>Stats</TableHead>
          <TableHead colSpan={4}>Total needed</TableHead>
        </TableRow>
        <TableRow>
          <TableHead>Target Level</TableHead>
          <TableHead>Sacrificed Item Level</TableHead>
          <TableHead>Total Level 1 Items needed</TableHead>
          {Object.keys(item.stats!).map((stat) => {
            const statInfo = stats[stat as StatType];
            return (
              <TableHead key={stat}>
                <span className="flex gap-1">
                  {statInfo.image ? (
                    <img className="w-4 h-4" src={statInfo.image} />
                  ) : null}
                  {statInfo.label}
                </span>
              </TableHead>
            );
          })}
          <TableHead>Gold</TableHead>
          <TableHead>Rabbits Foot</TableHead>
          <TableHead>Wishbone</TableHead>
          <TableHead>Clover</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(optimalRefine).map(([targetLevel, info]) => (
          <TableRow key={targetLevel}>
            <TableCell>{targetLevel}</TableCell>
            <TableCell>{info.minimumSourceItemLevelNeeded}</TableCell>
            <TableCell>{info.totalItemsNeeded}</TableCell>
            {Object.entries(info.stats).map(([name, stat]) => (
              <TableCell key={name}>{stat}</TableCell>
            ))}
            <TableCell>{info.totalGold}</TableCell>
            <TableCell>{info.totalCharms.rabbits_foot}</TableCell>
            <TableCell>{info.totalCharms.wishbone}</TableCell>
            <TableCell>{info.totalCharms.clover}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
