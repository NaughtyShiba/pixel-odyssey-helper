export type MonsterHunterTalentName =
  | "necklace"
  | "heart"
  | "instinct"
  | "reflexes"
  | "wrath";

export interface MonsterHunterTalent {
  label: string;
}

export const monsterHunterTalents: Record<
  MonsterHunterTalentName,
  MonsterHunterTalent
> = {
  necklace: { label: "Hunter's Necklace" },
  heart: { label: "Hunter's Heart" },
  instinct: { label: "Hunter's Instinct" },
  reflexes: { label: "Hunter's Reflexes" },
  wrath: { label: "Hunter's Wrath" },
};
