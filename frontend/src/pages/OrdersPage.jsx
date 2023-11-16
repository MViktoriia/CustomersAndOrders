import AddButton from '../components/AddButton';
import Table from '../components/Table';
import MonthPicker from '../components/MonthPicker';
import { useEffect, useState } from 'react';
import {
  formatDate,
  getMonthFromString,
  getYearFromString,
} from '../lib/utils/formatDate';
import OrderRow from '../components/OrderRow';
import { createPortal } from 'react-dom';
import Modal from '../components/Modal';
import OrderForm from '../components/OrdersForm';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/orders/ordersSelectors';
import { fetchOrders } from '../redux/orders/ordersOperations';
import { fetchCustomers } from '../redux/customers/customersOperations';

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

  const dispatch = useDispatch();

  const ordersData = useSelector(getOrders);

  const currentDate = new Date();
  const date = formatDate(currentDate);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [isModalShown, setIsModalshown] = useState(false);

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

  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleAddButtonClick = () => {
    setIsModalshown(true);
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
        {ordersData
          .filter(
            item =>
              getMonthFromString(item.date) === month &&
              getYearFromString(item.date) === year
          )
          .map(order => (
            <OrderRow
              key={order._id}
              id={order._id}
              date={order.date}
              productName={order.productName}
              customer={order.customer}
              hours={order.hours}
              sum={order.sum}
              comment={order.comment}
              workStatus={order.workStatus}
              paymentStatus={order.paymentStatus}
            />
          ))}
      </Table>
      <AddButton onClick={handleAddButtonClick} className="mt-2">
        New Order
      </AddButton>
      {isModalShown &&
        createPortal(
          <Modal onClose={() => setIsModalshown(false)}>
            <OrderForm
              setIsModalOpen={setIsModalshown}
              date={date}
              productName="Photo"
              customer="65390e5242301605bbf8330d"
              hours=""
              sum=""
              comment=""
              workStatus="done"
              paymentStatus="paid"
              isEdit={false}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}

export default OrdersPage;
