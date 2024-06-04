import { StatType } from "./stats.mts";

export type ItemName =
  | "scythe"
  | "vamp_blade_1"
  | "vamp_blade_2"
  | "vamp_blade_3"
  | "dracula_cloak"
  | "platinum_shield"
  | "platinum_helmet"
  | "platinum_chestplate"
  | "platinum_greaves"
  | "platinum_boots"
  | "platinum_ingot"
  | "platinum_ore"
  | "gold_mining_necklace"
  | "silver_dagger"
  | "silver_pickaxe"
  | "silver_ingot"
  | "silver_ore"
  | "golden_pickaxe"
  | "gold_ingot"
  | "gold_ore"
  | "copper_pickaxe"
  | "copper_ingot"
  | "copper_ore"
  | "iron_pickaxe"
  | "iron_ingot"
  | "chainmail_shirt"
  | "iron_ore"
  | "chain"
  | "shirt"
  | "coal"
  | "nail"
  | "sandals"
  | "bat_wing"
  | "emerald"
  | "branch"
  | "telescope"
  | "santa_hat"
  | "bunny_ears"
  | "silver_greaves"
  | "volcanic_greaves"
  | "emberfruit"
  | "purple_cloak"
  | "purple_scarab"
  | "red_gloves";

export type ItemType =
  | "tool"
  | "ring"
  | "skill_necklace"
  | "combat_necklace"
  | "combat_equipment"
  | "gloves"
  | "ingot"
  | "basic"
  | "potion"
  | "charm"
  | "ore"
  | "material"
  | "monster-drop";

export interface Item {
  type: ItemType;
  icon?: string;
  label: string;
  craft?: Partial<Record<ItemName, number>>;
  stats?: Partial<Record<StatType, number>>;
}

export const itemTypeLabel: Record<ItemType, string> = {
  tool: "Tool",
  "monster-drop": "Monster Drop",
  basic: "Basic",
  charm: "Charm",
  combat_equipment: "Combat Equipment",
  combat_necklace: "Combat Necklace",
  ingot: "Ingot",
  material: "Material",
  ore: "Ore",
  potion: "Potion",
  ring: "Ring",
  skill_necklace: "Skill Necklace",
  gloves: "Gloves",
};

export const items: Record<ItemName, Item> = {
  santa_hat: {
    type: "combat_equipment",
    label: "Santa Hat",
    stats: {
      defense: 25,
      luck: 8,
    },
  },
  bunny_ears: {
    type: "combat_equipment",
    label: "Bunny Ears",
    stats: {
      defense: 15,
      speed: 20,
    },
  },
  telescope: {
    type: "tool",
    label: "Telescope",
    stats: {
      luck: 5,
    },
  },
  scythe: {
    type: "combat_equipment",
    label: "Scythe",
    stats: {
      attack: 45,
      speed: 11,
    },
  },
  vamp_blade_1: {
    type: "combat_equipment",
    label: "Vamp Blade Tier 1",
    stats: {
      attack: 50,
      health: 50,
    },
    craft: {
      dracula_cloak: 1,
      bat_wing: 100,
    },
  },
  vamp_blade_2: {
    type: "combat_equipment",
    label: "Vamp Blade +1",
    stats: {
      attack: 70,
      health: 70,
    },
    craft: {
      vamp_blade_1: 2,
      bat_wing: 250,
    },
  },
  vamp_blade_3: {
    type: "combat_equipment",
    label: "Vamp Blade +2",
    stats: {
      attack: 90,
      health: 90,
    },
    craft: {
      vamp_blade_2: 2,
      bat_wing: 500,
    },
  },
  dracula_cloak: {
    type: "combat_equipment",
    label: "Dracula's Cloak",
    stats: {
      defense: 40,
      mana: 7,
    },
  },
  platinum_shield: {
    type: "combat_equipment",
    label: "Platinum Shield",
    stats: {
      defense: 99,
      mana: 10,
    },
    craft: {
      coal: 10,
      platinum_ingot: 25,
    },
  },
  platinum_helmet: {
    type: "combat_equipment",
    label: "Platinum Helmet",
    stats: {
      defense: 40,
      health: 45,
    },
    craft: {
      platinum_ingot: 10,
      iron_ingot: 20,
    },
  },
  platinum_chestplate: {
    type: "combat_equipment",
    label: "Platinum Chestplate",
    stats: {
      defense: 80,
      health: 40,
    },
    craft: {
      chainmail_shirt: 4,
      platinum_ingot: 10,
    },
  },
  platinum_greaves: {
    type: "combat_equipment",
    label: "Platinum Greaves",
    stats: {
      speed: 30,
      defense: 50,
    },
    craft: {
      platinum_ingot: 8,
      nail: 10,
    },
  },
  platinum_boots: {
    type: "combat_equipment",
    label: "Platinum Boots",
    stats: {
      defense: 35,
      speed: 25,
    },
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
  silver_dagger: {
    type: "combat_equipment",
    label: "Silver Dagger",
    stats: {
      attack: 37,
      speed: 24,
    },
    craft: {
      silver_ingot: 20,
      copper_ingot: 10,
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
    stats: {
      mining: 12,
    },
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
    stats: {
      mining: 8,
    },
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
    stats: {
      mining: 4,
    },
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
    stats: {
      defense: 10,
      health: 15,
    },
    craft: {
      coal: 5,
      chain: 15,
      shirt: 4,
    },
  },
  red_gloves: {
    type: "gloves",
    label: "Red Gloves",
    stats: {
      berry: 15,
      mush: 15,
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
    stats: {
      defense: 5,
    },
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
    stats: {
      defense: 5,
      air_damage: 5,
    },
  },
  bat_wing: {
    type: "monster-drop",
    label: "Bat Wing",
  },
  emerald: {
    type: "basic",
    label: "Emerald",
  },
  branch: {
    type: "basic",
    label: "Branch",
  },
  silver_greaves: {
    type: "combat_equipment",
    label: "Silver Greaves",
    stats: {
      health: 25,
      speed: 15,
    },
    craft: {
      volcanic_greaves: 1,
      silver_ingot: 30,
    },
  },
  volcanic_greaves: {
    type: "combat_equipment",
    label: "Volcanic Greaves",
    stats: {
      defense: 30,
      speed: 10,
    },
    craft: {
      iron_ingot: 1,
      emberfruit: 30,
      coal: 8,
    },
  },
  emberfruit: {
    type: "material",
    label: "Emberfruit",
  },
  purple_cloak: {
    type: "combat_equipment",
    label: "Purple Cloak",
    stats: {
      health: 45,
      speed: 10,
    },
    craft: {
      purple_scarab: 4,
    },
  },
  purple_scarab: {
    type: "material",
    label: "Purple Scarab",
  },
};
