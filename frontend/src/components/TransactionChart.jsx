import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { months } from '../lib/consts/months';
import { getOrders } from '../redux/orders/ordersSelectors';
import { getSumByMonth } from '../lib/utils/getsumByMonths';

function TransactionChart() {
  const orders = useSelector(getOrders);

  const data = months.map((month, index) => {
    return {
      month,
      'Incom 2023': getSumByMonth(index, 2023, orders),
      'Incom 2022': getSumByMonth(index, 2022, orders),
    };
  });

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <p className="text-gray-700 font-medium">Sales</p>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={500}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Incom 2023" fill="#0ea5e9" />
            {/* <Bar dataKey="Incom 2022" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TransactionChart;
