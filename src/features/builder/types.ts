import { Item } from "@/data/items.mjs";
import { MonsterHunterTalentName } from "@/data/monster-hunter.mjs";
import { TalentName } from "@/features/talents/type.mts";

export interface ProfileStats {
  pvpKills: number;
  wisdom: number;
  coliseumTrophies: number;
}
export interface ProfileEquipment {
  helmet: (Item & { level: number; perfectRefine: boolean }) | null;
  body: (Item & { level: number; perfectRefine: boolean }) | null;
  legs: (Item & { level: number; perfectRefine: boolean }) | null;
  boots: (Item & { level: number; perfectRefine: boolean }) | null;
  earrings: (Item & { level: number; perfectRefine: boolean }) | null;
  necklace: (Item & { level: number; perfectRefine: boolean }) | null;
  mainHand: (Item & { level: number; perfectRefine: boolean }) | null;
  offHand: (Item & { level: number; perfectRefine: boolean }) | null;
  ring: (Item & { level: number; perfectRefine: boolean }) | null;
  amulet: (Item & { level: number; perfectRefine: boolean }) | null;
  tool: (Item & { level: number; perfectRefine: boolean }) | null;
}
export type TalentsLevels = Record<TalentName, number>;
export type MonsterHunterTalentsLevels = Record<
  MonsterHunterTalentName,
  number
>;
