import DashboardStatsGrid from '../components/DashboardStatsGrid';
import OrdersSummury from '../components/OrdersSummury';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/orders/ordersSelectors';
import { getCustomers } from '../redux/customers/customersSelectors';
import { getMonthFromString, getYearFromString } from '../lib/utils/formatDate';
import { useEffect } from 'react';
import { fetchCustomers } from '../redux/customers/customersOperations';
import { fetchOrders } from '../redux/orders/ordersOperations';

function DushboardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = useSelector(getOrders);
  const customers = useSelector(getCustomers);

  const curDate = new Date();
  const curMonth = curDate.getMonth();
  const prevMonth = curMonth - 1;
  const curYear = curDate.getFullYear();

  const totalSalesCurMonth = orders
    .filter(
      item =>
        getMonthFromString(item.date) === curMonth &&
        getYearFromString(item.date) === curYear
    )
    .map(order => order.sum)
    .reduce((prevVal, curVal) => Number(prevVal) + Number(curVal), 0);

  const totalSalesPrevMonth = orders
    .filter(
      item =>
        getMonthFromString(item.date) === prevMonth &&
        getYearFromString(item.date) === curYear
    )
    .map(order => order.sum)
    .reduce((prevVal, curVal) => Number(prevVal) + Number(curVal), 0);

  const totalCustomers = customers.length;

  const totalOrders = orders.length;

  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid
        totalSales={totalSalesCurMonth}
        changeInSales={totalSalesCurMonth - totalSalesPrevMonth}
        totalCustomers={totalCustomers}
        totalOrders={totalOrders}
      />
      <div className="flex flex-row gap-4 w-full">
        <OrdersSummury />
      </div>
    </div>
  );
}

export default DushboardPage;
