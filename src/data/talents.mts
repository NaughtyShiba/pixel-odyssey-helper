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
interface Talent {
  label: string;
  maxLvl: (props: MaxLevelProps) => number;
  enabled: boolean;
  multiplier: (props: MultiplierProps) => number;
}

export const talents: Record<TalentName, Talent> = {
  strength: {
    label: "Strength",
    enabled: true,
    maxLvl(props) {
      return 99 + (props.talentsLevels.strength_mastery ?? 0);
    },
    multiplier() {
      return 1;
    },
  },
  defense: {
    label: "Defense",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  agility: {
    label: "Agility",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  hp: {
    label: "HP",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  luck: {
    label: "Luck",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  mana: {
    label: "Mana",
    enabled: true,
    maxLvl() {
      return 49;
    },
    multiplier() {
      return 1;
    },
  },
  strength_mastery: {
    label: "Strength Mastery",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  defense_expertise: {
    label: "Defense Expertise",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  first_strike: {
    label: "First Strike",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  hp_expertise: {
    label: "HP %",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  number_of_dice: {
    label: "Number of Dice",
    enabled: true,
    maxLvl() {
      return 33;
    },
    multiplier() {
      return 1;
    },
  },
  mana_expertise: {
    label: "Mana %",
    enabled: true,
    maxLvl() {
      return 49;
    },
    multiplier() {
      return 1;
    },
  },
  critical_chance: {
    label: "Critical Chance",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  berserk: {
    label: "Berserk",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  meditation_reward: {
    label: "Meditation Reward",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  willpower: {
    label: "Willpower",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier(props) {
      return (Math.log(props.wisdom) * Math.LOG10E + 1) | 0;
    },
  },
  bleed_damage: {
    label: "Bleed Damage",
    enabled: false,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  mana_regen: {
    label: "Mana Regen",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  critical_damage: {
    label: "Critical Damage",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  angels_dare: {
    label: "Angels Dare",
    enabled: false,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  fire_proficiency: {
    label: "Fire Proficiency",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  fire_resistance: {
    label: "Fire Resistance",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  water_proficiency: {
    label: "Water Proficiency",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  water_resistance: {
    label: "Water Resistance",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  air_proficiency: {
    label: "Air Proficiency",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  air_resistance: {
    label: "Air Resistance",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  earth_proficiency: {
    label: "Earth Proficiency",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  earth_resistance: {
    label: "Earth Resistance",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier() {
      return 1;
    },
  },
  damage_per_kill: {
    label: "Damage Per Kill",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier(props) {
      return (Math.log(props.pvpKills) * Math.LOG10E + 1) | 0;
    },
  },
  pride: {
    label: "Pride",
    enabled: true,
    maxLvl() {
      return 99;
    },
    multiplier(props) {
      return Math.floor(props.coliseumTrophies / 100);
    },
  },
};
