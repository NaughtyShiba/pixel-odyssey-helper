import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { useBuilder } from "../context";
// import { minifyState } from "../utils.mts";

export function ShareBuild() {
  // const { state } = useBuilder();
  // const shareableUrl = new URL(location.href);
  // shareableUrl.searchParams.set("q", minifyState(state));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Share Build</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Copy link below and share your build!</DialogHeader>
        {/* <Input id="shareable-link" readOnly value={shareableUrl.toString()} /> */}
      </DialogContent>
    </Dialog>
  );
}
