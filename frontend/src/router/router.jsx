import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage.jsx';
import CustomersPage from '../pages/CustomersPage.jsx';
import OrdersPage from '../pages/OrdersPage.jsx';
import DushboardPage from '../pages/DushboardPage.jsx';
import Layout from '../components/Layout';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <DushboardPage />,
        },
        {
          path: 'orders',
          element: <OrdersPage />,
        },
        {
          path: 'customers',
          element: <CustomersPage />,
        },
      ],
    },
  ],
  { basename: 'customers-orders-lac.vercel.app' }
);
