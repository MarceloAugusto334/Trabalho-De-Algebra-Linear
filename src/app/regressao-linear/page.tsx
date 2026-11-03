import PontoManager from './components/PontoManager';
import RegressaoChart from './components/RegressaoChart';
export default function PontosPage() {
  return (
    <div className="flex flex-1 min-w-0 h-full">
      <PontoManager />
      <RegressaoChart />
    </div>
  );
}
