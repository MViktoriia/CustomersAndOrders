import AddButton from '../components/AddButton';
import Table from '../components/Table';
import MonthPicker from '../components/MonthPicker';
import { useState } from 'react';
import {
  formatDate,
  getMonthFromString,
  getYearFromString,
} from '../lib/utils/formatDate';
import OrderRow from '../components/OrderRow';
import { createPortal } from 'react-dom';
import Modal from '../components/Modal';
import OrderForm from '../components/OrdersForm';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../redux/orders/ordersSlice';
import { getCustomers } from '../redux/customers/customersSelectors';
import { getOrders } from '../redux/orders/ordersSelectors';

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

  const customersData = useSelector(getCustomers);
  const ordersData = useSelector(getOrders);

  const currentDate = new Date();
  const date = formatDate(currentDate);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [isModalShown, setIsModalshown] = useState(false);
  const [newOrderId, setNewOrderId] = useState('');

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

  const handleAddButtonClick = () => {
    const id = nanoid();

    setNewOrderId(id);

    setIsModalshown(true);
    const newOrder = {
      id,
      date,
      productName: 'photo',
      customerId: '',
      customerName: '',
      hours: '',
      sum: '',
      comment: '',
      workStatus: '',
      paymentStatus: '',
    };

    dispatch(addOrder(newOrder));
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
              key={order.id}
              id={order.id}
              date={order.date}
              productName={order.productName}
              customerId={order.customerId}
              customer={
                customersData.find(customer => customer.id === order.customerId)
                  ?.name ?? ''
              }
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
              orderData={{
                id: newOrderId,
                date,
                productName: '',
                customerId: '',
                customerName: '',
                hours: '',
                sum: '',
                comment: '',
                workStatus: '',
                paymentStatus: '',
              }}
              customersData={customersData}
              isEdit={false}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}

export default OrdersPage;
