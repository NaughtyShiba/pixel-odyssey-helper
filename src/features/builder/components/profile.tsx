import { Input } from "@/components/ui/input";
import { useBuilder } from "../context";
import { stats } from "@/data/stats.mjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculateStats } from "../utils.mts";
import { Slot } from "@/data/items.mjs";

const shadowsImages: Record<Slot, string> = {
  earrings: new URL("@/assets/icons/earrings_shadow.png", import.meta.url).href,
  headwear: new URL("@/assets/icons/helmet_shadow.png", import.meta.url).href,
  necklace: new URL("@/assets/icons/necklace_shadow.png", import.meta.url).href,
  mainhand: new URL("@/assets/icons/sword_shadow.png", import.meta.url).href,
  body: new URL("@/assets/icons/chestplate_shadow.png", import.meta.url).href,
  offhand: new URL("@/assets/icons/shield_shadow.png", import.meta.url).href,
  ring: new URL("@/assets/icons/ring_shadow.png", import.meta.url).href,
  legwear: new URL("@/assets/icons/legwear_shadow.png", import.meta.url).href,
  amulet: new URL("@/assets/icons/amulet_shadow.png", import.meta.url).href,
  tool: new URL("@/assets/icons/tool_shadow.png", import.meta.url).href,
  footwear: new URL("@/assets/icons/shoe_shadow.png", import.meta.url).href,
};

export function Profile() {
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
            <img src={shadowsImages.earrings} className="w-8 h-8" />
          </div>
          <div>
            <img src={shadowsImages.headwear} className="w-8 h-8" />
          </div>
          <div>
            <img src={shadowsImages.necklace} className="w-8 h-8" />
          </div>

          <div>
            <img src={shadowsImages.mainhand} className="w-8 h-8" />
          </div>
          <div>
            <img src={shadowsImages.body} className="w-8 h-8" />
          </div>
          <div>
            <img src={shadowsImages.offhand} className="w-8 h-8" />
          </div>

          <div>
            <img src={shadowsImages.ring} className="w-8 h-8" />
          </div>
          <div>
            <img src={shadowsImages.legwear} className="w-8 h-8" />
          </div>
          <div>
            <img src={shadowsImages.amulet} className="w-8 h-8" />
          </div>

          <div>
            <img src={shadowsImages.tool} className="w-8 h-8" />
          </div>
          <div>
            <img src={shadowsImages.footwear} className="w-8 h-8" />
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
            {calculateStats(state).map((stat) => (
              <TableRow key={stat.name}>
                <TableCell>{stats[stat.name].label}</TableCell>
                <TableCell>{stat.base}</TableCell>
                <TableCell>{stat.bonus}</TableCell>
                <TableCell>{stat.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
