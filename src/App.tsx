import "./style.css";
import { ModeToggle } from "./features/theme/components/mode-toggle";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { AlertCircle } from "lucide-react";
import { ItemSelectionProvider } from "@/features/items/context";
import { ItemsDetailsTabs } from "./features/items/components/tabs";

export function App() {
  return (
    <div className="flex gap-4 flex-col">
      <nav className="flex justify-end">
        <ModeToggle />
      </nav>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Still in beta</AlertTitle>
        <AlertDescription>
          Tool is still in a beta. If you notice anything off, ping
          @NaughtyShiba on discord
        </AlertDescription>
      </Alert>
      <ItemSelectionProvider>
        <ItemsDetailsTabs />
      </ItemSelectionProvider>
    </div>
  );
}
