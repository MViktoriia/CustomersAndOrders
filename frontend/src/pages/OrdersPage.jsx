import AddButton from '../components/AddButton';
import Table from '../components/Table';
import odersData from '../../../config/db_orders.json';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/utils/getOrderStatus';
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import MonthPicker from '../components/MonthPicker';
import { useState } from 'react';
import { getMonthFromString, getYearFromString } from '../lib/utils/formatDate';

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
            <tr key={order.id}>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{order.product_name}</td>
              <td>
                <Link to={`/customer/${order.customer_id}`}>
                  {order.customer}
                </Link>
              </td>
              <td>{order.hours}</td>
              <td>{order.sum}</td>
              <td>{order.comment}</td>
              <td>{getOrderStatus(order.work_status)}</td>
              <td>{getOrderStatus(order.payment_status)}</td>
              <td>
                <MdOutlineEdit />
              </td>
              <td>
                <MdOutlineDeleteOutline />
              </td>
            </tr>
          ))}
      </Table>
      <AddButton onClick={() => console.log('Click')} btnClass="mt-4">
        New Order
      </AddButton>
    </>
  );
}

export default OrdersPage;
