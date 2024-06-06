import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ItemName, ItemType, itemTypeLabel, items } from "@/data/items.mjs";
import { Maybe } from "@/lib/fn/maybe.mjs";
import { filterObject, mapObject } from "@/lib/fn/object.mjs";
import { useMediaQuery } from "@/lib/react/use-media-query.mjs";
import { cn } from "@/lib/utils";

interface ItemSelectorProps {
  defaultValue?: Maybe<ItemName>;
  onChange(itemName: Maybe<ItemName>): void;
  className?: string;
  ids?: readonly string[];
}
export function ItemSelector(props: ItemSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(props.defaultValue ?? "");
  const [search, setSearch] = React.useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const craftableItems = Object.entries(
    props.ids
      ? filterObject(items, (key) => props.ids!.indexOf(key) >= 0)
      : items,
  )
    .map(([name, item]) => ({
      value: name,
      label: item.label,
      category: item.type,
    }))
    .sort((a, b) => a.category.localeCompare(b.category))
    .sort((a, b) => a.label.localeCompare(b.label));

  const groupedCraftableItems = Object.groupBy(
    craftableItems,
    (item) => item.category,
  );
  const filteredGroups = filterObject(
    mapObject(
      groupedCraftableItems,
      (_, items: Array<{ label: string; value: string }>) => {
        return items.filter((item) =>
          item.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        );
      },
    ),
    (_, arr: Array<{ label: string; value: string }>) => arr.length > 0,
  );
  console.log({ props });
  const content = (
    <Command shouldFilter={false}>
      <CommandInput
        placeholder="Search for an item..."
        value={search}
        onValueChange={(value) => React.startTransition(() => setSearch(value))}
      />
      <CommandEmpty>No Item found</CommandEmpty>
      <CommandList className="max-h-[400px] overflow-y-scroll">
        {Object.entries(filteredGroups).map(([group, items]) => (
          <CommandGroup heading={itemTypeLabel[group as ItemType]}>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue: string) => {
                  setValue(currentValue === value ? "" : currentValue);
                  props.onChange(
                    currentValue === value ? null : (currentValue as ItemName),
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("justify-between", props.className)}
          >
            {value
              ? craftableItems.find((item) => item.value === value)?.label
              : "Select an item..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">{content}</PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {value
            ? craftableItems.find((item) => item.value === value)?.label
            : "Select an item..."}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
