export type StatType =
  | "attack"
  | "defense"
  | "mana"
  | "health"
  | "speed"
  | "luck"
  | "air_damage"
  | "air_defense"
  | "fire_damage"
  | "fire_defense"
  | "earth_damage"
  | "earth_defense"
  | "water_damage"
  | "water_defense"
  | "crit_damage"
  | "crit_chance"
  | "mining"
  | "berry"
  | "mush";

export interface Stat {
  label: string;
  refineBonus: number;
}

export const stats: Record<StatType, Stat> = {
  air_damage: { label: "Air Damage", refineBonus: 25 },
  air_defense: { label: "Air Defense", refineBonus: 25 },
  attack: { label: "Attack", refineBonus: 25 },
  defense: { label: "Defense", refineBonus: 25 },
  earth_damage: { label: "Earth Damage", refineBonus: 25 },
  earth_defense: { label: "Earth Defense", refineBonus: 25 },
  fire_damage: { label: "Fire Damage", refineBonus: 25 },
  fire_defense: { label: "Fire Defense", refineBonus: 25 },
  health: { label: "Health", refineBonus: 25 },
  luck: { label: "Luck", refineBonus: 25 },
  mana: { label: "Mana", refineBonus: 25 },
  speed: { label: "Speed", refineBonus: 25 },
  water_damage: { label: "Water Damage", refineBonus: 25 },
  water_defense: { label: "Water Defense", refineBonus: 25 },
  crit_chance: { label: "Crit Chance %", refineBonus: 18 },
  crit_damage: { label: "Crit Damage", refineBonus: 18 },
  mining: { label: "Mining", refineBonus: 12.5 },
  berry: { label: "Berry", refineBonus: 12.5 },
  mush: { label: "Mush", refineBonus: 12.5 },
};
