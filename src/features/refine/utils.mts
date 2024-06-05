import type { ItemType } from "@/data/items.mjs";
import { stats } from "@/features/stats/const.mjs";
import { mapObject } from "@/lib/fn/map-object.mjs";
import type { StatType } from "../stats/types.mts";

const MAX_LEVEL = 10;
const MINIMAL_BONUS_INCREASE = 2;

const getRatePerStatType = (stat: string | StatType) =>
  stats[stat as StatType].refineBonus;

interface CalculateOptimalPerfectRefineProps {
  levelOneStats: Partial<Record<StatType, number>>;
  type: ItemType;
}
export function calculateOptimalPerfectRefine(
  props: CalculateOptimalPerfectRefineProps,
) {
  let totalItemsNeeded = 2;
  const statsAtLevel: Record<number, Partial<Record<StatType, number>>> = {
    1: props.levelOneStats,
    2: Object.fromEntries(
      Object.entries(props.levelOneStats).map(([stat, val]) => [
        stat,
        val +
          Math.max(
            Math.floor((val / 100) * getRatePerStatType(stat)),
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
      stats: Partial<Record<StatType, number>>;
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
      const newStats = Object.fromEntries(
        Object.entries(statsAtLevel[level - 1]).map(([stat, val]) => [
          stat,
          val +
            Math.max(
              Math.floor(
                (statsAtLevel[tryLevel][stat as StatType]! / 100) *
                  getRatePerStatType(stat),
              ),
              MINIMAL_BONUS_INCREASE,
            ),
        ]),
      );
      if (
        Object.entries(newStats).find(
          ([stat, val]) => val > (potentialNewStats[stat as StatType] ?? 0),
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

interface CalculateImperfectRefine {
  levelOneStats: Partial<Record<StatType, number>>;
}
export function calculateImperfectRefine(props: CalculateImperfectRefine) {
  const statsAtLevel: Record<number, Partial<Record<StatType, number>>> = {
    1: props.levelOneStats,
  };

  for (let targetLevel = 2; targetLevel <= 10; targetLevel++) {
    const tmp = statsAtLevel[targetLevel - 1];
    const newStats = mapObject(tmp, (stat, val: number) => {
      return (val! +
        Math.max(
          Math.floor(
            (props.levelOneStats[stat as StatType]! / 100) *
              getRatePerStatType(stat),
          ),
          2,
        )) as number;
    });
    statsAtLevel[targetLevel] = newStats;
  }

  return statsAtLevel;
}
