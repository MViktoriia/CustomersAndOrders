import DashboardStatsGrid from '../components/DashboardStatsGrid';
import OrdersSummury from '../components/OrdersSummury';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/orders/ordersSelectors';
import { getCustomers } from '../redux/customers/customersSelectors';
import { useEffect } from 'react';
import { fetchCustomers } from '../redux/customers/customersOperations';
import { fetchOrders } from '../redux/orders/ordersOperations';
import TransactionChart from '../components/TransactionChart';
import { getSumByYear } from '../lib/utils/getsumByMonths';
import CustomerSourcePieChart from '../components/CustomerSourcePieChart';

function DushboardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = useSelector(getOrders);
  const customers = useSelector(getCustomers);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const totalSalesCurrentYear = getSumByYear(currentYear, orders);
  const totalSalesPreviouseYear = getSumByYear(currentYear - 1, orders);

  const totalCustomers = customers.length;
  const totalOrders = orders.length;

  return (
    <div className="flex flex-col gap-4 h-full">
      <DashboardStatsGrid
        totalSales={totalSalesCurrentYear}
        changeInSales={totalSalesCurrentYear - totalSalesPreviouseYear}
        totalCustomers={totalCustomers}
        totalOrders={totalOrders}
      />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <CustomerSourcePieChart />
      </div>

      <div className="flex flex-row gap-4 w-full">
        <OrdersSummury title={'Orders summary - Year info'} />
      </div>
    </div>
  );
}

export default DushboardPage;
