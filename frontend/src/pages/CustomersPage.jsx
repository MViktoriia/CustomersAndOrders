import Table from '../components/Table';
import ordersData from '../../../config/db_orders.json';
import customersData from '../../../config/db_customers.json';
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import AddButton from '../components/AddButton';

function CustomersPage() {
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

  return (
    <>
      <Table title={'Customers'} tableHeadData={headerItems}>
        {customersData.map(customer => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>
              {ordersData
                .filter(order => order.customer_id === customer.id)
                .map(order => +order.hours)
                .reduce((acc, curVal) => acc + curVal, 0)}
            </td>
            <td>
              {ordersData
                .filter(order => order.customer_id === customer.id)
                .map(order => +order.sum)
                .reduce((acc, curVal) => acc + curVal, 0)}
            </td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.website}</td>
            <td>{customer.country}</td>
            <td>{customer.info}</td>
            <td>
              <MdOutlineEdit />
            </td>
            <td>
              <MdOutlineDeleteOutline />
            </td>
          </tr>
        ))}
      </Table>
      <AddButton onClick={() => console.log('Click')} btnClass="mt-2">
        New customer
      </AddButton>
    </>
  );
}

export default CustomersPage;
