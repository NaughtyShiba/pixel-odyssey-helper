import { ItemName } from "@/data/items.mjs";
import { assert } from "@/lib/assert/assert.mjs";
import { Maybe } from "@/lib/fn/maybe.mjs";
import { ActionDispatch, createContext, useContext, useReducer } from "react";
import {
  MonsterHunterTalentsLevels,
  ProfileEquipment,
  ProfileStats,
  TalentsLevels,
} from "./types";

interface BuildContextProviderProps {
  children: React.ReactNode;
}
interface BuilderState {
  profile: ProfileStats;
  talentsLevels: TalentsLevels;
  monsterHunterTalentsLevels: MonsterHunterTalentsLevels;
  equipment: ProfileEquipment;
}

const defaultValue: BuilderState = {
  profile: {
    coliseumTrophies: 0,
    pvpKills: 0,
    wisdom: 0,
  },
  talentsLevels: {
    strength: 0,
    defense: 0,
    agility: 0,
    hp: 0,
    luck: 0,
    mana: 0,
    strength_mastery: 0,
    defense_expertise: 0,
    first_strike: 0,
    hp_expertise: 0,
    number_of_dice: 0,
    mana_expertise: 0,
    critical_chance: 0,
    berserk: 0,
    meditation_reward: 0,
    willpower: 0,
    bleed_damage: 0,
    mana_regen: 0,
    critical_damage: 0,
    angels_dare: 0,
    fire_proficiency: 0,
    fire_resistance: 0,
    water_proficiency: 0,
    water_resistance: 0,
    air_proficiency: 0,
    air_resistance: 0,
    earth_proficiency: 0,
    earth_resistance: 0,
    damage_per_kill: 0,
    pride: 0,
  },
  monsterHunterTalentsLevels: {
    necklace: 0,
    heart: 0,
    instinct: 0,
    reflexes: 0,
    wrath: 0,
  },
  equipment: {
    headwear: { item: null, level: 1, perfectRefine: true },
    chestwear: { item: null, level: 1, perfectRefine: true },
    legwear: { item: null, level: 1, perfectRefine: true },
    footwear: { item: null, level: 1, perfectRefine: true },
    earrings: { item: null, level: 1, perfectRefine: true },
    necklace: { item: null, level: 1, perfectRefine: true },
    mainhand: { item: null, level: 1, perfectRefine: true },
    offhand: { item: null, level: 1, perfectRefine: true },
    ring: { item: null, level: 1, perfectRefine: true },
    amulet: { item: null, level: 1, perfectRefine: true },
    tool: { item: null, level: 1, perfectRefine: true },
  },
};
const BuildContext = createContext<{
  state: BuilderState;
  dispatch: ActionDispatch<[action: Actions]>;
}>({ state: defaultValue, dispatch: () => {} });

type Actions =
  | {
      type: "set_profile";
      property: keyof BuilderState["profile"];
      value: number;
    }
  | {
      type: "set_talent";
      property: keyof BuilderState["talentsLevels"];
      value: number;
    }
  | {
      type: "set_monster_hunter";
      property: keyof BuilderState["monsterHunterTalentsLevels"];
      value: number;
    }
  | {
      type: "set_equipment_item";
      property: keyof BuilderState["equipment"];
      item: Maybe<ItemName>;
    }
  | {
      type: "set_equipment_level";
      property: keyof BuilderState["equipment"];
      value: number;
    }
  | {
      type: "set_equipment_is_perfect";
      property: keyof BuilderState["equipment"];
      value: boolean;
    };

function reducer(state: BuilderState, action: Actions) {
  switch (action.type) {
    case "set_profile": {
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.property]: action.value,
        },
      };
    }
    case "set_talent": {
      return {
        ...state,
        talentsLevels: {
          ...state.talentsLevels,
          [action.property]: action.value,
        },
      };
    }
    case "set_monster_hunter": {
      return {
        ...state,
        monsterHunterTalentsLevels: {
          ...state.monsterHunterTalentsLevels,
          [action.property]: action.value,
        },
      };
    }
    case "set_equipment_item": {
      return {
        ...state,
        equipment: {
          ...state.equipment,
          [action.property]: {
            ...state.equipment[action.property],
            item: action.item,
          },
        },
      };
    }
    case "set_equipment_level": {
      return {
        ...state,
        equipment: {
          ...state.equipment,
          [action.property]: {
            ...state.equipment[action.property],
            level: action.value,
          },
        },
      };
    }
    case "set_equipment_is_perfect": {
      return {
        ...state,
        equipment: {
          ...state.equipment,
          [action.property]: {
            ...state.equipment[action.property],
            perfectRefine: action.value,
          },
        },
      };
    }
  }
}

export function BuildProvider({ children }: BuildContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  return (
    <BuildContext.Provider value={{ state, dispatch }}>
      {children}
    </BuildContext.Provider>
  );
}

export const useBuilder = () => {
  const context = useContext(BuildContext);

  assert(
    context !== undefined,
    "useBuilder must be used within a BuildContext",
  );

  return context;
};
