import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/utils/getOrderStatus';
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';

function OrderRow({
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
  return (
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
        <MdOutlineEdit />
      </td>
      <td>
        <MdOutlineDeleteOutline />
      </td>
    </tr>
  );
}

export default OrderRow;

OrderRow.propTypes = {
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
