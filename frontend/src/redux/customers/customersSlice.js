import { createSlice } from '@reduxjs/toolkit';
// import customersData from '../../../../config/db_customers.json';
import { fetchCustomers, addCustomer } from './customersOperations';

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
  },
  // reducers: {
  //   addCustomer(state, { payload }) {
  //     state.list.push({
  //       id: payload.id,
  //       name: payload.name,
  //       birthday: payload.birthday,
  //       source: payload.source,
  //       email: payload.email,
  //       phone: payload.phone,
  //       website: payload.website,
  //       country: payload.country,
  //       info: payload.info,
  //     });
  //   },
  //   editCustomer(state, { payload }) {
  //     const editedCustomer = state.list.find(
  //       customer => customer.id === payload.id
  //     );

  //     if (editedCustomer) {
  //       editedCustomer.name = payload.name;
  //       editedCustomer.birthday = payload.birthday;
  //       editedCustomer.source = payload.source;
  //       editedCustomer.email = payload.email;
  //       editedCustomer.phone = payload.phone;
  //       editedCustomer.website = payload.website;
  //       editedCustomer.country = payload.country;
  //       editedCustomer.info = payload.info;
  //     }
  //   },
  //   removeCustomer(state, { payload }) {
  //     state.list = state.list.filter(customer => customer.id !== payload);
  //   },
  // },
});

export default customersSlice.reducer;
// export const { addCustomer, editCustomer, removeCustomer } =
//   customersSlice.actions;
