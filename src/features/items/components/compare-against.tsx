import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ItemName, items } from "@/data/items.mjs";
import { calculateOptimalPerfectRefine } from "@/features/refine/utils.mjs";
import { stats } from "@/features/stats/const.mjs";
import { StatType } from "@/features/stats/types.mjs";
import { useItemSelection } from "../context";
import { ItemSelector } from "./item-selector";
import { useSafeSearchParams } from "@/lib/use-search-params/hooks.mjs";
import { null_, string, union } from "valibot";
import { Maybe } from "@/lib/fn/maybe.mjs";

export function ItemsComparisonTable() {
  const [compareAgainst, setCompareAgainst] = useSafeSearchParams({
    key: "compareAgainst",
    defaultValue: null,
    validation: union([string(), null_()]),
  });
  const { selectedItem } = useItemSelection();

  const leftItem = selectedItem ? items[selectedItem] : null;
  const rightItem = compareAgainst ? items[compareAgainst as ItemName] : null;

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
        defaultValue={compareAgainst as Maybe<ItemName>}
        onChange={setCompareAgainst}
        className="flex-basis-1/2 w-1/2"
      />
      {details}
    </div>
  );
}
