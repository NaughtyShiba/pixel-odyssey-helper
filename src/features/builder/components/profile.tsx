import { Input } from "@/components/ui/input";
import { useBuilder } from "../context";

export function Profile() {
  const { state, dispatch } = useBuilder();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          type="number"
          placeholder="Coliseum Trophies"
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
    </div>
  );
}
