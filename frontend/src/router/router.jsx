import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Layout.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import CustomersPage from '../pages/CustomersPage.jsx';
import OrdersPage from '../pages/OrdersPage.jsx';
import DushboardPage from '../pages/DushboardPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dushboard',
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
]);
