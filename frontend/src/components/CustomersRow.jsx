import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeCustomer } from '../redux/customers/customersSlice';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import CustomerForm from './CustomerForm';

function CustomersRow({
  id,
  name,
  birthday,
  source,
  ordersData,
  email,
  phone,
  website,
  country,
  info,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = id => {
    console.log(dispatch(removeCustomer(id)));
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          {ordersData
            .filter(order => order.customer_id === id)
            .map(order => +order.hours)
            .reduce((acc, curVal) => acc + curVal, 0)}
        </td>
        <td>
          {ordersData
            .filter(order => order.customer_id === id)
            .map(order => +order.sum)
            .reduce((acc, curVal) => acc + curVal, 0)}
        </td>
        <td>
          <a href={`mailto:${email}`}>{email}</a>
        </td>
        <td>
          <a href={`tel:${phone}`}>{phone}</a>
        </td>
        <td>
          <a href={website} target="_blank" rel="noreferrer noopener">
            {website}
          </a>
        </td>
        <td>{country}</td>
        <td>{info}</td>
        <td>
          <MdOutlineEdit fontSize={20} onClick={handleEditClick} />
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
            <CustomerForm
              customerData={{
                id,
                name,
                birthday,
                source,
                email,
                phone,
                website,
                country,
                info,
              }}
              setIsModalOpen={setIsModalOpen}
              isEdit={true}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}

export default CustomersRow;

CustomersRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  ordersData: PropTypes.array.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
