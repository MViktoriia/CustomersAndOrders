import DashboardStatsGrid from './DashboardStatsGrid';
import OrdersSummury from './OrdersSummury';

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <OrdersSummury />
      </div>
    </div>
  );
}

export default Dashboard;
