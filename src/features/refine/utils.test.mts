import { describe, it, expect } from "vitest";
import { calculateOptimalPerfectRefine } from "./utils.mts";

describe("#calculateOptimalPerfectRefine()", () => {
  it("should calculate Silver Pickaxe minimal Perfect Refine Level 10 path", () => {
      expect(calculateOptimalPerfectRefine({ levelOneStats: [18], type: "tool" })).toEqual({
        2: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 2 },
        3: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 3 },
        4: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 4 },
        5: { minimumSourceItemLevelNeeded: 4, totalItemsNeeded: 8 },
        6: { minimumSourceItemLevelNeeded: 4, totalItemsNeeded: 12 },
        7: { minimumSourceItemLevelNeeded: 4, totalItemsNeeded: 16 },
        8: { minimumSourceItemLevelNeeded: 7, totalItemsNeeded: 32 },
        9: { minimumSourceItemLevelNeeded: 7, totalItemsNeeded: 48 },
        10: { minimumSourceItemLevelNeeded: 9, totalItemsNeeded: 96 }
      });
  });

  it("should calculate Gold Mining Necklace minimal Perfect Refine Level 10 path", () => {
    expect(calculateOptimalPerfectRefine({ levelOneStats: [7], type: "necklace" })).toEqual({
      2: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 2 },
      3: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 3 },
      4: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 4 },
      5: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 5 },
      6: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 6 },
      7: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 7 },
      8: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 8 },
      9: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 9 },
      10: { minimumSourceItemLevelNeeded: 1, totalItemsNeeded: 10 }
    });
  });
});