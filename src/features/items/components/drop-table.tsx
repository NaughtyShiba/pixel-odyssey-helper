import { filterObject } from "@/lib/fn/object.mjs";
import { useItemSelection } from "../context";
import { Enemy, enemies } from "@/features/bestiary/enemies.mjs";

export function ItemsDropTable() {
  const { selectedItem } = useItemSelection();
  const enemiesDroppingItem = filterObject(enemies, (_, enemy: Enemy) => {
    return Boolean(enemy.drops.find(({ item }) => item === selectedItem));
  });

  return <pre>{JSON.stringify(enemiesDroppingItem, null, "\t")}</pre>;
}
