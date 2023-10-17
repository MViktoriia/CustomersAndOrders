import { createSlice } from '@reduxjs/toolkit';
import customersData from '../../../../config/db_customers.json';

const initialState = {
  list: customersData,
  isLoading: false,
  error: null,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer(state, { payload }) {
      state.list.push({
        id: payload.id,
        name: payload.name,
        birthday: payload.birthday,
        source: payload.source,
        email: payload.email,
        phone: payload.phone,
        website: payload.website,
        country: payload.country,
        info: payload.info,
      });
    },
    editCustomer(state, { payload }) {
      const editedCustomer = state.list.find(
        customer => customer.id === payload.id
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
    },
    removeCustomer(state, { payload }) {
      state.list = state.list.filter(customer => customer.id !== payload);
    },
  },
});

export default customersSlice.reducer;
export const { addCustomer, editCustomer, removeCustomer } =
  customersSlice.actions;
