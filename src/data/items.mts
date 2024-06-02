export type Type =
  | "tool"
  | "ring"
  | "skill_necklace"
  | "combat_necklace"
  | "combat_equipment"
  | "ingot"
  | "basic"
  | "potion"
  | "charm"
  | "ore"
  | "material";
// type Tag = "equipment" | "combat" | "tools" | "necklace"
type Stat = "mining";

export interface Item {
  type: Type;
  icon?: string;
  label: string;
  craft?: Record<string, number>;
  // tags?: Tag[];
  stats?: Record<Stat, number>;
}
export const items: Record<string, Item> = {
  platinum_shield: {
    type: "combat_equipment",
    label: "Platinum Shield",
    craft: {
      coal: 10,
      platinum_ingot: 25,
    },
  },
  platinum_helmet: {
    type: "combat_equipment",
    label: "Platinum Helmet",
    craft: {
      platinum_ingot: 10,
      iron_ingot: 20,
    },
  },
  platinum_chestplate: {
    type: "combat_equipment",
    label: "Platinum Chestplate",
    craft: {
      chainmail_shirt: 4,
      platinum_ingot: 10,
    },
  },
  platinum_greaves: {
    type: "combat_equipment",
    label: "Platinum Greaves",
    craft: {
      platinum_ingot: 8,
      nail: 10,
    },
  },
  platinum_boots: {
    type: "combat_equipment",
    label: "Platinum Boots",
    craft: {
      platinum_ingot: 12,
      sandals: 1,
    },
  },
  platinum_ingot: {
    type: "ingot",
    label: "Platinum Ingot",
    craft: {
      platinum_ore: 3,
      coal: 16,
    },
  },
  platinum_ore: {
    type: "ore",
    label: "Platinum Ore",
  },
  gold_mining_necklace: {
    type: "skill_necklace",
    label: "Gold Mining Necklace",
    stats: {
      mining: 7,
    },
    craft: {
      gold_ingot: 40,
      emerald: 4,
    },
  },
  silver_pickaxe: {
    type: "tool",
    label: "Silver Pickaxe",
    craft: {
      silver_ingot: 5,
      golden_pickaxe: 1,
    },
    stats: {
      mining: 18,
    },
  },
  silver_ingot: {
    type: "ingot",
    label: "Silver Ingot",
    craft: {
      silver_ore: 4,
      coal: 5,
    },
  },
  silver_ore: {
    type: "ore",
    label: "Silver Ore",
  },
  golden_pickaxe: {
    type: "tool",
    label: "Golden Pickaxe",
    craft: {
      gold_ingot: 25,
      copper_pickaxe: 2,
    },
  },
  gold_ingot: {
    type: "ingot",
    label: "Gold Ingot",
    craft: {
      gold_ore: 4,
      coal: 5,
    },
  },
  gold_ore: {
    type: "ore",
    label: "Gold Ore",
  },
  copper_pickaxe: {
    type: "tool",
    label: "Copper Pickaxe",
    craft: {
      iron_pickaxe: 3,
      copper_ingot: 20,
    },
  },
  copper_ingot: {
    type: "ingot",
    label: "Copper Ingot",
    craft: {
      copper_ore: 3,
      coal: 3,
    },
  },
  copper_ore: {
    type: "ore",
    label: "Copper Ore",
  },
  iron_pickaxe: {
    type: "tool",
    label: "Iron Pickaxe",
    craft: {
      iron_ingot: 5,
      branch: 5,
    },
  },
  iron_ingot: {
    type: "ingot",
    label: "Iron Ingot",
    craft: {
      iron_ore: 2,
      coal: 1,
    },
  },
  chainmail_shirt: {
    type: "combat_equipment",
    label: "Chainmail Shirt",
    craft: {
      coal: 5,
      chain: 15,
      shirt: 4,
    },
  },
  iron_ore: {
    type: "ore",
    label: "Iron Ore",
  },
  chain: {
    type: "material",
    label: "Chain",
  },
  shirt: {
    type: "combat_equipment",
    label: "Shirt",
  },
  coal: {
    type: "ore",
    label: "Coal",
  },
  nail: {
    type: "material",
    label: "Nail",
  },
  sandals: {
    type: "combat_equipment",
    label: "Sandals",
  },
  emerald: {
    type: "basic",
    label: "Emerald",
  },
  branch: {
    type: "basic",
    label: "Branch",
  },
};
