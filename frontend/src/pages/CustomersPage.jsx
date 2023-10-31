import Table from '../components/Table';
import AddButton from '../components/AddButton';
import CustomersRow from '../components/CustomersRow';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import CustomerForm from '../components/CustomerForm';

import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/customers/customersSelectors';
import { createPortal } from 'react-dom';
import { getOrders } from '../redux/orders/ordersSelectors';
import { fetchCustomers } from '../redux/customers/customersOperations';

function CustomersPage() {
  const dispatch = useDispatch();

  const customers = useSelector(getCustomers);
  const ordersData = useSelector(getOrders);
  const [isModalShown, setIsModalshown] = useState(false);

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

  useEffect(() => {
    const action = fetchCustomers();
    dispatch(action);
  }, [dispatch]);

  const handleAddButtonClick = () => {
    setIsModalshown(true);
  };

  return (
    <>
      <Table title={'Customers'} tableHeadData={headerItems}>
        {customers.map(customer => (
          <CustomersRow
            key={customer._id}
            id={customer._id}
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
              // customerData={{
              //   name: '',
              //   birthday: '',
              //   source: 'instagram',
              //   email: '',
              //   phone: '',
              //   website: '',
              //   country: '',
              //   info: '',
              // }}
              isEdit={false}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}

export default CustomersPage;
