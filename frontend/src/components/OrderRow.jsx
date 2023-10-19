import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/utils/getOrderStatus';
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeOrder } from '../redux/orders/ordersSlice';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import OrderForm from './OrdersForm';
import { useState } from 'react';
import { getCustomers } from '../redux/customers/customersSelectors';

function OrderRow({
  id,
  date,
  productName,
  customerId,
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

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = id => {
    console.log(dispatch(removeOrder(id)));
  };

  return (
    <>
      <tr>
        <td>{new Date(date).toLocaleDateString()}</td>
        <td>{productName}</td>
        <td>
          <Link to={`/customer/${customerId}`}>{customer}</Link>
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
              orderData={{
                id,
                date,
                productName,
                customerId,
                customerName: customer,
                hours,
                sum,
                comment,
                workStatus,
                paymentStatus,
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

export default OrderRow;

OrderRow.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  customerId: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  sum: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  workStatus: PropTypes.string.isRequired,
  paymentStatus: PropTypes.string.isRequired,
};
