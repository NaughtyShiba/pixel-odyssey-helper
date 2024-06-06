import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Header } from "@/features/header/header";
import { AlertCircle } from "lucide-react";
import { Outlet, isRouteErrorResponse, useRouteError } from "react-router-dom";

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

export function RootErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <div>Page not found ☠️</div>;
  }

  return <div>Unknown error</div>;
}
