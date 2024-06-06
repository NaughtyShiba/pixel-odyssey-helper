import { ItemName, Slot } from "@/data/items.mjs";
import { MonsterHunterTalentName } from "@/data/monster-hunter.mjs";
import { TalentName } from "@/features/talents/type.mts";

export interface ProfileStats {
  pvpKills: number;
  wisdom: number;
  coliseumTrophies: number;
}
export type ProfileEquipment = Record<
  Slot,
  { item: ItemName | null; level: number; perfectRefine: boolean }
>;
export type TalentsLevels = Record<TalentName, number>;
export type MonsterHunterTalentsLevels = Record<
  MonsterHunterTalentName,
  number
>;
