import { PontoManager, PointsChart } from "@/features/pontos";

export default function PontosPage() {
  return (
    <div className="flex flex-1 min-w-0 h-full">
      <PontoManager />
      <PointsChart />
    </div>
  );
}
