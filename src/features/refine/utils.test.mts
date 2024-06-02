import { describe, it, expect } from "vitest";
import { calculateOptimalPerfectRefine } from "./utils.mts";

describe("#calculateOptimalPerfectRefine()", () => {
  it("should calculate Silver Pickaxe minimal Perfect Refine Level 10 path", () => {
    expect(
      calculateOptimalPerfectRefine({ levelOneStats: [18], type: "tool" }),
    ).toEqual({
      1: {
        minimumSourceItemLevelNeeded: "-",
        totalItemsNeeded: 1,
        stats: [18],
      },
      2: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 2,
        stats: [20],
      },
      3: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 3,
        stats: [22],
      },
      4: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 4,
        stats: [24],
      },
      5: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 8,
        stats: [27],
      },
      6: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 12,
        stats: [30],
      },
      7: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 16,
        stats: [33],
      },
      8: {
        minimumSourceItemLevelNeeded: "7",
        totalItemsNeeded: 32,
        stats: [37],
      },
      9: {
        minimumSourceItemLevelNeeded: "7",
        totalItemsNeeded: 48,
        stats: [41],
      },
      10: {
        minimumSourceItemLevelNeeded: "9",
        totalItemsNeeded: 96,
        stats: [46],
      },
    });
  });

  it("should calculate Gold Mining Necklace minimal Perfect Refine Level 10 path", () => {
    expect(
      calculateOptimalPerfectRefine({
        levelOneStats: [7],
        type: "skill_necklace",
      }),
    ).toEqual({
      1: { minimumSourceItemLevelNeeded: "-", totalItemsNeeded: 1, stats: [7] },
      2: { minimumSourceItemLevelNeeded: "1", totalItemsNeeded: 2, stats: [9] },
      3: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 3,
        stats: [11],
      },
      4: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 4,
        stats: [13],
      },
      5: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 5,
        stats: [15],
      },
      6: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 6,
        stats: [17],
      },
      7: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 7,
        stats: [19],
      },
      8: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 8,
        stats: [21],
      },
      9: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 9,
        stats: [23],
      },
      10: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 10,
        stats: [25],
      },
    });
  });

  it("should calculate Dracula's Cloak minimal Perfect Refine Level 10 path", () => {
    expect(
      calculateOptimalPerfectRefine({
        levelOneStats: [40, 7],
        type: "combat_equipment",
      }),
    ).toEqual({
      1: {
        minimumSourceItemLevelNeeded: "-",
        totalItemsNeeded: 1,
        stats: [40, 7],
      },
      2: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 2,
        stats: [50, 9],
      },
      3: {
        minimumSourceItemLevelNeeded: "2",
        totalItemsNeeded: 4,
        stats: [62, 11],
      },
      4: {
        minimumSourceItemLevelNeeded: "3",
        totalItemsNeeded: 8,
        stats: [77, 13],
      },
      5: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 16,
        stats: [96, 16],
      },
      6: {
        minimumSourceItemLevelNeeded: "5",
        totalItemsNeeded: 32,
        stats: [120, 20],
      },
      7: {
        minimumSourceItemLevelNeeded: "6",
        totalItemsNeeded: 64,
        stats: [150, 25],
      },
      8: {
        minimumSourceItemLevelNeeded: "7",
        totalItemsNeeded: 128,
        stats: [187, 31],
      },
      9: {
        minimumSourceItemLevelNeeded: "8",
        totalItemsNeeded: 256,
        stats: [233, 38],
      },
      10: {
        minimumSourceItemLevelNeeded: "9",
        totalItemsNeeded: 512,
        stats: [291, 47],
      },
    });
  });
});
