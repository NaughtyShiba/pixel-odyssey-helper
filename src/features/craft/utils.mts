import { items } from "@/data/items.mts"

export function calculateTotalRequiredItems(item: keyof typeof items, amount = 1) {
  const requiredItems: Record<string, number> = {};
  const visitItem = (itemName: string, parentCount = 1) => {
    const item = items[itemName];
    if (item.craft) {
      Object
        .entries(item.craft)
        .forEach(([itemName, count]) => visitItem(itemName, parentCount * count))
    } else {
      requiredItems[itemName] ??= 0
      requiredItems[itemName] += parentCount
    }
  }
  visitItem(item, amount);
  return requiredItems;
}

