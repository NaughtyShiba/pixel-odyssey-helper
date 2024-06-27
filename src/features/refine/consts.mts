import type { CharmsIDs } from "@/data/items.mjs";

export const chancePerLevel = {
  2: 100,
  3: 60,
  4: 30,
  5: 20,
  6: 10,
  7: 3,
  8: 5,
  9: 1,
  10: 0.5,
};

export const goldPerLevel = {
  2: 250,
  3: 500,
  4: 750,
  5: 1000,
  6: 1250,
  7: 1500,
  8: 1750,
  9: 2000,
  10: 3000,
};

export const charmIncreaseRatio: Record<CharmsIDs, number> = {
  rabbits_foot: 2,
  wishbone: 3,
  clover: 4,
};

export const optimalCharmPath: Record<number, Record<CharmsIDs, number>> = {
  2: { rabbits_foot: 0, clover: 0, wishbone: 0 },
  3: { rabbits_foot: 1, clover: 0, wishbone: 0 },
  4: { rabbits_foot: 0, clover: 1, wishbone: 0 },
  5: { rabbits_foot: 1, clover: 0, wishbone: 1 },
  6: { rabbits_foot: 0, clover: 1, wishbone: 1 },
  7: { rabbits_foot: 1, clover: 1, wishbone: 1 },
  8: { rabbits_foot: 0, clover: 1, wishbone: 2 },
  9: { rabbits_foot: 0, clover: 2, wishbone: 2 },
  10: { rabbits_foot: 1, clover: 2, wishbone: 2 },
};
