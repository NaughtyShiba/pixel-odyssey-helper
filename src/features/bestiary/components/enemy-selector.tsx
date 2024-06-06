import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
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
import { useMediaQuery } from "@/lib/react/use-media-query.mjs";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { EnemiesIDs, enemies } from "../enemies.mts";
import { Maybe } from "@/lib/fn/maybe.mjs";

interface ItemSelectorProps {
  onChange(itemName: Maybe<EnemiesIDs>): void;
  className?: string;
}
export function EnemySelector(props: ItemSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const enemiesList = Object.entries(enemies)
    .map(([name, enemy]) => ({
      value: name,
      label: enemy.name,
      image: enemy.image,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
  const filteredEnemies = enemiesList.filter((enemy) =>
    enemy.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );

  const content = (
    <Command shouldFilter={false}>
      <CommandInput
        placeholder="Search for an enemy..."
        value={search}
        onValueChange={(value) => React.startTransition(() => setSearch(value))}
      />
      <CommandEmpty>No enemy found</CommandEmpty>
      <CommandList className="max-h-[400px] overflow-y-scroll">
        {filteredEnemies.map((item) => (
          <CommandItem
            key={item.value}
            value={item.value}
            onSelect={(currentValue: string) => {
              setValue(currentValue === value ? "" : currentValue);
              props.onChange(
                currentValue === value ? null : (currentValue as EnemiesIDs),
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
              ? enemiesList.find((item) => item.value === value)?.label
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
            ? enemiesList.find((item) => item.value === value)?.label
            : "Select an item..."}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
