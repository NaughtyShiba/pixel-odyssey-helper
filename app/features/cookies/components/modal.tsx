import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { COOKIES } from "@/core/cookies.mjs";
import { memo, useMemo } from "react";

export const CookiesModal = memo(function CookiesModal() {
  const cookiesRows = useMemo(
    () =>
      Object.values(COOKIES).map((cookie) => (
        <TableRow key={cookie.key}>
          <TableCell>{cookie.name}</TableCell>
          <TableCell>{cookie.key}</TableCell>
          <TableCell>{cookie.description}</TableCell>
        </TableRow>
      )),
    [],
  );

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="default">See our 🍪</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Our site is using these 🍪 cookies:</DialogTitle>
        </DialogHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="required">
            <AccordionTrigger>Required Cookies</AccordionTrigger>
            <AccordionContent>
              These cookies are mandatory for the functionality of the site.
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Key</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{cookiesRows}</TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
});
