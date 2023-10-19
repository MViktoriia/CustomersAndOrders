import ordersData from '../../../config/db_orders.json';
import Table from './Table';

function OrdersSummury() {
  const categories = [
    { id: '1', name: 'photo' },
    { id: '2', name: 'video' },
    { id: '2', name: 'photo & video' },
  ];
  const summuryHeaders = [
    'Category',
    'Amount of orders',
    'Sum of orders, uah',
    'Amount done',
    'Amount in progress',
    'Amount of paid',
    'Amount of unpaid',
  ];
  return (
    <Table title={'Orders Summury'} tableHeadData={summuryHeaders}>
      {categories.map(category => (
        <tr key={category.name}>
          <td>{category.name}</td>
          <td>
            {
              ordersData.filter(order => order.productName === category.name)
                .length
            }
          </td>
          <td>
            {ordersData
              .filter(order => order.productName === category.name)
              .map(catOrder => +catOrder.sum)
              .reduce((acc, prevVal) => acc + prevVal, 0)}
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.productName === category.name &&
                  order.workStatus === 'done'
              ).length
            }
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.productName === category.name &&
                  order.workStatus === 'in progress'
              ).length
            }
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.productName === category.name &&
                  order.paymentStatus === 'paid'
              ).length
            }
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.productName === category.name &&
                  order.paymentStatus === 'unpaid'
              ).length
            }
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default OrdersSummury;
