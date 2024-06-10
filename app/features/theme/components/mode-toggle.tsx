import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Theme } from "../context";
import { Form } from "@remix-run/react";

const ThemeToggleButton = (props: { theme: Theme; label: string }) => {
  return (
    <Form method="post" action="/">
      <input type="hidden" name="intent" value="set_theme" />
      <input type="hidden" name="theme" value={props.theme} />
      <DropdownMenuItem asChild>
        <button className="w-full" type="submit">
          {props.label}
        </button>
      </DropdownMenuItem>
    </Form>
  );
};

export function ModeToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ThemeToggleButton label="Light" theme="light" />
        <ThemeToggleButton label="Dark" theme="dark" />
        <ThemeToggleButton label="System" theme="system" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
