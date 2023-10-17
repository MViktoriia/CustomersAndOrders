import { configureStore } from '@reduxjs/toolkit';
import customersReduser from './customers/customersSlice';

export const store = configureStore({
  reducer: { customers: customersReduser },
});
