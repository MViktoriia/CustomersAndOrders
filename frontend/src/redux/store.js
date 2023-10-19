import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './customers/customersSlice';
import ordersReducer from './orders/ordersSlice';

export const store = configureStore({
  reducer: { customers: customersReducer, orders: ordersReducer },
});
