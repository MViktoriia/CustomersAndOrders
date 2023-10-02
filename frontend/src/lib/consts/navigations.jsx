import {
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/orders',
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: <HiOutlineUsers />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />,
  },
  {
    key: 'support',
    label: 'Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
