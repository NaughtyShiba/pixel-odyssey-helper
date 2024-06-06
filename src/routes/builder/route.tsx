import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Profile } from "@/features/builder/components/profile";
import { Talents } from "@/features/builder/components/talents";
import { BuildProvider } from "@/features/builder/context";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

export default function BuilderRoute() {
  const [tab, setTab] = useState<"profile" | "talents">("profile");

  return (
    <BuildProvider>
      <div className="flex gap-4 flex-col">
        <Alert variant="default">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Feature under construction</AlertTitle>
          <AlertDescription>
            Builder (equipment + talents) feature in progress. It's more likely
            to be unstable than stable, but feel free to play around
          </AlertDescription>
        </Alert>

        <Tabs
          onValueChange={(tab) => setTab(tab as "profile" | "talents")}
          value={tab}
        >
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="talents">Talents</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="flex flex-col gap-2">
            <Profile />
          </TabsContent>
          <TabsContent value="talents" className="flex flex-col gap-2">
            <Talents />
          </TabsContent>
        </Tabs>
      </div>
    </BuildProvider>
  );
}
