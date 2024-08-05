import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export default function EnemiesRoute() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Level</TableHead>
          <TableHead>Stat increease</TableHead>
          <TableHead>Obols Required</TableHead>
          <TableHead>Total Obols Required</TableHead>
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
  );
}