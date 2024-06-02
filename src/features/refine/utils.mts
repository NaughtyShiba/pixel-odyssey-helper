import { Type } from "@/data/items.mjs";

const MAX_LEVEL = 10;
const MINIMAL_BONUS_INCREASE = 2;
const RATE_PER_TYPE: Partial<Record<Type, number>> = {
  tool: 12.5,
  ring: 18,
  skill_necklace: 12.5,
  combat_necklace: 25,
  combat_equipment: 25,
};
interface CalculateOptimalPerfectRefineProps {
  levelOneStats: number[];
  type: Type;
}
export function calculateOptimalPerfectRefine(
  props: CalculateOptimalPerfectRefineProps,
) {
  const rate = RATE_PER_TYPE[props.type] ?? 1;
  let totalItemsNeeded = 2;
  const statsAtLevel: Record<number, number[]> = {
    1: props.levelOneStats,
    2: props.levelOneStats.map(
      (val) =>
        val + Math.max(Math.floor((val / 100) * rate), MINIMAL_BONUS_INCREASE),
    ),
  };
  const requiredForPerfectRefine: Record<
    number,
    {
      minimumSourceItemLevelNeeded: string;
      totalItemsNeeded: number;
      stats: number[];
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
      const newStats = statsAtLevel[level - 1].map((val, statIndex) => {
        const increaseBy = Math.max(
          Math.floor((statsAtLevel[tryLevel][statIndex] / 100) * rate),
          MINIMAL_BONUS_INCREASE,
        );
        return val + increaseBy;
      });
      if (
        newStats.find((val, statIndex) => val > potentialNewStats[statIndex])
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
