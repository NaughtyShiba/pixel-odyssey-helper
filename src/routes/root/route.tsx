import { Header } from "@/features/header/header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4">
      <Header />
      <main className="p-4 w-full max-w-prose mx-auto flex gap-4 flex-col">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Still in beta</AlertTitle>
          <AlertDescription>
            Tool is still in a beta. If you notice anything off, ping
            @NaughtyShiba on discord
          </AlertDescription>
        </Alert>
        <Outlet />
      </main>
    </div>
  );
}
