import AddButton from '../components/AddButton';
import Table from '../components/Table';
import odersData from '../../../config/db_orders.json';

import MonthPicker from '../components/MonthPicker';
import { useState } from 'react';
import { getMonthFromString, getYearFromString } from '../lib/utils/formatDate';
import OrderRow from '../components/OrderRow';

function OrdersPage() {
  const odersHeaderInfo = [
    'Date',
    'Category',
    'Customer',
    'Amount, hour',
    'Sum, uah',
    'Comments',
    'Status of works',
    'Status of payments',
    'Edit',
    'Delete',
  ];

  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const onNextMonth = () => {
    if (month == 11) {
      setMonth(prev => prev - 12);
      setYear(prev => prev + 1);
    }
    setMonth(prev => prev + 1);
  };

  const onPrevMonth = () => {
    if (month == 0) {
      setMonth(prev => prev + 12);
      setYear(prev => prev - 1);
    }
    setMonth(prev => prev - 1);
  };

  return (
    <>
      <MonthPicker
        onNextClick={onNextMonth}
        onPrevClick={onPrevMonth}
        month={month}
        year={year}
        className="mb-4"
      />
      <Table title={'Orders'} tableHeadData={odersHeaderInfo}>
        {odersData
          .filter(
            item =>
              getMonthFromString(item.date) === month &&
              getYearFromString(item.date) === year
          )
          .map(order => (
            <OrderRow
              key={order.id}
              date={order.date}
              productName={order.product_name}
              customerId={order.customer_id}
              customer={order.customer}
              hours={order.hours}
              sum={order.sum}
              comment={order.comment}
              workStatus={order.work_status}
              paymentStatus={order.payment_status}
            />
          ))}
      </Table>
      <AddButton onClick={() => console.log('Click')} className="mt-2">
        New Order
      </AddButton>
    </>
  );
}

export default OrdersPage;
