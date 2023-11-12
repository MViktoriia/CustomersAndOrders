import { createSlice } from '@reduxjs/toolkit';
import {
  addOrder,
  deleteOrder,
  editOrder,
  fetchOrders,
} from './ordersOperations';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchOrders.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchOrders.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(addOrder.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addOrder.fulfilled, (state, { payload }) => {
      state.list.push(payload);
      state.isLoading = false;
    });
    builder.addCase(addOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(editOrder.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(editOrder.fulfilled, (state, { payload }) => {
      const editedOrder = state.list.find(order => order._id === payload._id);
      if (editedOrder) {
        editedOrder.date = payload.date;
        editedOrder.hours = payload.hours;
        editedOrder.productName = payload.productName;
        editedOrder.customer = payload.customer;
        editedOrder.sum = payload.sum;
        editedOrder.workStatus = payload.workStatus;
        editedOrder.paymentStatus = payload.paymentStatus;
        editedOrder.comment = payload.comment;
      }
      state.isLoading = false;
    });
    builder.addCase(editOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(deleteOrder.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteOrder.fulfilled, (state, { payload }) => {
      state.list = state.list.filter(order => order._id !== payload);
      state.isLoading = false;
    });
    builder.addCase(deleteOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default ordersSlice.reducer;
// export const { addOrder, editOrder, removeOrder } = ordersSlice.actions;
