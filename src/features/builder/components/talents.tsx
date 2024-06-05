import { Input } from "@/components/ui/input";
import {
  MonsterHunterTalentName,
  monsterHunterTalents,
} from "@/data/monster-hunter.mjs";
import { TalentName, talents } from "@/data/talents.mjs";
import { useBuilder } from "../context";

const talentsImages: Record<TalentName, string> = {
  strength: new URL("@/assets/talents/str.png", import.meta.url).href,
  defense: new URL("@/assets/talents/defense.png", import.meta.url).href,
  agility: new URL("@/assets/talents/speed.png", import.meta.url).href,
  hp: new URL("@/assets/talents/hp.png", import.meta.url).href,
  luck: new URL("@/assets/talents/luck.png", import.meta.url).href,
  mana: new URL("@/assets/talents/manamax.png", import.meta.url).href,
  strength_mastery: new URL(
    "@/assets/talents/maxstrengthlevel.png",
    import.meta.url,
  ).href,
  defense_expertise: new URL("@/assets/talents/defensex.png", import.meta.url)
    .href,
  first_strike: new URL("@/assets/talents/swordprof.png", import.meta.url).href,
  hp_expertise: new URL("@/assets/talents/hpx.png", import.meta.url).href,
  number_of_dice: new URL(
    "@/assets/talents/actionsperstep.png",
    import.meta.url,
  ).href,
  mana_expertise: new URL("@/assets/talents/manax.png", import.meta.url).href,
  critical_chance: new URL("@/assets/talents/critres.png", import.meta.url)
    .href,
  berserk: new URL("@/assets/talents/berserkx.png", import.meta.url).href,
  meditation_reward: new URL(
    "@/assets/talents/meditationreward.png",
    import.meta.url,
  ).href,
  willpower: new URL("@/assets/talents/meditationstrength.png", import.meta.url)
    .href,
  bleed_damage: new URL("@/assets/talents/bleeddmg.png", import.meta.url).href,
  mana_regen: new URL("@/assets/talents/manaregen.png", import.meta.url).href,
  critical_damage: new URL("@/assets/talents/critdmg.png", import.meta.url)
    .href,
  angels_dare: new URL("@/assets/talents/angel.png", import.meta.url).href,
  fire_proficiency: new URL("@/assets/talents/fireprof.png", import.meta.url)
    .href,
  fire_resistance: new URL("@/assets/talents/fireres.png", import.meta.url)
    .href,
  water_proficiency: new URL("@/assets/talents/iceprof.png", import.meta.url)
    .href,
  water_resistance: new URL("@/assets/talents/iceres.png", import.meta.url)
    .href,
  air_proficiency: new URL("@/assets/talents/windprof.png", import.meta.url)
    .href,
  air_resistance: new URL("@/assets/talents/windres.png", import.meta.url).href,
  earth_proficiency: new URL("@/assets/talents/earthprof.png", import.meta.url)
    .href,
  earth_resistance: new URL("@/assets/talents/earthres.png", import.meta.url)
    .href,
  damage_per_kill: new URL("@/assets/talents/dmgperkill.png", import.meta.url)
    .href,
  pride: new URL("@/assets/talents/trophiehp.png", import.meta.url).href,
};

const monsterHunterTalentsImages: Record<MonsterHunterTalentName, string> = {
  necklace: new URL("@/assets/monster-hunter/necklace.png", import.meta.url)
    .href,
  heart: new URL("@/assets/monster-hunter/hp.png", import.meta.url).href,
  instinct: new URL("@/assets/monster-hunter/hunt.png", import.meta.url).href,
  reflexes: new URL("@/assets/monster-hunter/spd.png", import.meta.url).href,
  wrath: new URL("@/assets/monster-hunter/dmg.png", import.meta.url).href,
};

export function Talents() {
  const { state, dispatch } = useBuilder();
  return (
    <>
      <div className="grid grid-cols-5">
        {Object.keys(talents).map((talent) => (
          <div className="flex" key={talent}>
            <img
              className="w-8 h-8"
              src={talentsImages[talent as TalentName]}
            />
            <Input
              id={talent}
              type="number"
              min="1"
              max={talents[talent as TalentName].maxLvl({
                talentsLevels: state.talentsLevels,
              })}
              value={state.talentsLevels[talent as TalentName]}
              onChange={(e) => {
                dispatch({
                  type: "set_talent",
                  property: talent as TalentName,
                  value: parseInt(e.target.value),
                });
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5">
        {Object.keys(monsterHunterTalents).map((talent) => (
          <div className="flex" key={talent}>
            <img
              className="w-8 h-8"
              src={
                monsterHunterTalentsImages[talent as MonsterHunterTalentName]
              }
            />
            <Input
              id={talent}
              type="number"
              min="1"
              max="99"
              value={
                state.monsterHunterTalentsLevels[
                  talent as MonsterHunterTalentName
                ]
              }
              onChange={(e) => {
                dispatch({
                  type: "set_monster_hunter",
                  property: talent as MonsterHunterTalentName,
                  value: parseInt(e.target.value),
                });
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
