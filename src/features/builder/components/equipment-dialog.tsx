import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ItemSelector } from "@/features/items/components/item-selector";
import { useBuilder } from "../context";
import { Slot, items } from "@/data/items.mjs";

interface EquipmentDialogProps {
  equipmentSlot: Slot;
  shadowImage: string;
  title: string;
  itemsIDs: readonly string[];
}
export function EquipmentDialog(props: EquipmentDialogProps) {
  const { state, dispatch } = useBuilder();

  const item = state.equipment[props.equipmentSlot].item;
  const image =
    item && items[item]?.image ? items[item].image : props.shadowImage;

  return (
    <Dialog>
      <DialogTrigger>
        <img src={image!} className="w-8 h-8 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <ItemSelector
              ids={props.itemsIDs}
              onChange={(item) => {
                dispatch({
                  type: "set_equipment_item",
                  property: props.equipmentSlot,
                  item: item,
                });
              }}
            />
          </div>
          <div className="flex gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="level" className="text-right">
                Level
              </Label>
              <Input
                type="number"
                id="level"
                defaultValue={1}
                className="col-span-3"
                min={1}
                max={10}
                onChange={(e) => {
                  dispatch({
                    type: "set_equipment_level",
                    property: props.equipmentSlot,
                    value: parseInt(e.target.value),
                  });
                }}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="perfect-refine"
                defaultChecked={true}
                onCheckedChange={(checked) => {
                  dispatch({
                    type: "set_equipment_is_perfect",
                    property: props.equipmentSlot,
                    value: checked,
                  });
                }}
              />
              <Label htmlFor="perfect-refine">Perfect refine</Label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
