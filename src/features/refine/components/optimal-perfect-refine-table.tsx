import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type ItemType, items } from "@/data/items.mjs";
import { calculateOptimalPerfectRefine } from "../utils.mts";
import { useItemSelection } from "@/features/items/context";
import { StatType, stats } from "@/data/stats.mjs";

const refinableItemTypes: ItemType[] = [
  "combat_equipment",
  "combat_necklace",
  "ring",
  "skill_necklace",
  "tool",
];

const images: Record<StatType, string> = {
  air_damage: new URL("@/assets/icons/elements_air.png", import.meta.url).href,
  air_defense: new URL("@/assets/icons/elements_air.png", import.meta.url).href,
  attack: new URL("@/assets/icons/strength.png", import.meta.url).href,
  defense: new URL("@/assets/icons/resistance.png", import.meta.url).href,
  earth_damage: new URL("@/assets/icons/elements_earth.png", import.meta.url)
    .href,
  earth_defense: new URL("@/assets/icons/elements_earth.png", import.meta.url)
    .href,
  fire_damage: new URL("@/assets/icons/elements_fire.png", import.meta.url)
    .href,
  fire_defense: new URL("@/assets/icons/elements_fire.png", import.meta.url)
    .href,
  health: new URL("@/assets/icons/hp.png", import.meta.url).href,
  luck: new URL("@/assets/icons/luck.png", import.meta.url).href,
  mana: new URL("@/assets/icons/mana.png", import.meta.url).href,
  speed: new URL("@/assets/icons/speed.png", import.meta.url).href,
  water_damage: new URL("@/assets/icons/elements_fire.png", import.meta.url)
    .href,
  water_defense: new URL("@/assets/icons/elements_fire.png", import.meta.url)
    .href,
  crit_chance: "",
  crit_damage: "",
  mining: new URL("@/assets/icons/mining.png", import.meta.url).href,
  berry: "",
  mush: "",
};

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
        </TableRow>
        <TableRow>
          <TableHead>Target Level</TableHead>
          <TableHead>Sacrificed Item Level</TableHead>
          <TableHead>Total Level 1 Items needed</TableHead>
          {Object.keys(item.stats!).map((stat) => (
            <TableHead key={stat}>
              <span className="flex gap-1">
                {images[stat as StatType] ? (
                  <img className="w-4 h-4" src={images[stat as StatType]} />
                ) : null}
                {stats[stat as StatType].label}
              </span>
            </TableHead>
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
