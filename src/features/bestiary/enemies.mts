import { ItemName } from "@/data/items.mjs";
import { ArrayElement } from "@/lib/ts/array-element.mjs";

export const enemiesIDs = [
  "green_slime",
  "pink_slime",
  "spawn_camper",
  "colossal_bloom",
  "tree_trunker",
  "soil_serpent",
  "snake",
  "baby_cyclops",
  "goblin_mage",
  "jungle_spider",
  "goblin_warrior",
  "undead_guard",
  "undead",
  "undead_hulk",
  "bat",
  "tummy",
  "ice_dragon",
  "ice_fly",
  "peaks_dweller",
  "well_guardian",
  "smiler",
  "jellyfish",
  "half_dead",
  "minotaur",
  "lava_eater",
  "guardling",
  "dracula",
  "tiny_caster",
  "golem",
  "forest_horror",
  "undead_shaman",
  "angry_tree",
  "winged_undead",
];
export type EnemiesIDs = ArrayElement<typeof enemiesIDs>;
export interface Enemy {
  name: string;
  image: string;
  drops: Array<{ item: ItemName; chance: number }>;
}

export const enemies: Record<EnemiesIDs, Enemy> = {
  green_slime: {
    name: "Green Slime",
    image: new URL("@/assets/enemies/green-slime.png", import.meta.url).href,
    drops: [
      {
        item: "fire_iron_ring",
        chance: 3,
      },
    ],
  },
  pink_slime: {
    name: "Pink Slime",
    image: new URL("@/assets/enemies/pink-slime.png", import.meta.url).href,
    drops: [],
  },
  spawn_camper: {
    name: "Spawn Camper",
    image: new URL("@/assets/enemies/spawn-camper.png", import.meta.url).href,
    drops: [
      {
        item: "earth_iron_ring",
        chance: 3,
      },
    ],
  },
  colossal_bloom: {
    name: "Colossal Bloom",
    image: new URL("@/assets/enemies/colossal-bloom.png", import.meta.url).href,
    drops: [
      {
        item: "air_iron_ring",
        chance: 3,
      },
    ],
  },
  tree_trunker: {
    name: "Tree Trunker",
    image: new URL("@/assets/enemies/tree-trunker.png", import.meta.url).href,
    drops: [
      {
        item: "branch",
        chance: 100,
      },
      {
        item: "water_iron_ring",
        chance: 3,
      },
    ],
  },
  soil_serpent: {
    name: "Soil Serpent",
    image: new URL("@/assets/enemies/soil-serpent.png", import.meta.url).href,
    drops: [
      {
        item: "flat_iron_ring",
        chance: 3,
      },
    ],
  },
  snake: {
    name: "Snake",
    image: new URL("@/assets/enemies/snake.png", import.meta.url).href,
    drops: [
      {
        item: "snake_skin",
        chance: 20,
      },
      {
        item: "gold_ring",
        chance: 3,
      },
    ],
  },
  baby_cyclops: {
    name: "Baby Cyclops",
    image: new URL("@/assets/enemies/baby-cyclops.png", import.meta.url).href,
    drops: [
      {
        item: "cyclops_hide",
        chance: 20,
      },
      {
        item: "cyclops_eye",
        chance: 100,
      },
      {
        item: "crit_iron_ring",
        chance: 3,
      },
    ],
  },
  goblin_mage: {
    name: "Goblin Mage",
    image: new URL("@/assets/enemies/goblin-mage.png", import.meta.url).href,
    drops: [
      {
        item: "earth_gold_ring",
        chance: 3,
      },
      {
        item: "earth_staff",
        chance: 40,
      },
    ],
  },
  jungle_spider: {
    name: "Jungle Spider",
    image: new URL("@/assets/enemies/jungle-spider.png", import.meta.url).href,
    drops: [
      {
        item: "crit_dmg_iron_ring",
        chance: 3,
      },
    ],
  },
  goblin_warrior: {
    name: "Goblin Warrior",
    image: new URL("@/assets/enemies/goblin-warrior.png", import.meta.url).href,
    drops: [
      {
        item: "goblin_mace",
        chance: 10,
      },
      {
        item: "goblin_shield",
        chance: 100,
      },
      {
        item: "fire_gold_ring",
        chance: 3,
      },
    ],
  },
  undead_guard: {
    name: "Undead Guard",
    image: new URL("@/assets/enemies/undead-guard.png", import.meta.url).href,
    drops: [
      {
        item: "pink_shield",
        chance: 20,
      },
      {
        item: "water_gold_ring",
        chance: 3,
      },
    ],
  },
  undead: {
    name: "Undead",
    image: new URL("@/assets/enemies/undead.png", import.meta.url).href,
    drops: [
      {
        item: "air_gold_ring",
        chance: 3,
      },
    ],
  },
  undead_hulk: {
    name: "Undead Hulk",
    image: new URL("@/assets/enemies/undead-hulk.png", import.meta.url).href,
    drops: [
      {
        item: "flat_gold_ring",
        chance: 3,
      },
    ],
  },
  bat: {
    name: "Bat",
    image: new URL("@/assets/enemies/bat.png", import.meta.url).href,
    drops: [
      {
        item: "bat_wing",
        chance: 100,
      },
      {
        item: "attack_iron_ring",
        chance: 3,
      },
    ],
  },
  tummy: {
    name: "Tummy",
    image: new URL("@/assets/enemies/tummy.png", import.meta.url).href,
    drops: [
      {
        item: "mana_iron_ring",
        chance: 3,
      },
    ],
  },
  ice_dragon: {
    name: "Ice Dragon",
    image: new URL("@/assets/enemies/ice-dragon.png", import.meta.url).href,
    drops: [
      {
        item: "attack_gold_ring",
        chance: 3,
      },
    ],
  },
  ice_fly: {
    name: "Ice Fly",
    image: new URL("@/assets/enemies/ice-fly.png", import.meta.url).href,
    drops: [
      {
        item: "mana_gold_ring",
        chance: 3,
      },
    ],
  },
  peaks_dweller: {
    name: "Peaks Dweller",
    image: new URL("@/assets/enemies/peaks-dweller.png", import.meta.url).href,
    drops: [
      {
        item: "crit_gold_ring",
        chance: 3,
      },
    ],
  },
  well_guardian: {
    name: "Well Guardian",
    image: new URL("@/assets/enemies/well-guardian.png", import.meta.url).href,
    drops: [
      {
        item: "crit_dmg_gold_ring",
        chance: 3,
      },
    ],
  },
  smiler: {
    name: "Smiler",
    image: new URL("@/assets/enemies/smiler.png", import.meta.url).href,
    drops: [
      {
        item: "emerald_ring",
        chance: 3,
      },
    ],
  },
  jellyfish: {
    name: "Jellyfish",
    image: new URL("@/assets/enemies/jellyfish.png", import.meta.url).href,
    drops: [
      {
        item: "fire_emerald_ring",
        chance: 3,
      },
    ],
  },
  half_dead: {
    name: "Half Dead",
    image: new URL("@/assets/enemies/half-dead.png", import.meta.url).href,
    drops: [
      {
        item: "earth_platinum_ring",
        chance: 3,
      },
    ],
  },
  minotaur: {
    name: "Minotaur",
    image: new URL("@/assets/enemies/minotaur.png", import.meta.url).href,
    drops: [
      {
        item: "fire_platinum_ring",
        chance: 3,
      },
    ],
  },
  lava_eater: {
    name: "Lava Eater",
    image: new URL("@/assets/enemies/lava-eater.png", import.meta.url).href,
    drops: [
      {
        item: "air_emerald_ring",
        chance: 3,
      },
    ],
  },
  guardling: {
    name: "Guardling",
    image: new URL("@/assets/enemies/guardling.png", import.meta.url).href,
    drops: [
      {
        item: "earth_emerald_ring",
        chance: 3,
      },
    ],
  },
  dracula: {
    name: "Dracula",
    image: new URL("@/assets/enemies/dracula.png", import.meta.url).href,
    drops: [
      {
        item: "bat_wing",
        chance: 100,
      },
      {
        item: "vamp_blade_1",
        chance: 3,
      },
      {
        item: "draculas_cloak",
        chance: 20,
      },
      {
        item: "flat_emerald_ring",
        chance: 3,
      },
    ],
  },
  tiny_caster: {
    name: "Tiny Caster",
    image: new URL("@/assets/enemies/tiny-caster.png", import.meta.url).href,
    drops: [
      {
        item: "mana_emerald_ring",
        chance: 3,
      },
    ],
  },
  golem: {
    name: "Golem",
    image: new URL("@/assets/enemies/golem.png", import.meta.url).href,
    drops: [
      {
        item: "attack_emerald_ring",
        chance: 3,
      },
    ],
  },
  forest_horror: {
    name: "Forest Horror",
    image: new URL("@/assets/enemies/forest-horror.png", import.meta.url).href,
    drops: [
      {
        item: "crit_dmg_emerald_ring",
        chance: 3,
      },
      {
        item: "forest_horror_hide",
        chance: 20,
      },
    ],
  },
  undead_shaman: {
    name: "Undead Shaman",
    image: new URL("@/assets/enemies/undead-shaman.png", import.meta.url).href,
    drops: [
      {
        item: "dark_blue_cloak",
        chance: 20,
      },
      {
        item: "platinum_ring",
        chance: 3,
      },
    ],
  },
  angry_tree: {
    name: "Angry Tree",
    image: new URL("@/assets/enemies/angry-tree.png", import.meta.url).href,
    drops: [
      {
        item: "crit_emerald_ring",
        chance: 3,
      },
      {
        item: "branch",
        chance: 100,
      },
    ],
  },
  winged_undead: {
    name: "Winged Undead",
    image: new URL("@/assets/enemies/winged-undead.png", import.meta.url).href,
    drops: [
      {
        item: "scythe",
        chance: 30,
      },
      {
        item: "water_emerald_ring",
        chance: 3,
      },
    ],
  },
};
