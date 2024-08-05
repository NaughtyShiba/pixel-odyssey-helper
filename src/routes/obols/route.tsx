import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle } from "lucide-react";

export default function ObolsRoute() {
  return (<>
    <Alert variant="default">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Information still being gathered</AlertTitle>
          <AlertDescription>
            Different level Obols provides different amount of points towards power up. Information will be added as it's found out
          </AlertDescription>
        </Alert>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Level</TableHead>
          <TableHead>Stat increase</TableHead>
          <TableHead>Points Required</TableHead>
          <TableHead>Total Points Required</TableHead>
          <TableHead>Color</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHead>1</TableHead>
          <TableHead>+1</TableHead>
          <TableHead>-</TableHead>
          <TableHead>-</TableHead>
          <TableHead>Grey</TableHead>
        </TableRow>
        <TableRow>
          <TableHead>2</TableHead>
          <TableHead>+2</TableHead>
          <TableHead>4</TableHead>
          <TableHead>4</TableHead>
          <TableHead>Gold</TableHead>
        </TableRow>
        <TableRow>
          <TableHead>3</TableHead>
          <TableHead>+4</TableHead>
          <TableHead>14</TableHead>
          <TableHead>18</TableHead>
          <TableHead>Emerald</TableHead>
        </TableRow>
        <TableRow>
          <TableHead>4</TableHead>
          <TableHead>+?</TableHead>
          <TableHead>41</TableHead>
          <TableHead>59</TableHead>
          <TableHead>Ruby</TableHead>
        </TableRow>
      </TableBody>
    </Table>
    </>);
}