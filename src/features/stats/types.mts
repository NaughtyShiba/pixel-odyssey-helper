export type StatType =
  | "attack"
  | "defense"
  | "mana"
  | "mana_regen"
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
  image: string | null;
}
