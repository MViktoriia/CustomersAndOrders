import DashboardStatsGrid from '../components/DashboardStatsGrid';
import OrdersSummury from '../components/OrdersSummury';

function DushboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <OrdersSummury />
      </div>
    </div>
  );
}

export default DushboardPage;
