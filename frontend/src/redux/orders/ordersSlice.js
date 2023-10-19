import { createSlice } from '@reduxjs/toolkit';
import ordersData from '../../../../config/db_orders.json';

const initialState = {
  list: ordersData,
  isLoading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, { payload }) {
      state.list.push({
        id: payload.id,
        date: payload.date,
        productName: payload.productName,
        customerId: payload.customerId,
        customerName: payload.customerName,
        hours: payload.hours,
        sum: payload.sum,
        comment: payload.comment,
        workStatus: payload.workStatus,
        paymentStatus: payload.paymentStatus,
      });
    },
    editOrder(state, { payload }) {
      const editedOrder = state.list.find(order => order.id === payload.id);

      if (editedOrder) {
        editedOrder.date = payload.date;
        editedOrder.productName = payload.productName;
        editedOrder.customerId = payload.customerId;
        editedOrder.customerName = payload.customerName;
        editedOrder.hours = payload.hours;
        editedOrder.sum = payload.sum;
        editedOrder.comment = payload.comment;
        editedOrder.workStatus = payload.workStatus;
        editedOrder.paymentStatus = payload.paymentStatus;
      }
    },
    removeOrder(state, { payload }) {
      state.list = state.list.filter(order => order.id !== payload);
    },
  },
});

export default ordersSlice.reducer;
export const { addOrder, editOrder, removeOrder } = ordersSlice.actions;
