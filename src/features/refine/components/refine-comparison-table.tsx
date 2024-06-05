import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { items } from "@/data/items.mjs";
import type { ItemType } from "@/data/items.mjs";
import {
  calculateImperfectRefine,
  calculateOptimalPerfectRefine,
} from "../utils.mts";
import { useItemSelection } from "@/features/items/context";
import { stats } from "@/features/stats/const.mjs";
import type { StatType } from "@/features/stats/types.mjs";

const refinableItemTypes: ItemType[] = [
  "combat_equipment",
  "combat_necklace",
  "ring",
  "skill_necklace",
  "tool",
  "gloves",
];

export function RefineComparisonTable() {
  const { selectedItem } = useItemSelection();
  const item = selectedItem ? items[selectedItem] : null;

  const optimalRefine =
    item?.type && item?.stats
      ? calculateOptimalPerfectRefine({
          type: item.type,
          levelOneStats: item.stats,
        })
      : {};
  const imperfectRefine =
    item?.type && item?.stats
      ? calculateImperfectRefine({ levelOneStats: item.stats })
      : {};

  if (item?.type && !refinableItemTypes.includes(item.type))
    return <div>Item is not refinable</div>;
  if (!item || Object.keys(optimalRefine).length === 0) return null;
  return (
    <Table key={selectedItem}>
      <TableHeader>
        <TableRow>
          <TableHead rowSpan={2}>Level</TableHead>
          <TableHead colSpan={Object.keys(item.stats!).length}>
            Perfect Refine
          </TableHead>
          <TableHead colSpan={Object.keys(item.stats!).length}>
            Imperfect Refine
          </TableHead>
        </TableRow>
        <TableRow>
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(optimalRefine).map(([targetLevel, info]) => (
          <TableRow key={targetLevel}>
            <TableCell>{targetLevel}</TableCell>
            {Object.entries(info.stats).map(([name, stat]) => (
              <TableCell key={name}>{stat}</TableCell>
            ))}
            {Object.entries(imperfectRefine[Number(targetLevel)]).map(
              ([name, stat]) => (
                <TableCell key={name}>{stat}</TableCell>
              ),
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
