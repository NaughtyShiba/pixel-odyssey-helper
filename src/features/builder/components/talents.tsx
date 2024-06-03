import { TalentName, talents } from "@/data/talents.mjs";

const images: Record<TalentName, string> = {
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

export function Talents() {
  return (
    <div className="grid grid-cols-5">
      {Object.keys(talents).map((talent) => (
        <div className="w-8 h-8" key={talent}>
          <img src={images[talent as TalentName]} />
        </div>
      ))}
    </div>
  );
}
