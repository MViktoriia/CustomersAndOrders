import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/utils/getOrderStatus';
import Modal from './Modal';
import OrderForm from './OrdersForm';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/customers/customersSelectors';
import { deleteOrder } from '../redux/orders/ordersOperations';

function OrderRow({
  id,
  date,
  productName,
  customer,
  hours,
  sum,
  comment,
  workStatus,
  paymentStatus,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const customersData = useSelector(getCustomers);
  const customerName =
    customersData.find(item => item._id === customer)?.name ?? '';

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = id => {
    dispatch(deleteOrder(id));
  };

  return (
    <>
      <tr>
        <td>{new Date(date).toLocaleDateString()}</td>
        <td>{productName}</td>
        <td>
          <Link to={`/customer/${customer}`}>{customerName}</Link>
        </td>
        <td>{hours}</td>
        <td>{sum}</td>
        <td>{comment}</td>
        <td>{getOrderStatus(workStatus)}</td>
        <td>{getOrderStatus(paymentStatus)}</td>
        <td>
          <button onClick={handleEditClick}>
            <MdOutlineEdit fontSize={20} />
          </button>
        </td>
        <td>
          <button onClick={() => handleDeleteClick(id)}>
            <MdOutlineDeleteOutline fontSize={20} />
          </button>
        </td>
      </tr>
      {isModalOpen &&
        createPortal(
          <Modal
            onClose={() => {
              setIsModalOpen(false);
            }}
          >
            <OrderForm
              setIsModalOpen={setIsModalOpen}
              id={id}
              date={date}
              productName={productName}
              customer={customer}
              hours={hours}
              sum={sum}
              comment={comment}
              workStatus={workStatus}
              paymentStatus={paymentStatus}
              isEdit={true}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}

export default OrderRow;

OrderRow.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  sum: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  workStatus: PropTypes.string.isRequired,
  paymentStatus: PropTypes.string.isRequired,
};
