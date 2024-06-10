import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slot, items } from "@/data/items.mjs";
import { ItemSelector } from "@/features/items/components/item-selector";
import { useBuilder } from "../context";
import { memo, useCallback } from "react";

interface EquipmentDialogProps {
  equipmentSlot: Slot;
  shadowImage: string;
  title: string;
  itemsIDs: readonly string[];
}
export const EquipmentDialog = memo(function EquipmentDialog(
  props: EquipmentDialogProps,
) {
  const { state, dispatch } = useBuilder();

  const item = state.equipment[props.equipmentSlot].item;
  const image =
    item && items[item]?.image ? items[item].image : props.shadowImage;

  return (
    <Dialog>
      <DialogTrigger>
        <img src={image!} className="w-8 h-8 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <ItemSelector
              ids={props.itemsIDs}
              onChange={useCallback(
                (item) => {
                  dispatch({
                    type: "set_equipment_item",
                    property: props.equipmentSlot,
                    item: item,
                  });
                },
                [dispatch, props.equipmentSlot],
              )}
            />
          </div>
          <div className="flex flex-row gap-2">
            <Input
              label="Level"
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
});
