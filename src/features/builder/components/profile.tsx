import { Input } from "@/components/ui/input";
import { useBuilder } from "../context";
import { StatType, stats } from "@/data/stats.mjs";
import { talents } from "@/data/talents.mjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export function Profile() {
  const { state, dispatch } = useBuilder();

  const baseStats = structuredClone(BASE_STATS);
  const statsPercentageBonus: Partial<Record<StatType, number>> = {};

  // Add Equipments stats
  Object.values(state.equipment).forEach((item) => {
    if (!item || !item.stats) return;
    Object.entries(item.stats).forEach(([stat, value]) => {
      baseStats[stat as StatType] += value;
    });
  });

  // Percentage bonuses from monster hunter
  statsPercentageBonus.speed = state.monsterHunterTalentsLevels.reflexes * 0.5;

  // Add non-percent monster hunter stats
  baseStats.attack += state.monsterHunterTalentsLevels.wrath * 0.5;
  baseStats.health += state.monsterHunterTalentsLevels.heart;
  baseStats.defense += state.monsterHunterTalentsLevels.necklace;

  // Percentage bonuses from talents
  statsPercentageBonus.defense = state.talentsLevels.defense_expertise;
  statsPercentageBonus.health = state.talentsLevels.hp_expertise;
  statsPercentageBonus.mana = state.talentsLevels.mana_expertise;
  statsPercentageBonus.attack =
    state.talentsLevels.willpower *
    0.2 *
    talents.willpower.multiplier(state.profile);
  statsPercentageBonus.attack +=
    state.talentsLevels.damage_per_kill *
    0.25 *
    talents.damage_per_kill.multiplier(state.profile);
  statsPercentageBonus.health +=
    state.talentsLevels.pride * 0.02 * talents.pride.multiplier(state.profile);

  // Add stats bonuses from talentts
  baseStats.attack += state.talentsLevels.strength;
  baseStats.defense += state.talentsLevels.defense;
  baseStats.speed += state.talentsLevels.agility * 1.5;
  baseStats.luck += state.talentsLevels.luck;
  baseStats.mana += state.talentsLevels.mana * 0.25;
  baseStats.crit_chance += state.talentsLevels.critical_chance * 0.5;
  baseStats.mana_regen += state.talentsLevels.mana_regen * 0.2;
  baseStats.crit_damage += state.talentsLevels.critical_damage * 2;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          type="number"
          placeholder="Coliseum Trophies"
          value={state.profile.coliseumTrophies}
          onChange={(e) => {
            dispatch({
              type: "set_profile",
              property: "coliseumTrophies",
              value: parseInt(e.target.value),
            });
          }}
        />
        <Input
          type="number"
          placeholder="PVP Kills"
          value={state.profile.pvpKills}
          onChange={(e) => {
            dispatch({
              type: "set_profile",
              property: "pvpKills",
              value: parseInt(e.target.value),
            });
          }}
        />
        <Input
          type="number"
          placeholder="Wisdom"
          value={state.profile.wisdom}
          onChange={(e) => {
            dispatch({
              type: "set_profile",
              property: "wisdom",
              value: parseInt(e.target.value),
            });
          }}
        />
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Stat</TableHead>
              <TableHead>Base Value</TableHead>
              <TableHead>Bonus</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(baseStats).map(([statName, baseValue]) => (
              <TableRow key={statName}>
                <TableCell>{stats[statName as StatType].label}</TableCell>
                <TableCell>{baseValue}</TableCell>
                <TableCell>
                  {statsPercentageBonus[statName as StatType]}
                </TableCell>
                <TableCell>
                  {baseValue *
                    (1 + (statsPercentageBonus[statName as StatType] ?? 1))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
