import { ArrayElement } from "@/lib/ts/array-element.mjs";
import type { StatType } from "../features/stats/types.mjs";

export const oresIDs = [
  "coal",
  "iron_ore",
  "copper_ore",
  "gold_ore",
  "silver_ore",
  "platinum_ore",
] as const;
export type OresIDs = ArrayElement<typeof oresIDs>;

export const ingotsIDs = [
  "iron_ingot",
  "copper_ingot",
  "gold_ingot",
  "silver_ingot",
  "platinum_ingot",
] as const;
export type IngotsIDs = ArrayElement<typeof ingotsIDs>;

export const materialsIDs = [
  "chain",
  "nail",
  "emberfruit",
  "bat_wing",
  "emerald",
  "branch",
  "bloodrose",
  "cyclops_hide",
  "snake_skin",
  "forest_horror_hide",
  "cyclops_eye",
  "dreamspore",
] as const;
export type MaterialsIDs = ArrayElement<typeof materialsIDs>;

export const ringsIDs = [
  "iron_ring",
  "air_iron_ring",
  "earth_iron_ring",
  "fire_iron_ring",
  "water_iron_ring",
  "attack_iron_ring",
  "crit_dmg_iron_ring",
  "crit_iron_ring",
  "flat_iron_ring",
  "mana_iron_ring",
  "gold_ring",
  "air_gold_ring",
  "earth_gold_ring",
  "fire_gold_ring",
  "water_gold_ring",
  "attack_gold_ring",
  "crit_dmg_gold_ring",
  "crit_gold_ring",
  "flat_gold_ring",
  "mana_gold_ring",
  "emerald_ring",
  "air_emerald_ring",
  "earth_emerald_ring",
  "fire_emerald_ring",
  "water_emerald_ring",
  "attack_emerald_ring",
  "crit_dmg_emerald_ring",
  "crit_emerald_ring",
  "flat_emerald_ring",
  "mana_emerald_ring",
  "platinum_ring",
  "earth_platinum_ring",
  "fire_platinum_ring",
] as const;
export type RingsIDs = ArrayElement<typeof ringsIDs>;

export const mainHandIDs = [
  "cool_stick",
  "wooden_sword",
  "club",
  "gold_sword",
  "vamp_blade_1",
  "vamp_blade_2",
  "vamp_blade_3",
  "iron_sword",
  "volcanic_sword",
  "silver_sword",
  "silver_dagger",
  "platinum_sword",
  "platinum_dagger",
  "earth_staff",
  "goblin_mace",
  "scythe",
  "molten_axe",
  "molten_sword",
  "soldier_sword",
] as const;
export type MainHandIDs = ArrayElement<typeof mainHandIDs>;

export const offHandIDs = [
  "volcanic_shield",
  "platinum_shield",
  "goblin_shield",
  "pink_shield",
  "soldier_shield",
] as const;
export type OffHandIDs = ArrayElement<typeof offHandIDs>;

export const headwearIDs = [
  "wooden_helmet",
  "iron_bucket",
  "gold_helmet",
  "volcanic_helmet",
  "silver_helmet",
  "platinum_helmet",
  "soldier_helmet",
  "santa_hat",
  "bunny_ears",
] as const;
export type HeadwearIDs = ArrayElement<typeof headwearIDs>;

export const necklacesIDs = [
  "copper_mining_necklace",
  "gold_mining_necklace",
  "shroom_seaker",
  "lioras_necklace",
] as const;
export type NecklacesIDs = ArrayElement<typeof necklacesIDs>;

export const chestwearsIDs = [
  "wooden_chestplate",
  "chainmail_shirt",
  "gold_chestplate",
  "volcanic_chestplate",
  "silver_chestplate",
  "platinum_chestplate",
  "draculas_cloak",
  "dark_blue_cloak",
  "long_sleeve_shirt",
  "purple_cloak",
  "soldier_chest",
  "shirt",
] as const;
export type ChestwearsIDs = ArrayElement<typeof chestwearsIDs>;

export const legwearsIDs = [
  "wooden_legwear",
  "gold_greaves",
  "volcanic_greaves",
  "silver_greaves",
  "platinum_greaves",
  "wooden_legwear",
  "soldier_legwear",
] as const;
export type LegwearsIDs = ArrayElement<typeof legwearsIDs>;

export const amuletsIDs = ["sun_demon_amulet"] as const;
export type AmuletsIDs = ArrayElement<typeof amuletsIDs>;

export const toolsIDs = [
  "iron_pickaxe",
  "copper_pickaxe",
  "gold_pickaxe",
  "mana_skull",
  "great_mana_skull",
  "basic_gloves",
  "snake_gloves",
  "red_gloves",
  "silver_pickaxe",
  "telescope",
] as const;
export type ToolsIDs = ArrayElement<typeof toolsIDs>;

export const footwearIDs = [
  "wooden_shoes",
  "gold_boots",
  "volcanic_boots",
  "silver_batons",
  "platinum_boots",
  "warm_boots",
  "soldier_boots",
  "magic_loafers",
  "sandals",
  "warm_boots",
] as const;
export type FootwearIDs = ArrayElement<typeof footwearIDs>;

export type ItemName =
  | OresIDs
  | IngotsIDs
  | MaterialsIDs
  | RingsIDs
  | MainHandIDs
  | OffHandIDs
  | HeadwearIDs
  | NecklacesIDs
  | ChestwearsIDs
  | LegwearsIDs
  | AmuletsIDs
  | ToolsIDs
  | FootwearIDs
  | "copper_ore"
  | "bat_wing"
  | "emerald"
  | "branch"
  | "purple_scarab";

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
  | "monster_drop"
  | "mushroom";

export type Slot =
  | "earrings"
  | "headwear"
  | "necklace"
  | "mainhand"
  | "chestwear"
  | "offhand"
  | "ring"
  | "legwear"
  | "amulet"
  | "tool"
  | "footwear";

export interface Item {
  type: ItemType;
  slot?: Slot;
  label: string;
  craft?: Partial<Record<ItemName, number>>;
  stats?: Partial<Record<StatType, number>>;
}

export const itemTypeLabel: Record<ItemType, string> = {
  tool: "Tool",
  monster_drop: "Monster Drop",
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
  mushroom: "Mushroom",
};
export const rings: Record<RingsIDs, Item> = {
  iron_ring: {
    type: "ring",
    label: "Ring",
    stats: {
      defense: 3,
    },
  },
  air_iron_ring: {
    type: "ring",
    label: "Air Iron Ring",
    stats: {
      air_defense: 5,
    },
  },
  earth_iron_ring: {
    type: "ring",
    label: "Earth Iron Ring",
    stats: {
      earth_defense: 5,
    },
  },
  fire_iron_ring: {
    type: "ring",
    label: "Fire Iron Ring",
    stats: {
      fire_defense: 5,
    },
  },
  water_iron_ring: {
    type: "ring",
    label: "Water Iron Ring",
    stats: {
      water_defense: 5,
    },
  },
  attack_iron_ring: {
    type: "ring",
    label: "Attack Iron Ring",
    stats: {
      attack: 5,
    },
  },
  crit_dmg_iron_ring: {
    type: "ring",
    label: "Crit Damage Iron Ring",
    stats: {
      crit_damage: 5,
    },
  },
  crit_iron_ring: {
    type: "ring",
    label: "Crit Iron Ring",
    stats: {
      crit_chance: 5,
    },
  },
  flat_iron_ring: {
    type: "ring",
    label: "Flat Iron Ring",
    stats: {
      defense: 5,
    },
  },
  mana_iron_ring: {
    type: "ring",
    label: "Mana Iron Ring",
    stats: {
      mana: 3,
    },
  },
  gold_ring: {
    type: "ring",
    label: "Gold Ring",
    stats: {
      defense: 8,
    },
  },
  air_gold_ring: {
    type: "ring",
    label: "Air Gold Ring",
    stats: {
      air_defense: 8,
    },
  },
  earth_gold_ring: {
    type: "ring",
    label: "Earth Gold Ring",
    stats: {
      earth_defense: 8,
    },
  },
  fire_gold_ring: {
    type: "ring",
    label: "Fire Gold Ring",
    stats: {
      fire_defense: 8,
    },
  },
  water_gold_ring: {
    type: "ring",
    label: "Water Gold Ring",
    stats: {
      water_defense: 8,
    },
  },
  attack_gold_ring: {
    type: "ring",
    label: "Attack Gold Ring",
    stats: {
      attack: 8,
    },
  },
  crit_dmg_gold_ring: {
    type: "ring",
    label: "Crit Damage Gold Ring",
    stats: {
      crit_damage: 8,
    },
  },
  crit_gold_ring: {
    type: "ring",
    label: "Crit Gold Ring",
    stats: {
      crit_chance: 8,
    },
  },
  flat_gold_ring: {
    type: "ring",
    label: "Flat Gold Ring",
    stats: {
      defense: 8,
    },
  },
  mana_gold_ring: {
    type: "ring",
    label: "Mana Gold Ring",
    stats: {
      mana: 5,
    },
  },
  emerald_ring: {
    type: "ring",
    label: "Emerald Ring",
    stats: {
      defense: 12,
    },
  },
  air_emerald_ring: {
    type: "ring",
    label: "Air Emerald Ring",
    stats: {
      air_defense: 12,
    },
  },
  earth_emerald_ring: {
    type: "ring",
    label: "Earth Emerald Ring",
    stats: {
      earth_defense: 12,
    },
  },
  fire_emerald_ring: {
    type: "ring",
    label: "Fire Emerald Ring",
    stats: {
      fire_defense: 12,
    },
  },
  water_emerald_ring: {
    type: "ring",
    label: "Water Emerald Ring",
    stats: {
      water_defense: 12,
    },
  },
  attack_emerald_ring: {
    type: "ring",
    label: "Attack Emerald Ring",
    stats: {
      attack: 12,
    },
  },
  crit_dmg_emerald_ring: {
    type: "ring",
    label: "Crit Damage Emerald Ring",
    stats: {
      crit_damage: 12,
    },
  },
  crit_emerald_ring: {
    type: "ring",
    label: "Crit Emerald Ring",
    stats: {
      crit_chance: 12,
    },
  },
  flat_emerald_ring: {
    type: "ring",
    label: "Flat Emerald Ring",
    stats: {
      defense: 12,
    },
  },
  mana_emerald_ring: {
    type: "ring",
    label: "Mana Emerald Ring",
    stats: {
      mana: 8,
    },
  },
  platinum_ring: {
    type: "ring",
    label: "Platinum Ring",
    stats: {
      defense: 20,
    },
  },
  earth_platinum_ring: {
    type: "ring",
    label: "Earth Platinum Ring",
    stats: {
      earth_defense: 20,
    },
  },
  fire_platinum_ring: {
    type: "ring",
    label: "Fire Platinum Ring",
    stats: {
      fire_defense: 20,
    },
  },
};
export const ores: Record<OresIDs, Item> = {
  coal: {
    type: "ore",
    label: "Coal",
  },
  platinum_ore: {
    type: "ore",
    label: "Platinum Ore",
  },
  silver_ore: {
    type: "ore",
    label: "Silver Ore",
  },
  gold_ore: {
    type: "ore",
    label: "Gold Ore",
  },
  copper_ore: {
    type: "ore",
    label: "Copper Ore",
  },
  iron_ore: {
    type: "ore",
    label: "Iron Ore",
  },
};
export const ingots: Record<IngotsIDs, Item> = {
  platinum_ingot: {
    type: "ingot",
    label: "Platinum Ingot",
    craft: { platinum_ore: 3, coal: 5 },
  },
  silver_ingot: {
    type: "ingot",
    label: "Silver Ingot",
    craft: { silver_ore: 4, coal: 5 },
  },
  gold_ingot: {
    type: "ingot",
    label: "Gold Ingot",
    craft: { gold_ore: 4, coal: 5 },
  },
  copper_ingot: {
    type: "ingot",
    label: "Copper Ingot",
    craft: { copper_ore: 3, coal: 3 },
  },
  iron_ingot: {
    type: "ingot",
    label: "Iron Ingot",
    craft: { iron_ore: 2, coal: 1 },
  },
};
export const materials: Record<MaterialsIDs, Item> = {
  chain: {
    type: "material",
    label: "Chain",
  },
  nail: {
    type: "material",
    label: "Nail",
  },
  emberfruit: {
    type: "material",
    label: "Emberfruit",
  },
  bat_wing: {
    type: "monster_drop",
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
  bloodrose: {
    type: "basic",
    label: "Bloodrose",
  },
  cyclops_eye: {
    type: "monster_drop",
    label: "Eyeball",
  },
  cyclops_hide: {
    type: "monster_drop",
    label: "Cyclops Hide",
  },
  snake_skin: {
    type: "monster_drop",
    label: "Snake Skin",
  },
  forest_horror_hide: {
    type: "monster_drop",
    label: "Forrest Horro Hide",
  },
  dreamspore: {
    type: "mushroom",
    label: "Dreamspore",
  },
};
export const mainhandEquipment: Record<MainHandIDs, Item> = {
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
      draculas_cloak: 1,
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
  cool_stick: {
    type: "combat_equipment",
    label: "Cool Stick",
    stats: {
      attack: 4,
    },
    craft: {
      branch: 5,
    },
  },
  wooden_sword: {
    type: "combat_equipment",
    label: "Wooden Sword",
    stats: {
      attack: 10,
      defense: 5,
    },
    craft: {
      branch: 25,
    },
  },
  club: {
    type: "combat_equipment",
    label: "Club",
    stats: {
      attack: 12,
    },
    craft: {
      branch: 15,
      nail: 5,
    },
  },
  gold_sword: {
    type: "combat_equipment",
    label: "Gold Sword",
    stats: {
      attack: 27,
    },
    craft: {
      gold_ingot: 15,
      emerald: 3,
    },
  },
  iron_sword: {
    type: "combat_equipment",
    label: "Iron Sword",
    stats: {
      attack: 10,
      defense: 10,
    },
    craft: {
      wooden_sword: 2,
      iron_ingot: 25,
    },
  },
  volcanic_sword: {
    type: "combat_equipment",
    label: "Volcanic Sword",
    stats: {
      attack: 46,
      defense: 21,
    },
    craft: {
      iron_sword: 2,
      iron_ingot: 10,
      emberfruit: 15,
      coal: 10,
    },
  },
  silver_sword: {
    type: "combat_equipment",
    label: "Silver Sword",
    stats: {
      attack: 49,
      defense: 40,
    },
    craft: {
      iron_sword: 1,
      silver_ingot: 25,
    },
  },
  platinum_sword: {
    type: "combat_equipment",
    label: "Platinum Sword",
    stats: {
      attack: 100,
      defense: 25,
    },
    craft: {
      platinum_ingot: 15,
    },
  },
  platinum_dagger: {
    type: "combat_equipment",
    label: "Platinum Dagger",
    stats: {
      attack: 30,
    },
    craft: {
      platinum_ingot: 10,
      bloodrose: 5,
    },
  },
  earth_staff: {
    type: "combat_equipment",
    label: "Earth Staff",
    stats: {
      attack: 30,
      mana: 15,
      earth_damage: 10,
    },
  },
  goblin_mace: {
    type: "combat_equipment",
    label: "Goblin Mace",
    stats: {
      attack: 32,
    },
  },
  molten_sword: {
    type: "combat_equipment",
    label: "Molten Sword",
    stats: {
      attack: 46,
      fire_damage: 14,
    },
  },
  molten_axe: {
    type: "combat_equipment",
    label: "Molten Axe",
    stats: {
      attack: 54,
      fire_damage: 8,
    },
  },
  soldier_sword: {
    type: "combat_equipment",
    label: "Soldier Sword",
    stats: {
      attack: 38,
      crit_chance: 10,
    },
  },
};
export const offhandEquipment: Record<OffHandIDs, Item> = {
  volcanic_shield: {
    type: "combat_equipment",
    label: "Volcanic Shield",
    stats: {
      defense: 64,
      health: 20,
    },
    craft: {
      iron_ingot: 15,
      emberfruit: 10,
      coal: 8,
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
  goblin_shield: {
    type: "combat_equipment",
    label: "Goblin Shield",
    stats: {
      attack: 5,
      defense: 35,
    },
  },
  pink_shield: {
    type: "combat_equipment",
    label: "Pink Shield",
    stats: {
      defense: 20,
      air_defense: 10,
    },
  },
  soldier_shield: {
    type: "combat_equipment",
    label: "Soldier Shield",
    stats: {
      defense: 18,
      fire_defense: 10,
    },
  },
};
export const headwearEquipment: Record<HeadwearIDs, Item> = {
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
  volcanic_helmet: {
    type: "combat_equipment",
    label: "Volcanic Helmet",
    stats: {
      defense: 60,
      health: 15,
    },
    craft: {
      iron_ingot: 15,
      emberfruit: 10,
      coal: 8,
    },
  },
  gold_helmet: {
    type: "combat_equipment",
    label: "Gold Helmet",
    stats: {
      defense: 10,
      health: 15,
    },
    craft: {
      gold_ingot: 15,
    },
  },
  silver_helmet: {
    type: "combat_equipment",
    label: "Silver Helmet",
    stats: {
      defense: 20,
      health: 25,
    },
    craft: {
      gold_helmet: 1,
      silver_ingot: 20,
    },
  },
  soldier_helmet: {
    type: "combat_equipment",
    label: "Soldier Helmet",
    stats: {
      defense: 22,
      health: 15,
    },
  },
  iron_bucket: {
    type: "combat_equipment",
    label: "Iron Bucket",
    stats: {
      defense: 15,
    },
    craft: {
      wooden_helmet: 4,
      iron_ingot: 15,
      coal: 5,
    },
  },
  wooden_helmet: {
    type: "combat_equipment",
    label: "Wooden Helmet",
    stats: {
      defense: 5,
    },
    craft: {
      branch: 50,
    },
  },
};
export const necklaceEquipment: Record<NecklacesIDs, Item> = {
  copper_mining_necklace: {
    type: "skill_necklace",
    label: "Cooper Mining Necklace",
    stats: {
      mining: 4,
    },
    craft: {
      copper_ingot: 25,
      emerald: 3,
    },
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
  shroom_seaker: {
    type: "skill_necklace",
    label: "Shroom Seeker",
    stats: {
      mush: 15,
    },
    craft: {
      dreamspore: 25,
      iron_ingot: 15,
    },
  },
  lioras_necklace: {
    type: "combat_necklace",
    label: "Liora's Necklace",
    stats: {
      health: 40,
    },
  },
};
export const chestwearEquipment: Record<ChestwearsIDs, Item> = {
  draculas_cloak: {
    type: "combat_equipment",
    label: "Dracula's Cloak",
    stats: {
      defense: 40,
      mana: 7,
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
  shirt: {
    type: "combat_equipment",
    label: "Shirt",
    stats: {
      defense: 5,
    },
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
  dark_blue_cloak: {
    type: "combat_equipment",
    label: "Dark Blue Cloak",
    stats: {
      defense: 10,
      earth_defense: 20,
    },
  },
  gold_chestplate: {
    type: "combat_equipment",
    label: "Gold Chestplate",
    stats: {
      defense: 20,
      health: 25,
    },
    craft: {
      chainmail_shirt: 5,
      gold_ingot: 20,
    },
  },
  long_sleeve_shirt: {
    type: "combat_equipment",
    label: "Long Sleeve Shirt",
    stats: {
      defense: 11,
      air_defense: 5,
    },
  },
  silver_chestplate: {
    type: "combat_equipment",
    label: "Silver Chestplate",
    stats: {
      defense: 60,
      health: 25,
    },
    craft: {
      chainmail_shirt: 1,
      silver_ingot: 35,
    },
  },
  soldier_chest: {
    type: "combat_equipment",
    label: "Soldier Chest",
    stats: {
      defense: 30,
      health: 20,
    },
  },
  volcanic_chestplate: {
    type: "combat_equipment",
    label: "Volcanic Chestplate",
    stats: {
      defense: 45,
      health: 32,
    },
    craft: {
      gold_chestplate: 2,
      iron_ingot: 15,
      emberfruit: 20,
      coal: 12,
    },
  },
  wooden_chestplate: {
    type: "combat_equipment",
    label: "Wooden Chestplate",
    stats: {
      health: 20,
    },
    craft: {
      branch: 20,
      iron_ingot: 4,
    },
  },
};
export const legwearEquipment: Record<LegwearsIDs, Item> = {
  wooden_legwear: {
    type: "combat_equipment",
    label: "Wooden Legwear",
    stats: {
      defense: 5,
    },
    craft: {
      branch: 30,
      iron_ingot: 4,
    },
  },
  gold_greaves: {
    type: "combat_equipment",
    label: "Gold Greaves",
    stats: {
      defense: 10,
      speed: 5,
    },
    craft: {
      gold_ingot: 20,
    },
  },
  soldier_legwear: {
    type: "combat_equipment",
    label: "Soldier Greaves",
    stats: {
      health: 25,
      speed: 10,
    },
  },
  platinum_greaves: {
    type: "combat_equipment",
    label: "Platinum Greaves",
    stats: {
      attack: 30,
      defense: 50,
    },
    craft: {
      platinum_ingot: 8,
      nail: 10,
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
      iron_ingot: 15,
      emberfruit: 10,
      coal: 8,
    },
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
};
export const amuletEquipment: Record<AmuletsIDs, Item> = {
  sun_demon_amulet: {
    type: "combat_equipment",
    label: "Sun Demon Amulet",
    stats: {
      fire_damage: 7,
      fire_defense: 14,
    },
  },
};
export const toolEquipment: Record<ToolsIDs, Item> = {
  telescope: {
    type: "tool",
    label: "Telescope",
    stats: {
      luck: 5,
    },
    craft: {
      gold_ingot: 25,
      cyclops_eye: 2,
    },
  },
  silver_pickaxe: {
    type: "tool",
    label: "Silver Pickaxe",
    craft: {
      silver_ingot: 5,
      gold_pickaxe: 1,
    },
    stats: {
      mining: 18,
    },
  },
  gold_pickaxe: {
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
  red_gloves: {
    type: "gloves",
    label: "Red Gloves",
    stats: {
      berry: 15,
      mush: 15,
    },
    craft: {
      forest_horror_hide: 20,
    },
  },
  basic_gloves: {
    type: "gloves",
    label: "Gloves",
    stats: {
      mush: 10,
    },
    craft: {
      cyclops_hide: 10,
    },
  },
  snake_gloves: {
    type: "gloves",
    label: "Snake Gloves",
    stats: {
      berry: 10,
    },
    craft: {
      snake_skin: 15,
    },
  },
  mana_skull: {
    type: "combat_equipment",
    label: "Mana Skull",
    stats: {
      mana: 5,
    },
  },
  great_mana_skull: {
    type: "combat_equipment",
    label: "Great Mana Skull",
    stats: {
      mana: 11,
    },
  },
};
export const footwearEquipment: Record<FootwearIDs, Item> = {
  wooden_shoes: {
    type: "combat_equipment",
    label: "Wooden Shoes",
    stats: { speed: 15 },
  },
  gold_boots: {
    type: "combat_equipment",
    label: "Gold Boots",
    stats: { defense: 12, speed: 8 },
    craft: { gold_ingot: 20 },
  },
  volcanic_boots: {
    type: "combat_equipment",
    label: "Volcanic Boots",
    stats: { defense: 20, speed: 15 },
    craft: {
      iron_ingot: 12,
      emberfruit: 5,
      coal: 5,
    },
  },
  silver_batons: {
    type: "combat_equipment",
    label: "Silver Batons",
    stats: { defense: 20, speed: 15 },
    craft: {
      warm_boots: 1,
      silver_ingot: 15,
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
  warm_boots: {
    type: "combat_equipment",
    label: "Warm Boots",
    stats: { defense: 10, fire_defense: 10 },
  },
  soldier_boots: {
    type: "combat_equipment",
    label: "Soldier Boots",
    stats: { defense: 17, speed: 8 },
  },
  magic_loafers: {
    type: "combat_equipment",
    label: "Magic Loafers",
    stats: { mana: 10, speed: 15 },
  },
  sandals: {
    type: "combat_equipment",
    label: "Sandals",
    stats: {
      defense: 5,
      air_damage: 5,
    },
  },
};

export const items: Record<ItemName, Item> = {
  purple_scarab: {
    type: "material",
    label: "Purple Scarab",
  },
  ...ores,
  ...ingots,
  ...materials,
  ...rings,
  ...mainhandEquipment,
  ...offhandEquipment,
  ...headwearEquipment,
  ...necklaceEquipment,
  ...chestwearEquipment,
  ...legwearEquipment,
  ...amuletEquipment,
  ...toolEquipment,
  ...footwearEquipment,
};
