import PontoManager from "./components/PontoManager";
import PointsChart from "./components/PointsChart";

export default function PontosPage() {
  return (
    <div className="flex flex-1 min-w-0 h-full">
      <PontoManager />
      <PointsChart />
    </div>
  );
}
