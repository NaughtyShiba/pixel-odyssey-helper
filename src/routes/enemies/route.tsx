import { EnemyDropsTable } from "@/features/bestiary/components/drop-table";
import { EnemySelectionProvider } from "@/features/bestiary/context";

export default function EnemiesRoute() {
  return (
    <EnemySelectionProvider>
      <EnemyDropsTable />
    </EnemySelectionProvider>
  );
}
