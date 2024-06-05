import { StatType } from "./stats.mts";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

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
  "cooper_mining_necklace",
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
  | "platinum_greaves"
  | "platinum_boots"
  | "silver_pickaxe"
  | "golden_pickaxe"
  | "copper_pickaxe"
  | "copper_ore"
  | "iron_pickaxe"
  | "sandals"
  | "bat_wing"
  | "emerald"
  | "branch"
  | "telescope"
  | "silver_greaves"
  | "volcanic_greaves"
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
  | "monster_drop";

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
  },
  silver_ingot: {
    type: "ingot",
    label: "Silver Ingot",
  },
  gold_ingot: {
    type: "ingot",
    label: "Gold Ingot",
  },
  copper_ingot: {
    type: "ingot",
    label: "Copper Ingot",
  },
  iron_ingot: {
    type: "ingot",
    label: "Iron Ingot",
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
  },
  wooden_sword: {
    type: "combat_equipment",
    label: "Wooden Sword",
    stats: {
      attack: 10,
      defense: 5,
    },
  },
  club: {
    type: "combat_equipment",
    label: "Club",
    stats: {
      attack: 12,
    },
  },
  gold_sword: {
    type: "combat_equipment",
    label: "Gold Sword",
    stats: {
      attack: 27,
    },
  },
  iron_sword: {
    type: "combat_equipment",
    label: "Iron Sword",
    stats: {
      attack: 10,
      defense: 10,
    },
  },
  volcanic_sword: {
    type: "combat_equipment",
    label: "Volcanic Sword",
    stats: {
      attack: 46,
      defense: 21,
    },
  },
  silver_sword: {
    type: "combat_equipment",
    label: "Silver Sword",
    stats: {
      attack: 49,
      defense: 40,
    },
  },
  platinum_sword: {
    type: "combat_equipment",
    label: "Platinum Sword",
    stats: {
      attack: 100,
      defense: 25,
    },
  },
  platinum_dagger: {
    type: "combat_equipment",
    label: "Platinum Dagger",
    stats: {
      attack: 30,
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
  },
  gold_helmet: {
    type: "combat_equipment",
    label: "Gold Helmet",
    stats: {
      defense: 10,
      health: 15,
    },
  },
  silver_helmet: {
    type: "combat_equipment",
    label: "Silver Helmet",
    stats: {
      defense: 20,
      health: 25,
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
  },
  wooden_helmet: {
    type: "combat_equipment",
    label: "Wooden Helmet",
    stats: {
      defense: 5,
    },
  },
};

export const necklaceEquipment: Record<NecklacesIDs, Item> = {
  cooper_mining_necklace: {
    type: "skill_necklace",
    label: "Cooper Mining Necklace",
    stats: {
      mining: 4,
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
  },
  wooden_chestplate: {
    type: "combat_equipment",
    label: "Wooden Chestplate",
    stats: {
      health: 20,
    },
  },
};

export const items: Record<ItemName, Item> = {
  telescope: {
    type: "tool",
    label: "Telescope",
    stats: {
      luck: 5,
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
  },

  sandals: {
    type: "combat_equipment",
    label: "Sandals",
    stats: {
      defense: 5,
      air_damage: 5,
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
};
