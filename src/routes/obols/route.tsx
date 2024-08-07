import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
    <h2 className="text-2xl">Stats increases</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Level</TableHead>
          <TableHead>Stat increase</TableHead>
          <TableHead>Points Required</TableHead>
          <TableHead>Total Points Required</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Points Provided towards power-up</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>+1</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>Grey</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>+2</TableCell>
          <TableCell>4</TableCell>
          <TableCell>4</TableCell>
          <TableCell>Gold</TableCell>
          <TableCell>4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>+4</TableCell>
          <TableCell>14</TableCell>
          <TableCell>18</TableCell>
          <TableCell>Emerald</TableCell>
          <TableCell>14</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>+7</TableCell>
          <TableCell>41</TableCell>
          <TableCell>59</TableCell>
          <TableCell>Ruby</TableCell>
          <TableCell>41</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>+10</TableCell>
          <TableCell>104</TableCell>
          <TableCell>163</TableCell>
          <TableCell>Amethyst</TableCell>
          <TableCell>104</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>);
}
