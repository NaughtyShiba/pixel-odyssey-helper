import { Stat, Type } from "@/data/items.mjs";

const MAX_LEVEL = 10;
const MINIMAL_BONUS_INCREASE = 2;
const RATE_PER_STAT: Partial<Record<Stat, number>> = {
  air_damage: 25,
  air_defense: 25,
  attack: 25,
  defense: 25,
  earth_damage: 25,
  earth_defense: 25,
  fire_damage: 25,
  fire_defense: 25,
  health: 25,
  luck: 25,
  mana: 25,
  speed: 25,
  water_damage: 25,
  water_defense: 25,
  crit_chance: 18,
  crit_damage: 18,
  mining: 12.5,
  berry: 12.5,
  mush: 12.5,
};
interface CalculateOptimalPerfectRefineProps {
  levelOneStats: Partial<Record<Stat, number>>;
  type: Type;
}
export function calculateOptimalPerfectRefine(
  props: CalculateOptimalPerfectRefineProps,
) {
  let totalItemsNeeded = 2;
  const statsAtLevel: Record<number, Partial<Record<Stat, number>>> = {
    1: props.levelOneStats,
    2: Object.fromEntries(
      Object.entries(props.levelOneStats).map(([stat, val]) => [
        stat,
        val +
          Math.max(
            Math.floor((val / 100) * RATE_PER_STAT[stat as Stat]!),
            MINIMAL_BONUS_INCREASE,
          ),
      ]),
    ),
  };
  const requiredForPerfectRefine: Record<
    number,
    {
      minimumSourceItemLevelNeeded: string;
      totalItemsNeeded: number;
      stats: Partial<Record<Stat, number>>;
    }
  > = {
    1: {
      minimumSourceItemLevelNeeded: "-",
      totalItemsNeeded: 1,
      stats: statsAtLevel[1],
    },
    2: {
      minimumSourceItemLevelNeeded: "1",
      totalItemsNeeded,
      stats: statsAtLevel[2],
    },
  };

  for (let level = 3; level < MAX_LEVEL + 1; level++) {
    let minimalSourcePerfectRefineLevel = 1;
    let potentialNewStats = statsAtLevel[level - 2];
    for (let tryLevel = 1; tryLevel < level; tryLevel++) {
      // const newStats = statsAtLevel[level - 1].map((val, statIndex) => {
      //   const increaseBy = Math.max(
      //     Math.floor((statsAtLevel[tryLevel][statIndex] / 100) * rate),
      //     MINIMAL_BONUS_INCREASE,
      //   );
      //   return val + increaseBy;
      // });
      const newStats = Object.fromEntries(
        Object.entries(statsAtLevel[level - 1]).map(([stat, val]) => [
          stat,
          val +
            Math.max(
              Math.floor(
                (statsAtLevel[tryLevel][stat as Stat]! / 100) *
                  RATE_PER_STAT[stat as Stat]!,
              ),
              MINIMAL_BONUS_INCREASE,
            ),
        ]),
      );
      if (
        Object.entries(newStats).find(
          ([stat, val]) => val > potentialNewStats[stat as Stat]!,
        )
      ) {
        potentialNewStats = newStats;
        minimalSourcePerfectRefineLevel = tryLevel;
      }
    }

    totalItemsNeeded +=
      requiredForPerfectRefine[minimalSourcePerfectRefineLevel]
        ?.totalItemsNeeded ?? 1;
    statsAtLevel[level] = potentialNewStats;
    requiredForPerfectRefine[level] = {
      minimumSourceItemLevelNeeded: minimalSourcePerfectRefineLevel.toString(),
      totalItemsNeeded,
      stats: potentialNewStats,
    };
  }
  return requiredForPerfectRefine;
}
