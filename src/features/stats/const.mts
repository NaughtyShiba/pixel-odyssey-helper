import type { StatType, Stat } from "./types.mts";

export const stats: Record<StatType, Stat> = {
  air_damage: {
    label: "Air Damage",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_air.png", import.meta.url).href,
  },
  air_defense: {
    label: "Air Defense",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_air.png", import.meta.url).href,
  },
  attack: {
    label: "Attack",
    refineBonus: 25,
    image: new URL("@/assets/icons/strength.png", import.meta.url).href,
  },
  defense: {
    label: "Defense",
    refineBonus: 25,
    image: new URL("@/assets/icons/resistance.png", import.meta.url).href,
  },
  earth_damage: {
    label: "Earth Damage",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_earth.png", import.meta.url).href,
  },
  earth_defense: {
    label: "Earth Defense",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_earth.png", import.meta.url).href,
  },
  fire_damage: {
    label: "Fire Damage",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_fire.png", import.meta.url).href,
  },
  fire_defense: {
    label: "Fire Defense",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_fire.png", import.meta.url).href,
  },
  health: {
    label: "Health",
    refineBonus: 25,
    image: new URL("@/assets/icons/hp.png", import.meta.url).href,
  },
  luck: {
    label: "Luck",
    refineBonus: 25,
    image: new URL("@/assets/icons/luck.png", import.meta.url).href,
  },
  mana: {
    label: "Mana",
    refineBonus: 25,
    image: new URL("@/assets/icons/mana.png", import.meta.url).href,
  },
  mana_regen: {
    label: "Mana Regen",
    refineBonus: 25,
    image: new URL("@/assets/icons/mana.png", import.meta.url).href,
  },
  speed: {
    label: "Speed",
    refineBonus: 25,
    image: new URL("@/assets/icons/speed.png", import.meta.url).href,
  },
  water_damage: {
    label: "Water Damage",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_fire.png", import.meta.url).href,
  },
  water_defense: {
    label: "Water Defense",
    refineBonus: 25,
    image: new URL("@/assets/icons/elements_fire.png", import.meta.url).href,
  },
  crit_chance: {
    label: "Crit Chance %",
    refineBonus: 18,
    image: null,
  },
  crit_damage: {
    label: "Crit Damage",
    refineBonus: 18,
    image: null,
  },
  mining: {
    label: "Mining",
    refineBonus: 12.5,
    image: new URL("@/assets/icons/mining.png", import.meta.url).href,
  },
  berry: {
    label: "Berry",
    refineBonus: 12.5,
    image: null,
  },
  mush: {
    label: "Mush",
    refineBonus: 12.5,
    image: null,
  },
};
