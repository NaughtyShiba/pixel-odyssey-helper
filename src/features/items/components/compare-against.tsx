import { ItemName, items } from "@/data/items.mjs";
import { useItemSelection } from "../context";
import { ItemSelector } from "./item-selector";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculateOptimalPerfectRefine } from "@/features/refine/utils.mjs";
import { stats } from "@/features/stats/const.mjs";
import { StatType } from "@/features/stats/types.mjs";

export function ItemsComparisonTable() {
  const [compareAgainst, setCompareAgainst] = useState<ItemName | null>(null);
  const { selectedItem } = useItemSelection();

  const leftItem = selectedItem ? items[selectedItem] : null;
  const rightItem = compareAgainst ? items[compareAgainst] : null;

  const leftOptimalRefine =
    leftItem?.type && leftItem?.stats
      ? calculateOptimalPerfectRefine({
          type: leftItem.type,
          levelOneStats: leftItem.stats,
        })
      : {};
  const rightOptimalRefine =
    rightItem?.type && rightItem?.stats
      ? calculateOptimalPerfectRefine({
          type: rightItem.type,
          levelOneStats: rightItem.stats,
        })
      : {};

  let details = null;
  if (!leftItem || !rightItem) details = <div>Please items to compare</div>;
  else {
    details = (
      <Table key={`${selectedItem}-${compareAgainst}`}>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2}>Level</TableHead>
            <TableHead colSpan={Object.keys(leftItem.stats!).length}>
              {leftItem.label}
            </TableHead>
            <TableHead colSpan={Object.keys(rightItem.stats!).length}>
              {rightItem.label}
            </TableHead>
          </TableRow>
          <TableRow>
            {Object.keys(leftItem.stats!).map((stat) => {
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
            {Object.keys(rightItem.stats!).map((stat) => {
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
          {Object.entries(leftOptimalRefine).map(([targetLevel, info]) => (
            <TableRow key={targetLevel}>
              <TableCell>{targetLevel}</TableCell>
              {Object.entries(info.stats).map(([name, stat]) => (
                <TableCell key={name}>{stat}</TableCell>
              ))}
              {Object.entries(
                rightOptimalRefine[Number(targetLevel)].stats,
              ).map(([name, stat]) => (
                <TableCell key={name}>{stat}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ItemSelector
        onChange={setCompareAgainst}
        className="flex-basis-1/2 w-1/2"
      />
      {details}
    </div>
  );
}
