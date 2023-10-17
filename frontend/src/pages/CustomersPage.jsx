import Table from '../components/Table';
import ordersData from '../../../config/db_orders.json';
import AddButton from '../components/AddButton';
import CustomersRow from '../components/CustomersRow';
import { useState } from 'react';
import Modal from '../components/Modal';
import CustomerForm from '../components/CustomerForm';

import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/customers/customersSelectors';
import { nanoid } from 'nanoid';
import { addCustomer } from '../redux/customers/customersSlice';
import { createPortal } from 'react-dom';

function CustomersPage() {
  const dispatch = useDispatch();

  const customers = useSelector(getCustomers);
  const [isModalShown, setIsModalshown] = useState(false);
  const [newCustomerId, setNewCustomerId] = useState('');

  const headerItems = [
    'Customer',
    'Total, hours',
    'Total sum, uah',
    'Email',
    'Phone',
    'Web-site',
    'Country',
    'Coments',
    'Edit',
    'Delete',
  ];

  const handleAddButtonClick = () => {
    const id = nanoid();
    setNewCustomerId(id);

    setIsModalshown(true);
    const newCustomer = {
      id: id,
      name: '',
      birthday: '',
      source: 'instagram',
      email: '',
      phone: '',
      website: '',
      country: '',
      info: '',
    };
    console.log(newCustomer);
    dispatch(addCustomer(newCustomer));
  };

  return (
    <>
      <Table title={'Customers'} tableHeadData={headerItems}>
        {customers.map(customer => (
          <CustomersRow
            key={customer.id}
            id={customer.id}
            name={customer.name}
            birthday={customer.birthday}
            source={customer.source}
            ordersData={ordersData}
            email={customer.email}
            phone={customer.phone}
            website={customer.website}
            country={customer.country}
            info={customer.info}
            setIsModalOpen={setIsModalshown}
          />
        ))}
      </Table>
      <AddButton onClick={handleAddButtonClick} className="mt-2" type="button">
        New customer
      </AddButton>
      {isModalShown &&
        createPortal(
          <Modal onClose={() => setIsModalshown(false)}>
            <CustomerForm
              setIsModalOpen={setIsModalshown}
              customerData={{
                id: newCustomerId,
                name: '',
                birthday: '',
                source: 'instagram',
                email: '',
                phone: '',
                website: '',
                country: '',
                info: '',
              }}
              isEdit={false}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}

export default CustomersPage;
