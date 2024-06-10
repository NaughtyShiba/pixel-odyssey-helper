import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Slot,
  amuletsIDs,
  chestwearsIDs,
  footwearIDs,
  headwearIDs,
  legwearsIDs,
  mainHandIDs,
  necklacesIDs,
  offHandIDs,
  ringsIDs,
  toolsIDs,
} from "@/data/items.mjs";
import { stats } from "@/features/stats/const.mjs";
import { useBuilder } from "../context";
import { calculateStats } from "../utils.mts";
import { EquipmentDialog } from "./equipment-dialog";
import { memo, useMemo } from "react";

const shadowsImages: Record<Slot, string> = {
  earrings: new URL("@/assets/icons/earrings_shadow.png", import.meta.url).href,
  headwear: new URL("@/assets/icons/helmet_shadow.png", import.meta.url).href,
  necklace: new URL("@/assets/icons/necklace_shadow.png", import.meta.url).href,
  mainhand: new URL("@/assets/icons/sword_shadow.png", import.meta.url).href,
  chestwear: new URL("@/assets/icons/chestplate_shadow.png", import.meta.url)
    .href,
  offhand: new URL("@/assets/icons/shield_shadow.png", import.meta.url).href,
  ring: new URL("@/assets/icons/ring_shadow.png", import.meta.url).href,
  legwear: new URL("@/assets/icons/legwear_shadow.png", import.meta.url).href,
  amulet: new URL("@/assets/icons/amulet_shadow.png", import.meta.url).href,
  tool: new URL("@/assets/icons/tool_shadow.png", import.meta.url).href,
  footwear: new URL("@/assets/icons/shoe_shadow.png", import.meta.url).href,
};

export const Profile = memo(function Profile() {
  const { state, dispatch } = useBuilder();

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          type="number"
          placeholder="Coliseum Trophies"
          label="Coliseum Trophies"
          id="coliseum-trophies"
          value={state.profile.coliseumTrophies}
          onChange={(e) => {
            dispatch({
              type: "set_profile",
              property: "coliseumTrophies",
              value: parseInt(e.target.value),
            });
          }}
        />
        <Input
          type="number"
          placeholder="PVP Kills"
          label="PVP Kills"
          id="pvp-kills"
          value={state.profile.pvpKills}
          onChange={(e) => {
            dispatch({
              type: "set_profile",
              property: "pvpKills",
              value: parseInt(e.target.value),
            });
          }}
        />
        <Input
          type="number"
          placeholder="Wisdom"
          label="Wisdom"
          id="wisdom"
          value={state.profile.wisdom}
          onChange={(e) => {
            dispatch({
              type: "set_profile",
              property: "wisdom",
              value: parseInt(e.target.value),
            });
          }}
        />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 w-32">
          <div>
            <EquipmentDialog
              equipmentSlot="earrings"
              title="Select Earrings"
              shadowImage={shadowsImages.earrings}
              itemsIDs={[]}
            />
          </div>
          <div>
            <EquipmentDialog
              equipmentSlot="headwear"
              title="Select Headwear"
              shadowImage={shadowsImages.headwear}
              itemsIDs={headwearIDs}
            />
          </div>
          <div>
            <EquipmentDialog
              equipmentSlot="necklace"
              title="Select Necklace"
              shadowImage={shadowsImages.necklace}
              itemsIDs={necklacesIDs}
            />
          </div>

          <div>
            <EquipmentDialog
              equipmentSlot="mainhand"
              title="Select Mainhand Item"
              shadowImage={shadowsImages.mainhand}
              itemsIDs={mainHandIDs}
            />
          </div>
          <div>
            <EquipmentDialog
              equipmentSlot="chestwear"
              title="Select Chestwear"
              shadowImage={shadowsImages.chestwear}
              itemsIDs={chestwearsIDs}
            />
          </div>
          <div>
            <EquipmentDialog
              equipmentSlot="offhand"
              title="Select Offhand Item"
              shadowImage={shadowsImages.offhand}
              itemsIDs={offHandIDs}
            />
          </div>

          <div>
            <EquipmentDialog
              equipmentSlot="ring"
              title="Select Ring"
              shadowImage={shadowsImages.ring}
              itemsIDs={ringsIDs}
            />
          </div>
          <div>
            <EquipmentDialog
              equipmentSlot="legwear"
              title="Select Legwear"
              shadowImage={shadowsImages.legwear}
              itemsIDs={legwearsIDs}
            />
          </div>
          <div>
            <EquipmentDialog
              equipmentSlot="amulet"
              title="Select Amulet"
              shadowImage={shadowsImages.amulet}
              itemsIDs={amuletsIDs}
            />
          </div>

          <div>
            <EquipmentDialog
              equipmentSlot="tool"
              title="Select Tool"
              shadowImage={shadowsImages.tool}
              itemsIDs={toolsIDs}
            />
          </div>
          <div>
            <EquipmentDialog
              equipmentSlot="footwear"
              title="Select Footwear"
              shadowImage={shadowsImages.footwear}
              itemsIDs={footwearIDs}
            />
          </div>
        </div>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Stat</TableHead>
              <TableHead>Base Value</TableHead>
              <TableHead>Bonus</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {useMemo(
              () =>
                calculateStats(state).map((stat) => (
                  <TableRow key={stat.name}>
                    <TableCell>{stats[stat.name].label}</TableCell>
                    <TableCell>{stat.base}</TableCell>
                    <TableCell>{stat.bonus}</TableCell>
                    <TableCell>{stat.total}</TableCell>
                  </TableRow>
                )),
              [state],
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
});
