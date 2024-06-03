import { describe, it, expect } from "vitest";
import { calculateOptimalPerfectRefine } from "./utils.mts";

describe("#calculateOptimalPerfectRefine()", () => {
  it("should calculate Silver Pickaxe minimal Perfect Refine Level 10 path", () => {
    expect(
      calculateOptimalPerfectRefine({
        levelOneStats: { mining: 18 },
        type: "tool",
      }),
    ).toEqual({
      1: {
        minimumSourceItemLevelNeeded: "-",
        totalItemsNeeded: 1,
        stats: { mining: 18 },
      },
      2: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 2,
        stats: { mining: 20 },
      },
      3: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 3,
        stats: { mining: 22 },
      },
      4: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 4,
        stats: { mining: 24 },
      },
      5: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 8,
        stats: { mining: 27 },
      },
      6: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 12,
        stats: { mining: 30 },
      },
      7: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 16,
        stats: { mining: 33 },
      },
      8: {
        minimumSourceItemLevelNeeded: "7",
        totalItemsNeeded: 32,
        stats: { mining: 37 },
      },
      9: {
        minimumSourceItemLevelNeeded: "7",
        totalItemsNeeded: 48,
        stats: { mining: 41 },
      },
      10: {
        minimumSourceItemLevelNeeded: "9",
        totalItemsNeeded: 96,
        stats: { mining: 46 },
      },
    });
  });

  it("should calculate Gold Mining Necklace minimal Perfect Refine Level 10 path", () => {
    expect(
      calculateOptimalPerfectRefine({
        levelOneStats: { mining: 7 },
        type: "skill_necklace",
      }),
    ).toEqual({
      1: {
        minimumSourceItemLevelNeeded: "-",
        totalItemsNeeded: 1,
        stats: { mining: 7 },
      },
      2: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 2,
        stats: { mining: 9 },
      },
      3: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 3,
        stats: { mining: 11 },
      },
      4: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 4,
        stats: { mining: 13 },
      },
      5: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 5,
        stats: { mining: 15 },
      },
      6: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 6,
        stats: { mining: 17 },
      },
      7: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 7,
        stats: { mining: 19 },
      },
      8: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 8,
        stats: { mining: 21 },
      },
      9: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 9,
        stats: { mining: 23 },
      },
      10: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 10,
        stats: { mining: 25 },
      },
    });
  });

  it("should calculate Dracula's Cloak minimal Perfect Refine Level 10 path", () => {
    expect(
      calculateOptimalPerfectRefine({
        levelOneStats: { defense: 40, mana: 7 },
        type: "combat_equipment",
      }),
    ).toEqual({
      1: {
        minimumSourceItemLevelNeeded: "-",
        totalItemsNeeded: 1,
        stats: { defense: 40, mana: 7 },
      },
      2: {
        minimumSourceItemLevelNeeded: "1",
        totalItemsNeeded: 2,
        stats: { defense: 50, mana: 9 },
      },
      3: {
        minimumSourceItemLevelNeeded: "2",
        totalItemsNeeded: 4,
        stats: { defense: 62, mana: 11 },
      },
      4: {
        minimumSourceItemLevelNeeded: "3",
        totalItemsNeeded: 8,
        stats: { defense: 77, mana: 13 },
      },
      5: {
        minimumSourceItemLevelNeeded: "4",
        totalItemsNeeded: 16,
        stats: { defense: 96, mana: 16 },
      },
      6: {
        minimumSourceItemLevelNeeded: "5",
        totalItemsNeeded: 32,
        stats: { defense: 120, mana: 20 },
      },
      7: {
        minimumSourceItemLevelNeeded: "6",
        totalItemsNeeded: 64,
        stats: { defense: 150, mana: 25 },
      },
      8: {
        minimumSourceItemLevelNeeded: "7",
        totalItemsNeeded: 128,
        stats: { defense: 187, mana: 31 },
      },
      9: {
        minimumSourceItemLevelNeeded: "8",
        totalItemsNeeded: 256,
        stats: { defense: 233, mana: 38 },
      },
      10: {
        minimumSourceItemLevelNeeded: "9",
        totalItemsNeeded: 512,
        stats: { defense: 291, mana: 47 },
      },
    });
  });
});
