import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ItemName, items } from "@/data/items.mjs";

const craftableItems = Object.entries(items).map(([name, item]) => ({
  value: name,
  label: item.label,
}));

interface ItemSelectorProps {
  onChange(itemName: ItemName | null): void;
  className?: string;
}
export function ItemSelector(props: ItemSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

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
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Search for an item..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {craftableItems.map((item) => (
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
        </Command>
      </PopoverContent>
    </Popover>
  );
}
