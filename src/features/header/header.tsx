import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/components/mode-toggle";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  {
    href: "/",
    label: "Items Information",
  },
  {
    href: "/builder",
    label: "Builder",
  },
  {
    href: "/enemies",
    label: "Enemies",
  },
  {
    href: "/obols",
    label: "Obols",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {links.map((link) => (
          <Link
            to={link.href}
            className="text-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {links.map((link) => (
              <Link to={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <ModeToggle />
      </div>
    </header>
  );
}
