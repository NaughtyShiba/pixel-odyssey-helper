export type TalentName =
  | "strength"
  | "defense"
  | "agility"
  | "hp"
  | "luck"
  | "mana"
  | "strength_mastery"
  | "defense_expertise"
  | "first_strike"
  | "hp_expertise"
  | "number_of_dice"
  | "mana_expertise"
  | "critical_chance"
  | "berserk"
  | "meditation_reward"
  | "willpower"
  | "bleed_damage"
  | "mana_regen"
  | "critical_damage"
  | "angels_dare"
  | "fire_proficiency"
  | "fire_resistance"
  | "water_proficiency"
  | "water_resistance"
  | "air_proficiency"
  | "air_resistance"
  | "earth_proficiency"
  | "earth_resistance"
  | "damage_per_kill"
  | "pride";

interface MaxLevelProps {
  talentsLevels: Record<TalentName, number>;
}
interface MultiplierProps {
  pvpKills: number;
  wisdom: number;
  coliseumTrophies: number;
}
export interface Talent {
  label: string;
  maxLvl: (props: MaxLevelProps) => number;
  enabled: boolean;
  multiplier: (props: MultiplierProps) => number;
}
