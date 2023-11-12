import { createSlice } from '@reduxjs/toolkit';
// import customersData from '../../../../config/db_customers.json';
import {
  fetchCustomers,
  addCustomer,
  editCustomer,
  deleteCustomer,
} from './customersOperations';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCustomers.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCustomers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(addCustomer.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addCustomer.fulfilled, (state, { payload }) => {
      state.list.push(payload);
      state.isLoading = false;
    });
    builder.addCase(addCustomer.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(editCustomer.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(editCustomer.fulfilled, (state, { payload }) => {
      const editedCustomer = state.list.find(
        customer => customer._id === payload._id
      );

      if (editedCustomer) {
        editedCustomer.name = payload.name;
        editedCustomer.birthday = payload.birthday;
        editedCustomer.source = payload.source;
        editedCustomer.email = payload.email;
        editedCustomer.phone = payload.phone;
        editedCustomer.website = payload.website;
        editedCustomer.country = payload.country;
        editedCustomer.info = payload.info;
      }

      state.isLoading = false;
    });
    builder.addCase(editCustomer.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(deleteCustomer.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, { payload }) => {
      state.list = state.list.filter(customer => customer._id !== payload);
      state.isLoading = false;
    });
    builder.addCase(deleteCustomer.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default customersSlice.reducer;
// export const { addCustomer, editCustomer, removeCustomer } =
//   customersSlice.actions;
