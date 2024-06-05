import type { StatType } from "@/features/stats/types.mjs";
import {
  MonsterHunterTalentsLevels,
  ProfileEquipment,
  ProfileStats,
  TalentsLevels,
} from "./types";
import { Item } from "@/data/items.mjs";
import { talents } from "@/features/talents/const.mts";

const BASE_STATS: Record<StatType, number> = {
  defense: 15,
  mana: 25,
  mana_regen: 2,
  attack: 10,
  health: 50,
  speed: 1,
  crit_chance: 2,
  crit_damage: 100,

  air_damage: 0,
  air_defense: 0,
  berry: 0,
  earth_damage: 0,
  earth_defense: 0,
  fire_damage: 0,
  fire_defense: 0,
  luck: 0,
  mining: 0,
  mush: 0,
  water_damage: 0,
  water_defense: 0,
};

interface CalculateStatsProps {
  profile: ProfileStats;
  talentsLevels: TalentsLevels;
  monsterHunterTalentsLevels: MonsterHunterTalentsLevels;
  equipment: ProfileEquipment;
}
export function calculateStats(
  props: CalculateStatsProps,
): Array<{ name: StatType; base: number; bonus: string; total: number }> {
  const baseStats = structuredClone(BASE_STATS);
  const statsPercentageBonus: Partial<Record<StatType, number>> = {};

  // Add Equipments stats
  Object.values(props.equipment).forEach((item: Item | null) => {
    if (!item || !item.stats) return;
    Object.entries(item.stats).forEach(([stat, value]) => {
      baseStats[stat as StatType] += value;
    });
  });

  // Percentage bonuses from monster hunter
  statsPercentageBonus.speed = props.monsterHunterTalentsLevels.reflexes * 0.5;

  // Add non-percent monster hunter stats
  baseStats.attack += props.monsterHunterTalentsLevels.wrath * 0.5;
  baseStats.health += props.monsterHunterTalentsLevels.heart;
  baseStats.defense += props.monsterHunterTalentsLevels.necklace;

  // Percentage bonuses from talents
  statsPercentageBonus.defense = props.talentsLevels.defense_expertise;
  statsPercentageBonus.health = props.talentsLevels.hp_expertise;
  statsPercentageBonus.mana = props.talentsLevels.mana_expertise;
  statsPercentageBonus.attack =
    props.talentsLevels.willpower *
    0.2 *
    talents.willpower.multiplier(props.profile);
  statsPercentageBonus.attack +=
    props.talentsLevels.damage_per_kill *
    0.25 *
    talents.damage_per_kill.multiplier(props.profile);
  statsPercentageBonus.health +=
    props.talentsLevels.pride * 0.02 * talents.pride.multiplier(props.profile);

  // Add stats bonuses from talentts
  baseStats.attack += props.talentsLevels.strength;
  baseStats.defense += props.talentsLevels.defense;
  baseStats.speed += props.talentsLevels.agility * 1.5;
  baseStats.luck += props.talentsLevels.luck;
  baseStats.mana += props.talentsLevels.mana * 0.25;
  baseStats.crit_chance += props.talentsLevels.critical_chance * 0.5;
  baseStats.mana_regen += props.talentsLevels.mana_regen * 0.2;
  baseStats.crit_damage += props.talentsLevels.critical_damage * 2;

  return Object.entries(baseStats).map(([statType, baseStat]) => ({
    name: statType as StatType,
    base: baseStat,
    bonus: `${statsPercentageBonus[statType as StatType] ?? 0}%`,
    total:
      baseStat *
      ((100 + (statsPercentageBonus[statType as StatType] ?? 0)) / 100),
  }));
}
