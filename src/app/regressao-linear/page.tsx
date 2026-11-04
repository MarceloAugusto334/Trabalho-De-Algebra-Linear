import RegressaoManager from "./components/RegressaoManager";
import RegressaoChart from "./components/RegressaoChart";

export default function RegressaoLinearPage() {
  return (
    <div className="flex flex-1 min-w-0 h-full">
      <RegressaoManager />
      <RegressaoChart />
    </div>
  );
}
