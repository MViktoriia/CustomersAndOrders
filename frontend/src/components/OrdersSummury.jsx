import ordersData from '../../../config/db_orders.json';
import Table from './Table';

function OrdersSummury() {
  const categories = [
    { id: '1', name: 'foto' },
    { id: '2', name: 'video' },
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
              ordersData.filter(order => order.product_name === category.name)
                .length
            }
          </td>
          <td>
            {ordersData
              .filter(order => order.product_name === category.name)
              .map(catOrder => +catOrder.sum)
              .reduce((acc, prevVal) => acc + prevVal, 0)}
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.product_name === category.name &&
                  order.work_status === 'done'
              ).length
            }
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.product_name === category.name &&
                  order.work_status === 'in progress'
              ).length
            }
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.product_name === category.name &&
                  order.payment_status === 'paid'
              ).length
            }
          </td>
          <td>
            {
              ordersData.filter(
                order =>
                  order.product_name === category.name &&
                  order.payment_status === 'unpaid'
              ).length
            }
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default OrdersSummury;
