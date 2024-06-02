import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type Type, items } from "@/data/items.mjs";
import { useMemo } from "react";
import { calculateOptimalPerfectRefine } from "../utils.mts";

const refinableItemTypes: Type[] = ["combat_equipment", "combat_necklace", "ring", "skill_necklace", "tool"];

interface Props {
  selectedItem: string;
}
export function OptimalPerfectRefineTable(props: Props) {
  const item = items[props.selectedItem];
  
  const optimalRefine = useMemo(() =>
    item?.type && item?.stats
      ? calculateOptimalPerfectRefine({ type: item.type, levelOneStats: Object.values(item.stats) })
      : {},
    [item]);
  if (!item || !refinableItemTypes.includes(item.type) || Object.keys(optimalRefine).length === 0) return null;
  return (<Table>
    <TableHeader>
      <TableRow>
        <TableHead>Target Level</TableHead>
        <TableHead>Sacrificed Item Level</TableHead>
        <TableHead>Total Level 1 Items needed</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Object.entries(optimalRefine).map(([targetLevel, info]) => (<TableRow key={targetLevel}>
        <TableCell>{targetLevel}</TableCell>
        <TableCell>{info.minimumSourceItemLevelNeeded}</TableCell>
        <TableCell>{info.totalItemsNeeded}</TableCell>
      </TableRow>))}
    </TableBody>
  </Table>)
}